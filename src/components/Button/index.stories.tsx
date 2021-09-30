import type { ComponentStoryObj } from "@storybook/react";
import { Button } from "./";
// ____________________________________________________________
//
export const Default: ComponentStoryObj<typeof Button> = {
  args: { children: "hello" },
  play: async () => {},
};
export default { component: Button };
