export default defineAppConfig({
  header: {
    title: 'Docus',
  },
  socials: {
    x: 'https://x.com/nuxt_js',
    discord: 'https://discord.com/invite/ps2h6QT',
    nuxt: 'https://nuxt.com',
  },
  toc: {
    title: 'On this page',
    bottom: {
      title: 'Community',
      links: [{
        icon: 'i-lucide-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/getting-started/installation/pro/nuxt',
        target: '_blank',
      },
      {
        icon: 'i-lucide-credit-card',
        label: 'Purchase a license',
        to: 'https://ui.nuxt.com/pro/purchase',
        target: '_blank',
      }],
    },
  },
})
