<script setup lang="ts">
usePageSeo(
  '前端、全栈与一点好奇心',
  '我是 SteveChen，拥有 4 年多经验的前端开发者，探索 Nuxt 全栈应用、Three.js、AI Agent 与中文写作。',
  '/',
)
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'SteveChen',
        url: 'https://csyedu.top',
        image: 'https://csyedu.top/images/avatar.webp',
        jobTitle: '前端开发工程师',
        knowsAbout: [
          'TypeScript',
          'Vue',
          'Nuxt',
          'Prisma',
          'MySQL',
          'Better Auth',
          'Three.js',
          'AI Agent',
        ],
        sameAs: ['https://github.com/Steve245270533', 'https://space.bilibili.com/241734916'],
      }),
    },
  ],
})
</script>
<template>
  <main id="main-content" class="flex min-h-svh items-center justify-center px-6 py-16 sm:py-20">
    <div class="w-full max-w-[540px]">
      <HomeIntroduction />
      <SiteFooter signature />
    </div>
  </main>
</template>
