<script setup lang="ts">
import { Github, Mail } from 'lucide-vue-next'
import bundle from 'tegaki/fonts/caveat';

defineProps<{ signature?: boolean }>()
</script>

<template>
  <footer
    class="reveal mt-10 border-t border-line pt-7 text-xs text-faint"
    :style="{ '--step': 5 }"
  >
    <div v-if="signature" class="mb-6 flex items-center justify-between">
      <TegakiRenderer
        :font="bundle"
        text="SteveChen"
        :time="{ mode: 'uncontrolled', speed: 1 }"
        :style="{ fontSize: '48px' }"
      />
      <div class="flex items-center gap-4">
        <a
          href="https://github.com/Steve245270533"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub（新窗口）"
          title="GitHub"
          class="social"
          ><Github :size="14"
        /></a>
        <a
          href="https://space.bilibili.com/241734916"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="bilibili（新窗口）"
          title="bilibili"
          class="social"
          ><img
            src="/images/bilibili.svg"
            class="bilibili-icon"
            width="21"
            height="21"
            alt=""
            aria-hidden="true"
        /></a>
        <a href="mailto:245270533@qq.com" aria-label="发送邮件" title="Email" class="social"
          ><Mail :size="14"
        /></a>
      </div>
    </div>
    <nav aria-label="页面导航" class="flex items-center gap-4">
      <NuxtLink to="/" class="text-link" active-class="text-ink">home</NuxtLink>
      <NuxtLink to="/lab" class="text-link" active-class="text-ink">lab</NuxtLink>
      <NuxtLink to="/contact" class="text-link" active-class="text-ink">contact</NuxtLink>
      <a
        href="https://github.com/Steve245270533/csyedu.top"
        target="_blank"
        rel="noopener noreferrer"
        class="ml-auto text-link"
        >source ↗</a
      >
    </nav>
  </footer>
</template>

<style scoped>
.social {
  display: inline-flex;
  color: var(--color-muted);
  transition:
    color 0.2s,
    transform 0.2s;
}
.social:hover {
  color: var(--color-ink);
  transform: translateY(-2px);
}
</style>
