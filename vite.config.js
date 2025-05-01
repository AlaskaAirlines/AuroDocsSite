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
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    // Put React packages in their own chunk
                    if (id.includes('node_modules/react/') || 
                        id.includes('node_modules/react-dom/') || 
                        id.includes('node_modules/react-router-dom/')) {
                        return 'react-vendor';
                    }
                    
                    // Group markdown-related packages
                    if (id.includes('node_modules/react-markdown/') || 
                        id.includes('node_modules/rehype-') || 
                        id.includes('node_modules/remark-') ||
                        id.includes('node_modules/hast-')) {
                        return 'markdown-vendor';
                    }
                    
                    // Group Auro core packages
                    if (id.includes('@aurodesignsystem/webcorestylesheets') ||
                        id.includes('@aurodesignsystem/design-tokens')) {
                        return 'auro-core';
                    }
                    
                    // Group Auro component packages to enable tree-shaking
                    if (id.includes('@aurodesignsystem/auro-') || id.includes('@alaskaairux/')) {
                        // Get the component name from the path
                        const match = id.match(/@(?:aurodesignsystem|alaskaairux)\/auro-([^/]+)/);
                        if (match && match[1]) {
                            // Create a chunk per component
                            return `auro-${match[1]}`;
                        }
                        return 'auro-components';
                    }
                }
            }
        },
        chunkSizeWarningLimit: 2000,
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    }
})
