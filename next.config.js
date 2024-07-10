const path = require("path");

module.exports = {
  experimental: {
    outputStandalone: true,
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  output: "standalone",
  reactStrictMode: false,
  swcMinify: true,
};
