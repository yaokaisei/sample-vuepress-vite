import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/works/_github/sample-vuepress-vite/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/works/_github/sample-vuepress-vite/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
