import { vi, describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Products from "../src/components/Products"

const mockProductCard = vi.fn();
vi.mock("../src/components/ProductCard", () => ({
  default: (props) => {
    mockProductCard(props);
    return <div>ProductCard</div>;
  },
}));

describe("Products component", () => {
  it("renders a product card for each product", () => {
    const mockSetCart = vi.fn();

    render(
      <Products
        products={[
          { title: "one", id: 1, image: "http://example.com", price: 1 },
          { title: "two", id: 2, image: "http://example.com", price: 2 },
        ]}

        cart={[]}
        setCart={mockSetCart}
      />
    );

    expect(mockProductCard).toBeCalledTimes(2);
  })
})