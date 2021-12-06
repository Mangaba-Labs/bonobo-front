const { i18n } = require("./next-i18next.config");

module.exports = {
  async generateBuildId() {
    return new Date().toString().trim();
  },
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.test.(js|ts)x?$/,
      loader: "ignore-loader",
    });

    return config;
  },
};
