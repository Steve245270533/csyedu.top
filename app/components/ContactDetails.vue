<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
</script>
<template>
  <div class="space-y-9 text-muted">
    <section class="reveal" :style="{ '--step': 2 }">
      <h2 class="mb-2 text-xs font-normal text-faint">微信 / wechat</h2>
      <p>
        聊开发、产品、写作，或者只是打个招呼。<br />可以
        <QrCodeDialog
          title="添加我的微信"
          label="查看微信二维码"
          image="/images/wechat-qr.png"
          description="扫码添加好友，备注一下你的来意"
        />，添加时简单说说你从哪里来。
      </p>
      <details class="mt-3 text-xs text-faint">
        <summary class="w-fit cursor-pointer text-link">直接展开二维码</summary>
        <img
          src="/images/wechat-qr.png"
          alt="SteveChen 的微信好友二维码"
          width="260"
          height="260"
          loading="lazy"
          class="mt-4 w-[220px] max-w-full"
        />
      </details>
    </section>
    <section class="reveal" :style="{ '--step': 3 }">
      <h2 class="mb-2 text-xs font-normal text-faint">公开留言 / github issues</h2>
      <p>
        网站有问题、项目有建议，或者有个值得一起讨论的点子，可以在
        <a
          href="https://github.com/Steve245270533/csyedu.top/issues"
          class="text-link"
          target="_blank"
          rel="noopener noreferrer"
          >csyedu.top 的 issues<ArrowUpRight :size="12" class="ml-0.5 inline"
        /></a>
        留言。公开项目的问题，也欢迎直接提到对应仓库。
      </p>
      <p class="mt-3 text-xs text-faint">Issues 是公开的，个人信息和私密交流请用微信或邮件。</p>
    </section>
    <section class="reveal" :style="{ '--step': 4 }">
      <h2 class="mb-2 text-xs font-normal text-faint">其他地方 / elsewhere</h2>
      <p>
        代码在
        <a
          href="https://github.com/Steve245270533"
          class="text-link"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub</a
        >，视频在
        <a
          href="https://space.bilibili.com/241734916"
          class="text-link"
          target="_blank"
          rel="noopener noreferrer"
          >bilibili</a
        >，技术与想法记录在公众号
        <QrCodeDialog
          title="twimark"
          label="twimark"
          image="/images/twimark-qr.png"
          description="扫码关注我的个人公众号"
        />。也可以写邮件到
        <a href="mailto:245270533@qq.com" class="text-link">245270533@qq.com</a>。
      </p>
    </section>
  </div>
</template>
