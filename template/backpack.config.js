module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './app.js'
    return config
  }
}
