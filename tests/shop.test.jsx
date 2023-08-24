import { vi, describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Shop from "../src/routes/shop"

const mockHeader = vi.fn();
vi.mock("../src/components/Header", () => ({
  default: (props) => {
    mockHeader(props);
    return <div>Header</div>;
  },
}));

const mockProducts = vi.fn();
vi.mock("../src/components/Products", () => ({
  default: (props) => {
    mockProducts(props);
    return <div>Products</div>;
  },
}));

const mockSetCart = vi.fn();

describe("shop component", () => {
  it("renders header and products components", () => {
    render(<Shop products={[]} cart={[]} setCart={mockSetCart}/>);

    expect(mockHeader).toBeCalledTimes(1);
    expect(mockProducts).toBeCalledTimes(1);
  })
})
