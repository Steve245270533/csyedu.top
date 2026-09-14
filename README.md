# Steve Chen · csyedu.top

使用 Nuxt 4、Vue 3、TypeScript 与 Tailwind CSS 4 构建的个人静态网站，部署到 Cloudflare Workers Static Assets。

## 开发与检查

需要 Node.js 22.12+（推荐 Node.js 24），使用 pnpm 管理依赖。

```sh
pnpm install
pnpm dev
pnpm format
pnpm check
pnpm generate
```

`oxlint` 负责 TypeScript / Vue 脚本检查，`oxfmt` 负责代码格式化，`vue-tsc` 检查 Vue 模板及 TypeScript 类型。

## 部署

```sh
pnpm exec wrangler login
pnpm check
pnpm generate
pnpm exec wrangler deploy --dry-run
pnpm exec wrangler deploy
```
