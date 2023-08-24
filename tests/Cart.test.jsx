import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Cart from "../src/components/Cart";

describe("Cart component", () => {
  it("is hidden when hide is true", () => {
    const mock = vi.fn();
    render(
      <MemoryRouter>
        <Cart cart={[]} setCart={mock} hide={true} side={true} setHide={mock} />
      </MemoryRouter>
    );
    const cart = screen.getByTestId("cart-element");
    expect(cart.classList.contains("hidden")).toBeTruthy();
  });

  it("is not hidden when hide is false", () => {
    const mock = vi.fn();
    render(
      <MemoryRouter>
        <Cart
          cart={[]}
          setCart={mock}
          hide={false}
          side={true}
          setHide={mock}
        />
      </MemoryRouter>
    );
    const cart = screen.getByTestId("cart-element");
    expect(cart.classList.contains("hidden")).toBeFalsy();
  });

  it("displays checkout link when side is true", () => {
    const mock = vi.fn();
    render(
      <MemoryRouter>
        <Cart
          cart={[]}
          setCart={mock}
          hide={false}
          side={true}
          setHide={mock}
        />
      </MemoryRouter>
    );
    const link = screen.queryByRole("link");
    expect(link).not.toBeNull();
  });

  it("does not display checkout link when side is false", () => {
    const mock = vi.fn();
    render(
      <MemoryRouter>
        <Cart
          cart={[]}
          setCart={mock}
          hide={false}
          side={false}
          setHide={mock}
        />
      </MemoryRouter>
    );
    const link = screen.queryByRole("link");
    expect(link).toBeNull();
  });

  it("displays an option to change quantity for each item in cart", () => {
    const mock = vi.fn();
    render(
      <MemoryRouter>
        <Cart
          cart={[
            { productName: "hat", quantity: 1, unitPrice: 2 },
            { productName: "shoe", quantity: 2, unitPrice: 3 },
          ]}
          setCart={mock}
          hide={false}
          side={false}
          setHide={mock}
        />
      </MemoryRouter>
    );
    const hatQuantity = screen.getByDisplayValue("1");
    const shoeQuantity = screen.getByDisplayValue("2");

    expect(hatQuantity).toBeInTheDocument();
    expect(shoeQuantity).toBeInTheDocument();
  });

  it("displays the name of each item in the cart", () => {
    const mock = vi.fn();
    render(
      <MemoryRouter>
        <Cart
          cart={[
            { productName: "hat", quantity: 1, unitPrice: 2 },
            { productName: "shoe", quantity: 2, unitPrice: 3 },
          ]}
          setCart={mock}
          hide={false}
          side={false}
          setHide={mock}
        />
      </MemoryRouter>
    );
    const hat = screen.getByText("hat");
    const shoe = screen.getByText("shoe");

    expect(hat).toBeInTheDocument();
    expect(shoe).toBeInTheDocument();
  });

  it("displays the price of quantity of item for each item in the cart", () => {
    const mock = vi.fn();
    render(
      <MemoryRouter>
        <Cart
          cart={[
            { productName: "hat", quantity: 1, unitPrice: 2 },
            { productName: "shoe", quantity: 2, unitPrice: 3 },
          ]}
          setCart={mock}
          hide={false}
          side={false}
          setHide={mock}
        />
      </MemoryRouter>
    );
    const hatPrice = screen.getByText("$2.00");
    const shoePrice = screen.getByText("$6.00");

    expect(hatPrice).toBeInTheDocument();
    expect(shoePrice).toBeInTheDocument();
  });

  it("displays subtotal", () => {
    const mock = vi.fn();
    render(
      <MemoryRouter>
        <Cart
          cart={[
            { productName: "hat", quantity: 1, unitPrice: 2 },
            { productName: "shoe", quantity: 2, unitPrice: 3 },
          ]}
          setCart={mock}
          hide={false}
          side={false}
          setHide={mock}
        />
      </MemoryRouter>
    );
    const subtotal = screen.getByText("subtotal: $8.00");

    expect(subtotal).toBeInTheDocument();
  })
});
