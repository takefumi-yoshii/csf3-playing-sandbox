import type { ComponentStoryObj } from "@storybook/react";
import { TextboxWithAlert } from "./";

export default { component: TextboxWithAlert };

export const Default: ComponentStoryObj<typeof TextboxWithAlert> = {
  args: { inputProps: { defaultValue: '' } },
};

export const Error: ComponentStoryObj<typeof TextboxWithAlert> = {
  args: { inputProps: { defaultValue: '' }, errorMessage: "エラー" },
};
