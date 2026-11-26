import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// og:image は絶対URLが必要なため、Vercel のビルド時に渡される本番ドメインから組み立てる
function ogImagePlugin(): Plugin {
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL
  return {
    name: 'og-image',
    transformIndexHtml(html) {
      if (!host) return html.replace('<!--og-image-->', '')
      return html.replace(
        '<!--og-image-->',
        `<meta property="og:image" content="https://${host}/og-image.jpg" />\n    <meta property="og:url" content="https://${host}/" />`,
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), ogImagePlugin()],
})
