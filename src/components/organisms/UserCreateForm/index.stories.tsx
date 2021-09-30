import type { ComponentStoryObj } from "@storybook/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserCreateForm } from "./";

export default { component: UserCreateForm };

export const InValid1: ComponentStoryObj<typeof UserCreateForm> = {
  storyName: "未入力で送信",
  play: async () => {
    userEvent.click(screen.getByRole("button"));
  },
};

export const InValid2: ComponentStoryObj<typeof UserCreateForm> = {
  storyName: "姓未入力で送信",
  play: async () => {
    userEvent.type(screen.getByPlaceholderText("名"), "太郎");
    userEvent.type(
      screen.getByPlaceholderText("メールアドレス"),
      "example@gmail.com"
    );
    userEvent.click(screen.getByRole("button"));
  },
};

export const InValid3: ComponentStoryObj<typeof UserCreateForm> = {
  storyName: "名未入力で送信",
  play: async () => {
    userEvent.type(screen.getByPlaceholderText("姓"), "田中");
    userEvent.type(
      screen.getByPlaceholderText("メールアドレス"),
      "example@gmail.com"
    );
    userEvent.click(screen.getByRole("button"));
  },
};

export const Valid: ComponentStoryObj<typeof UserCreateForm> = {
  storyName: "正常入力で送信",
  args: { handleSubmit: (data) => { } },
  play: async () => {
    userEvent.type(screen.getByPlaceholderText("姓"), "田中");
    userEvent.type(screen.getByPlaceholderText("名"), "太郎");
    userEvent.type(
      screen.getByPlaceholderText("メールアドレス"),
      "example@gmail.com"
    );
    userEvent.click(screen.getByRole("button"));
  },
};
