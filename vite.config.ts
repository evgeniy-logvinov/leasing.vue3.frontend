import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// You can also use unplugin-vue-components
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// or use unplugin-element-plus
import ElementPlus from 'unplugin-element-plus/vite'

// vite.config.ts
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    // use unplugin-vue-components
    // Components({
    //   resolvers: [
    //     ElementPlusResolver({
    //       importStyle: "sass",
    //       // directives: true,
    //       // version: "1.2.0-beta.1",
    //     }),
    //   ],
    // }),
    // or use unplugin-element-plus
    ElementPlus({
      useSource: true,
    }),
  ],
  define: {
    'process.env': process.env
  }
})