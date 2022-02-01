module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites () {
    return [
      { source: '/thumbnail.png', destination: '/api/random/thumbnail' },
      { source: '/og.png', destination: '/api/img' }
    ]
  },
  async headers () {
    return [
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, immutable, max-age=31536000'
          }
        ]
      }
    ]
  }
}
