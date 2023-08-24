import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Checkout from "../src/routes/checkout";

const mockHeader = vi.fn();
vi.mock("../src/components/Header", () => ({
  default: (props) => {
    mockHeader(props);
    return <div>Header</div>;
  },
}));

const mockCart = vi.fn();
vi.mock("../src/components/Cart", () => ({
  default: (props) => {
    mockCart(props);
    return <div>Cart</div>;
  },
}));

const mockAddress = vi.fn();
vi.mock("../src/components/Address", () => ({
  default: (props) => {
    mockAddress(props);
    return <div>Address</div>;
  },
}));

const mockBilling = vi.fn();
vi.mock("../src/components/Billing", () => ({
  default: (props) => {
    mockBilling(props);
    return <div>Billing</div>;
  },
}));

describe("checkout component", () => {
  it("renders 2 address components, a cart component, and a header component", () => {
    const mockSetCart = vi.fn();

    render(
      <MemoryRouter>
        <Checkout cart={[]} setCart={mockSetCart} />
      </MemoryRouter>
    );

    expect(mockAddress).toBeCalledTimes(2);
    expect(mockBilling).toBeCalledTimes(1);
    expect(mockCart).toBeCalledTimes(1);
    expect(mockHeader).toBeCalledTimes(1);
  });

  it("empties cart when submit link is pressed", async () => {
    const user = userEvent.setup();
    const mockSetCart = vi.fn();

    render(
      <MemoryRouter>
        <Checkout
          cart={[{ productName: "hat", quantity: 1, unitPrice: 2 }]}
          setCart={mockSetCart}
        />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: "Submit" });
    await user.click(link)
    
    expect(mockSetCart).toBeCalled();
  });
});
