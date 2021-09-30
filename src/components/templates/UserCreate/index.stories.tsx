import { handlers } from "@/mock/msw/handlers/user";
import type { ComponentStoryObj } from "@storybook/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserCreate } from "./";

export default { component: UserCreate };

const playFactory = (mail: string) => async () => {
  userEvent.type(screen.getByPlaceholderText("姓"), "田中");
  userEvent.type(screen.getByPlaceholderText("名"), "太郎");
  userEvent.type(screen.getByPlaceholderText("メールアドレス"), mail);
  userEvent.click(screen.getByRole("button"));
};

export const Invalid409: ComponentStoryObj<typeof UserCreate> = {
  storyName: "異常系レスポンス",
  play: playFactory("example-409@gmail.com"),
  parameters: { msw: handlers },
};

export const Valid201: ComponentStoryObj<typeof UserCreate> = {
  storyName: "正常系レスポンス",
  play: playFactory("example-201@gmail.com"),
  parameters: { msw: handlers },
};
