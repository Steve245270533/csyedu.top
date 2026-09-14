<script setup lang="ts">
import { X, ScanLine } from 'lucide-vue-next'
const props = defineProps<{ title: string; image: string; description: string; label: string }>()
const dialog = useTemplateRef<HTMLDialogElement>('dialog')
const trigger = useTemplateRef<HTMLButtonElement>('trigger')
function open() {
  dialog.value?.showModal()
}
function close() {
  dialog.value?.close()
  trigger.value?.focus()
}
function onBackdrop(event: MouseEvent) {
  if (event.target === dialog.value) close()
}
</script>
<template>
  <button ref="trigger" type="button" class="inline-chip" aria-haspopup="dialog" @click="open">
    <ScanLine :size="13" /><span>{{ label }}</span>
  </button>
  <Teleport to="body">
    <dialog ref="dialog" class="qr-dialog" :aria-label="props.title" @click="onBackdrop">
      <div class="relative rounded-2xl bg-paper p-7 text-center">
        <button
          type="button"
          aria-label="关闭二维码"
          class="absolute right-3 top-3 rounded-full p-2 text-muted hover:bg-hover"
          @click="close"
        >
          <X :size="16" />
        </button>
        <h2 class="mb-1 text-base text-ink">{{ title }}</h2>
        <p class="text-xs text-muted">{{ description }}</p>
        <img
          :src="image"
          :alt="`${title}二维码`"
          width="280"
          height="280"
          class="mx-auto mt-5 h-auto max-h-[60svh] w-[260px] rounded-md bg-white object-contain"
        />
        <p class="mt-4 text-xs text-faint">微信扫一扫 · 或长按保存图片</p>
      </div>
    </dialog>
  </Teleport>
</template>
<style scoped>
.qr-dialog {
  position: fixed;
  inset: 0;
  width: min(340px, calc(100vw - 40px));
  margin: auto;
  padding: 0;
  border: 1px solid var(--color-line);
  border-radius: 16px;
  background: var(--color-paper);
  color: var(--color-ink);
  box-shadow: 0 20px 90px #0002;
}
.qr-dialog::backdrop {
  background: #0003;
  backdrop-filter: blur(3px);
}
.qr-dialog[open] {
  animation: reveal 0.2s ease-out;
}
</style>
