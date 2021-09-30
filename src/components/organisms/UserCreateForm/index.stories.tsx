import type { ComponentStoryObj } from "@storybook/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserCreateForm } from "./";

type Story = ComponentStoryObj<typeof UserCreateForm>;

export default { component: UserCreateForm };

const type = (step: 0 | 1 | 2 | 3) => {
  if (step === 0) return;
  userEvent.type(screen.getByPlaceholderText("姓"), "田中");
  if (step === 1) return;
  userEvent.type(screen.getByPlaceholderText("名"), "太郎");
  if (step === 2) return;
  userEvent.type(
    screen.getByPlaceholderText("メールアドレス"),
    "example@gmail.com"
  );
};

const playFactory = (step: 0 | 1 | 2 | 3) => async () => {
  type(step);
  userEvent.click(screen.getByRole("button"));
};

export const InValid1: Story = {
  storyName: "未入力で送信",
  play: playFactory(0),
};

export const InValid2: Story = {
  storyName: "姓未入力で送信",
  play: playFactory(1),
};

export const InValid3: Story = {
  storyName: "名未入力で送信",
  play: playFactory(2),
};

export const Valid: Story = {
  storyName: "正常入力で送信",
  args: { handleSubmit: (data) => {} },
  play: playFactory(3),
};
