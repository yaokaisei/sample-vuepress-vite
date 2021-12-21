export const siteData = {
  "base": "/",
  "lang": "ja",
  "title": "VuePress + Vite",
  "description": "This is my first VuePress site with Vite",
  "head": [
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://fonts.googleapis.com/css?family=Noto+Sans+JP"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
