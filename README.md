# vuepress + vite

vupressのバンドラーをviteに設定して構築した環境サンプルになります。

※ vuepress 2系はまだベータ版です（20210827時点）

|  外部ライブラリ  |  バージョン  |  詳細  |
| :--- | :--- | :--- |
|  [vuepress/vuepress-next](https://github.com/vuepress/vuepress-next)  | ^2.0.0-beta.24 |  静的サイトジェネレーター  |
|  [vuepress-vite](https://www.npmjs.com/package/vuepress-vite)  | ^2.0.0-beta.24 |  vuepress バンドラーパッケージ  |

## コマンド

### パッケージインストール

```
npm i
```

### 作業時

```
npm run docs:dev
```

### ビルド

```
npm run docs:build
```