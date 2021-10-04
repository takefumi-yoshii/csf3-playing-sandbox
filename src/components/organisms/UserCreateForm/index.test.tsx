import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import * as stories from "./index.stories";

describe("components/organisms/UserCreateForm", () => {
  // @ts-expect-error
  const { Invalid1, Invalid2, Invalid3, Valid } = composeStories(stories);
  test("姓未入力の場合エラーが表示される", async () => {
    render(<Invalid1 />);
    await Invalid1.play();
    const alerts = await screen.findAllByRole("alert");
    expect(alerts[0]).toHaveTextContent("姓が未入力です");
  });
  test("名未入力の場合エラーが表示される", async () => {
    render(<Invalid2 />);
    await Invalid2.play();
    const alerts = await screen.findAllByRole("alert");
    expect(alerts[0]).toHaveTextContent("名が未入力です");
  });
  test("メールアドレス未入力の場合エラーが表示される", async () => {
    render(<Invalid3 />);
    await Invalid3.play();
    const alerts = await screen.findAllByRole("alert");
    expect(alerts[0]).toHaveTextContent("メールアドレス");
  });
  test("期待値を満たしている場合エラーが表示されない", async () => {
    render(<Valid />);
    await Valid.play();
    await waitFor(() => expect(screen.queryByRole("alert")).toBeNull());
  });
});
