const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  features: { previewCsfV3: true },
  webpackFinal: async (baseConfig) => {
    const { module = {} } = baseConfig;
    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    };
    newConfig.module.rules.find(
      (rule) => rule.test.toString() === "/\\.css$/"
    ).exclude = /\.module\.css$/;
    newConfig.module.rules.push({
      test: /\.module\.s?css$/,
      include: path.resolve(__dirname, "../"),
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
      ],
    });
    return newConfig;
  },
};
