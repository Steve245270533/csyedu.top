<script setup lang="ts">
import type { NuxtError } from '#app'
defineProps<{ error: NuxtError }>()
useSeoMeta({ title: 'Steve Chen', robots: 'noindex' })
</script>
<template>
  <main class="mx-auto flex min-h-svh max-w-[588px] flex-col justify-center px-6">
    <p class="text-xs text-faint">{{ error.statusCode }}</p>
    <h1 class="mt-3 text-base">
      {{ error.statusCode === 404 ? '这页还没有写下。' : '页面暂时遇到了问题。' }}
    </h1>
    <p class="mt-4 text-muted">去首页看看，或者到 lab 找一个有趣的实验。</p>
    <a href="/" class="text-link mt-7 w-fit text-xs text-muted">← home</a>
  </main>
</template>
