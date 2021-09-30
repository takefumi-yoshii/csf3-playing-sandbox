import type { ComponentStoryObj } from "@storybook/react";
import { Alert } from "./";

export default { component: Alert };

export const Default: ComponentStoryObj<typeof Alert> = {
  args: { message: "エラー" },
};
