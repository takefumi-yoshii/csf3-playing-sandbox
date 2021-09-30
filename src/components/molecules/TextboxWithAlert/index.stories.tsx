import type { ComponentStoryObj } from "@storybook/react";
import { TextboxWithAlert } from "./";

type Story = ComponentStoryObj<typeof TextboxWithAlert>;

export default { component: TextboxWithAlert };

export const Default: Story = {
  args: { inputProps: { defaultValue: "" } },
};

export const Error: Story = {
  args: { inputProps: { defaultValue: "" }, errorMessage: "エラー" },
};
