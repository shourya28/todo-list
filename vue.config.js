import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

let apiToUse = 'http://localhost:8000/'

module.exports = {
    devServer: {
      proxy: {
        '/todo': {
          target: apiToUse,
          ws: true,
        //   changeOrigin: false,
        //   prependPath: prependPath,
        },
        // '^/p/': {
        //   target: apiToUse,
        //   ws: true,
        //   changeOrigin: true,
        //   prependPath: prependPath,
        // },
      },
    //   port: port,
    //   allowedHosts: 'all',
    //   host: '127.0.0.1',
    },
    // transpileDependencies: ['vuetify'],
    /*
     *  To get Chrome dev tools to render all the development files in their unminified form.
     *  Source: https://www.mistergoodcat.com/post/the-joy-that-is-source-maps-with-vuejs-and-typescript
     */
    // configureWebpack: (config) => {
    //   if (process.env.NODE_ENV === 'development') {
    //     config.devtool = 'eval-source-map';
  
    //     config.output.devtoolModuleFilenameTemplate = (info) =>
    //       info.resourcePath.match(/^\.\/\S*?\.vue$/)
    //         ? `webpack-generated:///${info.resourcePath}?${info.hash}`
    //         : `webpack-yourCode:///${info.resourcePath}`;
  
    //     config.output.devtoolFallbackModuleFilenameTemplate =
    //       'webpack:///[resource-path]?[hash]';
    //   }
    // },
  };