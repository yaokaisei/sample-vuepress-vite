<template><h1 id="vuepress-vite" tabindex="-1"><a class="header-anchor" href="#vuepress-vite" aria-hidden="true">#</a> vuepress + vite</h1>
<p>vupressのバンドラーをviteに設定して構築した環境サンプルになります。</p>
<table>
<thead>
<tr>
<th style="text-align:left">外部ライブラリ</th>
<th style="text-align:left">バージョン</th>
<th style="text-align:left">詳細</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://github.com/vuepress/vuepress-next" target="_blank" rel="noopener noreferrer">vuepress/vuepress-next<OutboundLink/></a></td>
<td style="text-align:left">^2.0.0-beta.24</td>
<td style="text-align:left">静的サイトジェネレーター</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.npmjs.com/package/vuepress-vite" target="_blank" rel="noopener noreferrer">vuepress-vite<OutboundLink/></a></td>
<td style="text-align:left">^2.0.0-beta.24</td>
<td style="text-align:left">vuepress バンドラーパッケージ</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.npmjs.com/package/vuepress-vite" target="_blank" rel="noopener noreferrer">@vuepress/plugin-search<OutboundLink/></a></td>
<td style="text-align:left">^2.0.0-beta.24</td>
<td style="text-align:left">ローカル検索機能プラグイン</td>
</tr>
</tbody>
</table>
<h2 id="vuepressの環境セットアップ" tabindex="-1"><a class="header-anchor" href="#vuepressの環境セットアップ" aria-hidden="true">#</a> vuepressの環境セットアップ</h2>
<p>公式ドキュメントに沿って、環境をセットアップする。</p>
<blockquote>
<p><a href="https://v2.vuepress.vuejs.org/guide/getting-started.html#prerequisites" target="_blank" rel="noopener noreferrer">Getting Started|VuePress<OutboundLink/></a>
<a href="https://v2.vuepress.vuejs.org/guide/configuration.html#config-scopes" target="_blank" rel="noopener noreferrer">configuration|VuePress<OutboundLink/></a></p>
</blockquote>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code># install in your project
npm i -D vuepress@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="設定ファイル構成" tabindex="-1"><a class="header-anchor" href="#設定ファイル構成" aria-hidden="true">#</a> 設定ファイル構成</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="バンドラー" tabindex="-1"><a class="header-anchor" href="#バンドラー" aria-hidden="true">#</a> バンドラー</h2>
<p>VuePressのデフォルトバンドラーはwebpackになりますが、VuePress v2はサイトを開発および構築するためのバンドラーとして<a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite<OutboundLink/></a>などの他のツールがサポートされています。</p>
<p>コミュニティユーザーによるバンドラーパッケージを作成することはできるが、現時点ではVuePress公式が提供するバンドラーを使用することを推奨されている。</p>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>npm i -D vuepress-vite@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>docs\.vuepress\config.js</code>に以下を設定</p>
<ul>
<li>バンドラーオプションで使用するバンドラーの名前を<code>bundler</code>に指定</li>
<li>バンドラーオプションを別途指定したい場合は<code>bundlerConfig</code>に記述する。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token string">'@vuepress/vite'</span><span class="token punctuation">,</span>
  bundlerConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// vite bundler options</span>
    <span class="token comment">// https://vitejs.dev/config/</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote>
<p><a href="https://v2.vuepress.vuejs.org/guide/bundler.html#bundler" target="_blank" rel="noopener noreferrer">Bundler|VuePress<OutboundLink/></a></p>
</blockquote>
<blockquote>
<p><a href="https://v2.vuepress.vuejs.org/reference/bundler/vite.html#options" target="_blank" rel="noopener noreferrer">Vite Options|VuePress<OutboundLink/></a></p>
</blockquote>
<h2 id="プラグイン-ローカル検索" tabindex="-1"><a class="header-anchor" href="#プラグイン-ローカル検索" aria-hidden="true">#</a> プラグイン：ローカル検索</h2>
<p>1系にはデフォルトで実装されていたローカル検索機能は別途ブラグインを反映する必要があります。</p>
<p>このプラグインは、ローカルのページから検索インデックスを生成し、ユーザーがサイトへアクセスしたときに検索インデックスファイルを読み込みます。</p>
<p>つまり、これは軽量の組み込み検索であり、外部からのアクセス要求等が発生しないプラグインとなります。</p>
<blockquote>
<p><a href="https://v2.vuepress.vuejs.org/reference/plugin/search.html#local-search-index" target="_blank" rel="noopener noreferrer">@vuepress/plugin-search<OutboundLink/></a></p>
</blockquote>
</template>
