const withNextra = require('nextra')({
  theme: './nextra-theme-sterling',
  themeConfig: './theme.config.js',
  unstable_stork: false,
  unstable_staticImage: true,
})
module.exports = withNextra({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/discord{/}?",
        permanent: true,
        destination: "https://discord.gg/EWD3cH7q"
      }
    ]
  }
})