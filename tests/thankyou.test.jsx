import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ThankYou from "../src/routes/thankyou";

describe("thankyou component", () => {
  it("has a thank you header", () => {
    render(
      <MemoryRouter>
        <ThankYou />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch(/thank you/i);
  });

  it("has a link back to root", () => {
    render(
      <MemoryRouter>
        <ThankYou />
      </MemoryRouter>
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });
});
