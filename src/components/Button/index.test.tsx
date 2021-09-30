import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import * as stories from "./index.stories";
// ____________________________________________________________
//
describe("components/Button", () => {
  // @ts-expect-error
  const { Default } = composeStories(stories);
  it("type と同名の aria-label が出力される", async () => {
    render(<Default />);
    await Default.play();
    await waitFor(() => expect(screen.getByRole("button")).toBeInTheDocument());
  });
});
