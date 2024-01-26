import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./index";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

describe("Testing Home Page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("Showing welcome text on the home", async () => {
    expect(screen.getByText("Welcome to simple chatting system!")).toBeTruthy();
  });

  it("Inputting name should be reflected to the state", async () => {
    const input = screen.getByLabelText("input");
    fireEvent.change(input, { target: { value: "Bee" } });
    expect(input.value).toBe("Bee");
  });

  it("Testing button clicking navigation", async () => {
    const button = screen.getByLabelText("button");
    fireEvent.click(button);
    expect(mockUsedNavigate).toBeCalled();
  });
});
