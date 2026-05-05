import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import svgr from "vite-plugin-svgr";

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
    plugins: [svgr(), react(), surge200Plugin()],
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
    }
})