import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // Base path for development and production
  base: '/',
  
  plugins: [
    react({
      // Enable React Fast Refresh for better development performance
      fastRefresh: true,
      // Optimize JSX runtime
      jsxRuntime: 'automatic'
    })
  ],
  
  // Performance optimizations
  build: {
    // Enable minification
    minify: 'terser',
    
    // Terser options for better compression
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      },
      mangle: {
        safari10: true
      }
    },
    
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion'],
          'icons-vendor': ['react-icons'],
          
          // UI components chunk
          'ui-components': [
            './src/components/ui/ClientLogos.jsx',
            './src/components/ui/HeroBanner.jsx',
            './src/components/ui/TestimonialsCarousel.jsx',
            './src/components/ui/CallToAction.jsx'
          ]
        },
        
        // Optimize chunk file names
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop().replace('.jsx', '').replace('.js', '')
            : 'chunk'
          return `js/${facadeModuleId}-[hash].js`
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`
          }
          if (/css/i.test(ext)) {
            return `css/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        }
      }
    },
    
    // Target modern browsers for better optimization
    target: 'es2020',
    
    // Optimize CSS
    cssCodeSplit: true,
    
    // Source maps for debugging (disable in production)
    sourcemap: false,
    
    // Asset optimization
    assetsInlineLimit: 4096 // Inline assets smaller than 4kb
  },
  
  // Development server optimizations
  server: {
    port: 3001,
    host: true,
    open: true, // Automatically open browser
    // Enable HMR for faster development
    hmr: {
      overlay: true
    }
  },
  
  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'react-icons/hi',
      'react-icons/fa'
    ],
    // Exclude large dependencies that don't need pre-bundling
    exclude: []
  },
  
  // Path resolution
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@styles': resolve(__dirname, 'src/styles')
    }
  },
  
  // CSS preprocessing optimizations
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/variables.scss";`
      }
    }
  },
  
  // Preview server config
  preview: {
    port: 3001,
    host: true
  }
})
