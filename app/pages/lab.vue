<script setup lang="ts">
usePageSeo(
  'lab · 开源实验室',
  'SteveChen 的精选公开项目：Three.js 数字展馆、角色控制器、CRT 文字渲染器、Nuxt 全栈应用与开发工具。',
  '/lab',
)
</script>
<template>
  <PageShell title="lab" description="一些做出来的想法。从三维世界，到日常工具。">
    <ProjectList />
    <p class="reveal mt-8 text-xs text-faint" :style="{ '--step': 3 }">
      精选公开项目。项目名通往演示或仓库，<span class="text-muted">GitHub 图标</span
      >通往源码。<br />还有一些探索，留在
      <a
        href="https://github.com/Steve245270533?tab=repositories"
        class="text-link"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub ↗</a
      >。
    </p>
  </PageShell>
</template>
