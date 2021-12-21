export const searchIndex = [
  {
    "title": "vuepress + vite",
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
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
