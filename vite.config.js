import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import svgr from "vite-plugin-svgr";

/**
 * Custom plugin to copy dependency dist directories from node_modules to the public folder.
 */
function copyDepFiles() {
  return {
    name: "copy-dep-files",
    buildStart() {
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

      const copies = [
        {
          src: "./node_modules/@aurodesignsystem/webcorestylesheets/dist",
          dest: "./public/styles",
        },
        {
          src: "./node_modules/@aurodesignsystem/design-tokens/dist",
          dest: "./public/tokens",
        },
      ];

      for (const { src, dest } of copies) {
        try {
          copyDir(path.resolve(src), path.resolve(dest));
          console.log(`Copied ${src} -> ${dest}`);
        } catch (error) {
          console.error(`Error copying ${src}:`, error);
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