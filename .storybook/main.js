const path = require('path')

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  core: { builder: "storybook-builder-vite" },
  viteFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          '@': path.resolve(__dirname, '/src')
        }
      },
    }
  },
  typescript: {
    check: true
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
}