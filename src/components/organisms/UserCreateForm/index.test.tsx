import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import * as stories from "./index.stories";
// ____________________________________________________________
//
describe("components/organisms/Form", () => {
  // @ts-expect-error
  const { InValid1, InValid2, InValid3, Valid } = composeStories(stories);
  it("未入力の場合エラーが表示される", async () => {
    render(<InValid1 />);
    await InValid1.play();
    const alerts = await waitFor(() => screen.getAllByRole("alert"));
    expect(alerts[0]).toHaveTextContent("姓が未入力です");
    expect(alerts[1]).toHaveTextContent("名が未入力です");
    expect(alerts[2]).toHaveTextContent("メールアドレスが未入力です");
  });
  it("姓未入力の場合エラーが表示される", async () => {
    render(<InValid2 />);
    await InValid2.play();
    const alert = await waitFor(() => screen.getByRole("alert"));
    expect(alert).toHaveTextContent("姓が未入力です");
  });
  it("名未入力の場合エラーが表示される", async () => {
    render(<InValid3 />);
    await InValid3.play();
    const alert = await waitFor(() => screen.getByRole("alert"));
    expect(alert).toHaveTextContent("名が未入力です");
  });
  it("期待値を満たしている場合エラーが表示されない", async () => {
    render(<Valid />);
    await Valid.play();
    await waitFor(() => expect(screen.queryByRole("alert")).toBeNull());
  });
});
