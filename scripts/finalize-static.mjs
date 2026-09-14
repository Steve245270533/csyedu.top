import { writeFile } from 'node:fs/promises'

// Nuxt generates a client-only 404 fallback. Serve readable HTML even without JavaScript.
await writeFile(
  new URL('../.output/public/404.html', import.meta.url),
  `<!doctype html>
<html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Steve Chen</title><link rel="icon" href="/favicon.png"><style>
:root{color-scheme:light dark}body{margin:0;background:#fff;color:#1a1a1a;font:14px/1.8 -apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC",sans-serif}main{box-sizing:border-box;max-width:588px;min-height:100svh;margin:auto;padding:64px 24px;display:flex;flex-direction:column;justify-content:center}h1{font-size:16px;font-weight:400}p{color:#6b6b6b}a{color:inherit;text-underline-offset:4px}nav{display:flex;gap:20px;font-size:12px;margin-top:20px}@media(prefers-color-scheme:dark){body{background:#161616;color:#e8e8e8}p{color:#aaa}}
</style></head><body><main><p>404</p><h1>这页还没有写下。</h1><p>去首页看看，或者到 lab 找一个有趣的实验。</p><nav aria-label="页面导航"><a href="/">← home</a><a href="/lab">lab</a><a href="/contact">contact</a></nav></main></body></html>`,
)
