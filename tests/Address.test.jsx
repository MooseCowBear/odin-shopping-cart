import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Address from "../src/components/Address";

describe("Address component", () => {
  it("has input field for line one", () => {
    render(<Address title="test" />);

    expect(screen.getByText("Line 1:")).toBeInTheDocument();
  });

  it("has input field for line two", () => {
    render(<Address title="test" />);

    expect(screen.getByLabelText("Line 2:")).toBeInTheDocument();
  });

  it("has input field for city", () => {
    render(<Address title="test" />);

    expect(screen.getByLabelText("City:")).toBeInTheDocument();
  });

  it("has input field for state", () => {
    render(<Address title="test" />);

    expect(screen.getByLabelText("State:")).toBeInTheDocument();
  });

  it("has input field for zip", () => {
    render(<Address title="test" />);

    expect(screen.getByLabelText("Zipcode:")).toBeInTheDocument();
  });

  it("accepts user input", async () => {
    const user = userEvent.setup();

    render(<Address title="test" />);
    const lineOneInput = screen.getByLabelText("Line 1:");

    await user.type(lineOneInput, "23");
    expect(lineOneInput.value).toBe("23");
  });
});
