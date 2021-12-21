module.exports = {
    lang: 'ja',

    title: 'VuePress + Vite',

    description: 'This is my first VuePress site with Vite',

    head: [
        ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Noto+Sans+JP`}],
    ],

    bundler: '@vuepress/vite',

    bundlerConfig: {
        // vite bundler options
        // https://vitejs.dev/config/
    },

    themeConfig: {
        logo: 'https://vitejs.dev/logo.svg',
        docsDir: 'docs',
        lastUpdated: '最終更新日時',
        repo: 'https://github.com/yaokaisei/sample-vuepress-vite/',
        repoLabel: 'GitHub',
    },

    plugins: [
        ['@vuepress/plugin-search'],
    ],
}
