module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './server/index.js'
    config.module = {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /(node_modules)/
        }
      ]
    }
    return config
  }
}
