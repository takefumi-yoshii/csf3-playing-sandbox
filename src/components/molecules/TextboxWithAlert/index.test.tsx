import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import * as stories from "./index.stories";

describe("components/molecules/TextboxWithAlert", () => {
  // @ts-expect-error
  const { Default, Error } = composeStories(stories);
  test("errorMessage が表示されない", async () => {
    render(<Default />);
    await waitFor(() => expect(screen.queryByRole("alert")).toBeNull());
  });
  test("errorMessage が表示される", async () => {
    render(<Error />);
    const alert = await screen.findByRole("alert");
    expect(alert).toBeInTheDocument();
  });
});
