import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import svgr from "vite-plugin-svgr";

/**
 * Custom plugin to serve dependency dist directories during dev and copy them to dist on build.
 */
function copyDepFiles() {
  const mappings = [
    {
      urlPrefix: '/styles',
      nodeModulesPath: './node_modules/@aurodesignsystem/webcorestylesheets/dist',
    },
    {
      urlPrefix: '/tokens',
      nodeModulesPath: './node_modules/@aurodesignsystem/design-tokens/dist',
    },
  ];

  function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  return {
    name: "copy-dep-files",

    // Dev: serve files directly from node_modules
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        for (const { urlPrefix, nodeModulesPath } of mappings) {
          if (req.url.startsWith(urlPrefix)) {
            const relativePath = req.url.slice(urlPrefix.length);
            const filePath = path.resolve(nodeModulesPath + relativePath);

            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              const ext = path.extname(filePath);
              const mimeTypes = { '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json' };
              res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          }
        }
        next();
      });
    },

    // Build: copy files into dist
    closeBundle() {
      const outDir = path.resolve('./dist');

      for (const { urlPrefix, nodeModulesPath } of mappings) {
        const dest = path.join(outDir, urlPrefix);
        try {
          copyDir(path.resolve(nodeModulesPath), dest);
          console.log(`Copied ${nodeModulesPath} -> ${dest}`);
        } catch (error) {
          console.error(`Error copying ${nodeModulesPath}:`, error);
        }
      }
    },
  };
}

// Surge uses 200.html as the fallback for client-side routing
function surge200Plugin() {
  return {
    name: 'surge-200-html',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist');
      const src = path.join(outDir, 'index.html');
      const dest = path.join(outDir, '200.html');
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
      }
    }
  };
}

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '/',
  publicDir: 'public',
  plugins: [svgr(), react(), surge200Plugin(), copyDepFiles()],
  assetsInclude: ['**/*.md', '**/*.zip'],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "ROOT": path.resolve(__dirname, "./"),
    }
  },
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000  
    port: 3000,
    fs: {
      cachedChecks: false
    }
  },
  esbuild: {
    loader: 'jsx',
    include: /.*\.jsx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin'],
      },
    },
  },
})