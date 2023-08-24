import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Billing from "../src/components/Billing";

describe("Billing component", () => {
  it("has a name input field", () => {
    render(<Billing />);

    expect(screen.getByText("Name:")).toBeInTheDocument();
  })

  it("has a card number input field", () => {
    render(<Billing />);

    expect(screen.getByText("Card Number:")).toBeInTheDocument();
  })

  it("has an expiration date input field", () => {
    render(<Billing />);

    expect(screen.getByText("Expiration Date:")).toBeInTheDocument();
  })

  it("accepts user input", async () => {
    const user = userEvent.setup();

    render(<Billing />);
    const nameInput = screen.getByLabelText("Name:");

    await user.type(nameInput, "Howard");
    expect(nameInput.value).toBe("Howard");
  })
})
