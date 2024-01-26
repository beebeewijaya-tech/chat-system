import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./index";

describe("Testing Input component", () => {
  let value = 0;
  beforeEach(() => {
    render(
      <Input
        value={value}
        onChange={(e) => {
          value = e.target.value;
        }}
        label="Testing input"
      />
    );
  });

  it("Showing testing input", async () => {
    expect(screen.getByText("Testing input")).toBeTruthy();
  });

  it("Input change", async () => {
    const input = screen.getByLabelText("input");
    fireEvent.change(input, { target: { value: "Bee" } });
    expect(value).toBe("Bee");

    fireEvent.change(input, { target: { value: "Boo" } });
    expect(value).toBe("Boo");
  });
});
