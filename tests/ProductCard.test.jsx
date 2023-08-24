import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "../src/components/ProductCard";

describe("ProductCard component", () => {
  it("displays the product title", () => {
    const mockSetCart = vi.fn();
    render(
      <ProductCard
        product={{ title: "hat", price: 2, image: "http://example.com" }}
        cart={[]}
        setCart={mockSetCart}
      />
    );
    expect(screen.getByRole("heading").textContent).toMatch(/hat/i);
  });

  it("displays the product price", () => {
    const mockSetCart = vi.fn();
    render(
      <ProductCard
        product={{ title: "hat", price: 2, image: "http://example.com" }}
        cart={[]}
        setCart={mockSetCart}
      />
    );
    expect(screen.queryByText("$2.00")).not.toBeNull();
  });

  it("adds quantity of product to cart when button is pressed", async () => {
    const user = userEvent.setup();

    const mockSetCart = vi.fn();
    render(
      <ProductCard
        product={{ title: "hat", price: 2, image: "http://example.com" }}
        cart={[]}
        setCart={mockSetCart}
      />
    );

    const button = screen.getByRole("button");

    await user.click(button);

    expect(mockSetCart).toHaveBeenCalledOnce();
  });
});
