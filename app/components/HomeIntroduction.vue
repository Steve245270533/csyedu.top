<script setup lang="ts">
import { Box, Terminal, Github, Sprout } from 'lucide-vue-next'
</script>
<template>
  <div class="space-y-9 text-muted">
    <header class="reveal">
      <img
        src="/images/avatar.webp"
        alt="SteveChen 的柴犬头像"
        width="44"
        height="44"
        fetchpriority="high"
        class="mb-9 size-11 rounded-full object-cover transition-transform duration-300 hover:-rotate-12 hover:scale-110"
      />
      <h1 class="sr-only">SteveChen · 前端开发者与全栈探索者</h1>
      <p class="text-ink">
        你好，我是 <span class="whitespace-nowrap">SteveChen</span>，一名有 4
        年多经验的前端开发者，也在向全栈走去。喜欢简洁的界面、清晰的代码，以及把想法做成真正能用的东西。
      </p>
    </header>
    <p class="reveal" :style="{ '--step': 1 }">
      目前在国企做软件开发。日常与 Vue、TypeScript、Cesium、three.js
      打交道，也实践前端工程化与Node全栈。
    </p>
    <p class="reveal" :style="{ '--step': 2 }">
      我做过
      <a
        href="https://github.com/Steve245270533/gallery"
        class="inline-chip"
        target="_blank"
        rel="noopener noreferrer"
        ><Box :size="13" />gallery</a
      >
      数字展馆和一些 Three.js 实验，相关开源项目在
      <a
        href="https://github.com/Steve245270533"
        class="text-link"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub
      </a>
      与
      <a
        href="https://gitee.com/steve007"
        class="text-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gitee
      </a>
      累计收获 1.3k+ stars；也向
      <a
        href="https://github.com/Tresjs/tres/pull/513"
        class="text-link"
        target="_blank"
        rel="noopener noreferrer"
        >TresJS 贡献过 PR</a
      >。 关注 Nuxt + Better Auth + Prisma 相关技术栈，以及 AI Agent、LLM 与 Cloudflare 边缘计算。
    </p>
    <p class="reveal" :style="{ '--step': 3 }">
      代码之外，我也在公众号
      <!-- 代码之外，我也写中文都市短篇小说，反复琢磨人物、叙事与生活的细节。 -->
      <QrCodeDialog
        title="twimark"
        label="twimark"
        image="/images/twimark-qr.png"
        description="扫码关注我的个人公众号"
      />
      记录技术与想法，也在
      <a
        href="https://space.bilibili.com/241734916"
        class="inline-chip"
        target="_blank"
        rel="noopener noreferrer"
        ><img
          src="/images/bilibili.svg"
          class="bilibili-icon"
          width="18"
          height="18"
          alt=""
          aria-hidden="true"
        />bilibili</a
      >
      分享。做产品和写故事，对我来说都是让想法慢慢成形。
    </p>
    <p class="reveal" :style="{ '--step': 4 }">
      可以在
      <a
        href="https://github.com/Steve245270533"
        class="inline-chip"
        target="_blank"
        rel="noopener noreferrer"
        ><Github :size="13" />GitHub</a
      >
      找到我的代码。想聊开发、AI、写作，或一个还没成形的点子，欢迎
      <NuxtLink to="/contact" class="text-link">联系我</NuxtLink>。
    </p>
  </div>
</template>
