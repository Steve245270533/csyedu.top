<script setup lang="ts">
import { ArrowUpRight, Github } from 'lucide-vue-next'
import { projects } from '~/data/projects'
</script>
<template>
  <ul class="reveal space-y-1" :style="{ '--step': 2 }" aria-label="精选公开项目">
    <li
      v-for="project in projects"
      :key="project.name"
      class="project-row group relative -mx-3 rounded-md px-3 py-3 transition-colors hover:bg-hover focus-within:bg-hover"
    >
      <div class="flex items-center gap-3">
        <a
          :href="project.demo || project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="project-name inline-flex min-w-0 items-center gap-1.5 text-ink"
          ><span class="break-words">{{ project.name }}</span
          ><ArrowUpRight :size="12" class="project-arrow shrink-0 text-faint"
        /></a>
        <span class="h-px min-w-3 flex-1 bg-line" aria-hidden="true" />
        <span class="shrink-0 text-[11px] text-faint">{{ project.category }}</span>
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${project.name} GitHub 源码（新窗口）`"
          title="GitHub 源码"
          class="shrink-0 text-faint transition-colors hover:text-ink"
          ><Github :size="13"
        /></a>
      </div>
      <p class="mt-1 text-xs leading-relaxed text-faint">{{ project.description }}</p>
    </li>
  </ul>
</template>
<style scoped>
.project-arrow {
  transition:
    transform 0.2s,
    color 0.2s;
}
.project-name:hover .project-arrow {
  transform: translate(2px, -2px);
  color: var(--color-ink);
}
.project-name:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: var(--color-underline);
}
</style>
