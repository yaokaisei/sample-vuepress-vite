export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "vuepress + vite",
  "lang": "ja",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "vuepressの環境セットアップ",
      "slug": "vuepressの環境セットアップ",
      "children": [
        {
          "level": 3,
          "title": "設定ファイル構成",
          "slug": "設定ファイル構成",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "バンドラー",
      "slug": "バンドラー",
      "children": []
    },
    {
      "level": 2,
      "title": "プラグイン：ローカル検索",
      "slug": "プラグイン-ローカル検索",
      "children": []
    }
  ],
  "filePathRelative": "README.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
