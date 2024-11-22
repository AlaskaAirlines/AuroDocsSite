import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from "vite-plugin-svgr";

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '/',
    publicDir: 'public',
    plugins: [svgr(), react()],
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