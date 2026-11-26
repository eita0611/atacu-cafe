# atacu cafe ウェブサイト（提案用デモ）

神保町のカフェ「atacu cafe」への提案用の **非公式デモサイト** です。
Readdy で作成したデザインを分析し、世界観を引き継いだうえで、Readdy に依存しない Vite + React のサイトとして作り直しました。

- 検索エンジンから除外しています（meta robots・`X-Robots-Tag`・robots.txt）
- ページ上部とフッターに「非公式デモ」の注意書きを表示しています
- 写真・映像はすべてイメージです（Readdy でこのデザイン用に生成された画像・映像）。店舗の写真に差し替えられます
- 営業時間・個別の価格など、確認できていない情報は載せていません

## 起動

このMacでは Node.js を `~/.local/node` に入れているため、最初に次を実行します。

```bash
export PATH="$HOME/.local/node/bin:$PATH"
npm install
npm run dev
```

| コマンド          | 内容                                                       |
| ----------------- | ---------------------------------------------------------- |
| `npm run dev`     | 開発サーバー                                               |
| `npm run build`   | 型チェック → ビルド → HTML の書き出し（`dist/`）           |
| `npm run preview` | ビルドしたサイトを起動                                     |
| `npm run images`  | `photos/` の写真から表示用の WebP と寸法一覧を作り直す     |

## 内容を変更するとき

| 変更したいもの                         | 場所                                                     |
| -------------------------------------- | -------------------------------------------------------- |
| 住所・電話・Instagram・メニュー・文章 | `src/data/site.ts`                                       |
| 写真                                   | `photos/` に同じ名前で置き換えて `npm run images`        |
| トップの映像                           | `public/media/hero-1280.mp4`（PC）・`hero-854.mp4`（スマホ） |
| 色・書体・余白                         | `src/styles/base.css` の先頭（`:root`）                  |

見出しは `lines` に1行ずつ書きます。行の中の `/` は文節の区切りで、スマートフォンではそこでだけ折り返します。`accent` に書いた語は差し色になります。

## 構成

React 19 / TypeScript / Vite。CSS は素の CSS（コンポーネントごとに1ファイル）です。1ページ構成で、ビルド時に HTML を書き出してから hydrate します。

```
src/
  data/site.ts        店舗情報・メニュー・文章
  data/images.ts      写真の寸法一覧（npm run images が生成）
  components/         ヘッダー・各セクション・フッター（.tsx と .css）
  hooks/              表示演出・ナビの現在地・スクロール位置
  styles/base.css     色・書体・余白などの基本値と共通部品
  styles/chrome.css   上部のデモ表示・スマートフォン下部の固定リンク
photos/               写真の元データ
public/images/        表示用の WebP（480〜2000px）
public/media/         トップの映像（圧縮済み）
```

## 参考デザインからの主な変更

- 見出しの不自然な改行（「で。」だけが1行になる等）を、文節単位の改行に修正
- 本文は文節で折り返す（Chrome / Edge）
- スマートフォンではトップの写真を見出しの直後に置き、最初の画面に写真が入るように変更
- スマートフォン下部に「メニュー・アクセス・Instagram」の固定リンクを追加
- 別の店名（cafe mori）が写っていた入口の写真と、2か所で重複していた写真を外した
- Web フォントを減らし（本文は端末のゴシック体）、アイコンフォントを SVG に置き換えた
- 映像を 55MB から 2.8MB（PC）/ 1.3MB（スマホ）に圧縮し、ページ表示後に読み込む
- 写真を WebP の複数サイズにして、画面幅に合ったものだけを読み込む
- Readdy の送信先に依存していた「サイトに関するお問い合わせ」フォームを外した
- 「視差効果を減らす」設定では、表示演出と映像の自動再生を止める

## 公開（Vercel）

GitHub のリポジトリを Vercel にインポートすると、`vercel.json` と `package.json` の設定でそのまま公開されます（Framework Preset: Vite、Output: `dist`）。
og:image の URL は Vercel の本番ドメイン（`VERCEL_PROJECT_PRODUCTION_URL`）から自動で組み立てます。
