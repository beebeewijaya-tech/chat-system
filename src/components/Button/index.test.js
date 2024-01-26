import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./index";

describe("Testing Button component", () => {
  let value = 0;
  beforeEach(() => {
    render(
      <Button
        title="Button Text"
        onSubmit={() => {
          value += 1;
        }}
      />
    );
  });

  it("Showing button", async () => {
    expect(screen.getByText("Button Text")).toBeTruthy();
  });

  it("Button clicking", async () => {
    const button = screen.getByLabelText("button");
    fireEvent.click(button);
    expect(value).toBe(1);

    fireEvent.click(button);
    fireEvent.click(button);
    expect(value).toBe(3);
  });
});
