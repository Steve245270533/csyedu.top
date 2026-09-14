<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
defineProps<{ title: string; description: string }>()
</script>
<template>
  <main id="main-content" class="mx-auto min-h-svh w-full max-w-[588px] px-6 py-16 sm:py-20">
    <NuxtLink to="/" class="reveal text-link inline-flex items-center gap-1.5 text-xs text-faint"
      ><ArrowLeft :size="12" />home</NuxtLink
    >
    <header class="reveal mb-10 mt-7" :style="{ '--step': 1 }">
      <h1 class="mb-1.5 text-base font-normal">{{ title }}</h1>
      <p class="text-muted">{{ description }}</p>
    </header>
    <slot />
    <SiteFooter />
  </main>
</template>
