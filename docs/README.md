# vuepress + vite

vupressのバンドラーをviteに設定して構築した環境サンプルになります。

|  外部ライブラリ  |  バージョン  |  詳細  |
| :--- | :--- | :--- |
|  [vuepress/vuepress-next](https://github.com/vuepress/vuepress-next)  | ^2.0.0-beta.24 |  静的サイトジェネレーター  |
|  [vuepress-vite](https://www.npmjs.com/package/vuepress-vite)  | ^2.0.0-beta.24 |  vuepress バンドラーパッケージ  |
|  [@vuepress/plugin-search](https://www.npmjs.com/package/vuepress-vite)  | ^2.0.0-beta.24 |  ローカル検索機能プラグイン  |

## vuepressの環境セットアップ

公式ドキュメントに沿って、環境をセットアップする。

> [Getting Started|VuePress](https://v2.vuepress.vuejs.org/guide/getting-started.html#prerequisites)
> [configuration|VuePress](https://v2.vuepress.vuejs.org/guide/configuration.html#config-scopes)

``` cmd
# install in your project
npm i -D vuepress@next
```

### 設定ファイル構成

```text
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
```


## バンドラー

VuePressのデフォルトバンドラーはwebpackになりますが、VuePress v2はサイトを開発および構築するためのバンドラーとして[Vite](https://vitejs.dev/)などの他のツールがサポートされています。

コミュニティユーザーによるバンドラーパッケージを作成することはできるが、現時点ではVuePress公式が提供するバンドラーを使用することを推奨されている。

```cmd
npm i -D vuepress-vite@next
```

`docs\.vuepress\config.js`に以下を設定

- バンドラーオプションで使用するバンドラーの名前を`bundler`に指定
- バンドラーオプションを別途指定したい場合は`bundlerConfig`に記述する。

```js
module.exports = {
  bundler: '@vuepress/vite',
  bundlerConfig: {
    // vite bundler options
    // https://vitejs.dev/config/
  },
}
```

> [Bundler|VuePress](https://v2.vuepress.vuejs.org/guide/bundler.html#bundler)

> [Vite Options|VuePress](https://v2.vuepress.vuejs.org/reference/bundler/vite.html#options)

## プラグイン：ローカル検索

1系にはデフォルトで実装されていたローカル検索機能は別途ブラグインを反映する必要があります。

このプラグインは、ローカルのページから検索インデックスを生成し、ユーザーがサイトへアクセスしたときに検索インデックスファイルを読み込みます。

つまり、これは軽量の組み込み検索であり、外部からのアクセス要求等が発生しないプラグインとなります。

> [@vuepress/plugin-search](https://v2.vuepress.vuejs.org/reference/plugin/search.html#local-search-index)