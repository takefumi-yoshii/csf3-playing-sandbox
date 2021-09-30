import { addDecorator } from "@storybook/react";
import { initialize, mswDecorator } from "msw-storybook-addon";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

initialize();
addDecorator(mswDecorator);
