export function usePageSeo(title: string, description: string, path: string) {
  const url = `https://csyedu.top${path}`
  useSeoMeta({
    title: 'Steve Chen',
    description,
    ogTitle: `${title} · SteveChen`,
    ogDescription: description,
    ogUrl: url,
    ogType: 'website',
    ogLocale: 'zh_CN',
    ogImage: 'https://csyedu.top/images/og.png',
    twitterCard: 'summary_large_image',
  })
  useHead({ link: [{ rel: 'canonical', href: url }] })
}
