import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Header from "../src/components/Header";

describe("Header component", () => {
  it("displays the correct heading", () => {
    const mockSetCart = vi.fn();
    render(
      <MemoryRouter>
        <Header cart={[]} setCart={mockSetCart} />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", { name: "Sure Sure Sure" })
    ).not.toBeNull();
  });

  it("does not show cart by default", () => {
    const mockSetCart = vi.fn();
    render(
      <MemoryRouter>
        <Header cart={[]} setCart={mockSetCart} />
      </MemoryRouter>
    );
    const cart = screen.getByTestId("cart-element");
    expect(cart.classList.contains("hidden")).toBeTruthy();
  });

  it("shows cart after cart button has been clicked", async () => {
    const user = userEvent.setup();

    const mockSetCart = vi.fn();
    render(
      <MemoryRouter>
        <Header cart={[]} setCart={mockSetCart} />
      </MemoryRouter>
    );

    const button = screen.queryByText("go to cart");

    await user.click(button);

    const cart = screen.getByTestId("cart-element");
    expect(cart.classList.contains("hidden")).toBeFalsy();
  });
});

it("displays the number of items in the cart", () => {
  const mockSetCart = vi.fn();
  render(
    <MemoryRouter>
      <Header
        cart={[{ productName: "hat", quantity: 3, unitPrice: 2 }]}
        setCart={mockSetCart}
      />
    </MemoryRouter>
  );

  const itemCount = screen.getByTestId("count-element");
  expect(itemCount.textContent).toBe("3");
});
