import { describe, it, expect } from "vitest";
import {
  totalItems,
  calculatePrice,
  calculateSubtotal,
  getUpdatedCart,
} from "../src/helpers/cart_helpers";

describe("totalItems returns the number of items in the cart", () => {
  it("returns 0 when the cart is empty", () => {
    const cart = [];
    expect(totalItems(cart)).toBe(0);
  });
  it("returns the correct number of items when cart contains singles", () => {
    const cart = [{ quantity: 1 }, { quantity: 1 }];
    expect(totalItems(cart)).toBe(2);
  });
  it("returns the correct number of items when the cart contains multiples", () => {
    const cart = [{ quantity: 2 }, { quantity: 2 }];
    expect(totalItems(cart)).toBe(4);
  });
});

describe("calculatePrice returns correct amount", () => {
  it("returns the correct number when quantity is one", () => {
    expect(calculatePrice(1, 12.99)).toBe(12.99);
  });
  it("returns the correct amount when quantity > 1", () => {
    expect(calculatePrice(3, 5)).toBe(15);
  });
});

describe("calculateSubtotal returns correct amount", () => {
  it("returns 0 when cart is empty", () => {
    const cart = [];
    expect(calculateSubtotal(cart)).toBe(0);
  });
  it("returns correct subtotal when cart contains singles", () => {
    const cart = [
      { quantity: 1, unitPrice: 3 },
      { quantity: 1, unitPrice: 2 },
    ];
    expect(calculateSubtotal(cart)).toBe(5);
  });
  it("returns the correct subtotal when the cart contains multiples", () => {
    const cart = [
      { quantity: 2, unitPrice: 10 },
      { quantity: 3, unitPrice: 3 },
    ];
    expect(calculateSubtotal(cart)).toBe(29);
  });
});

describe("getUpdatedCart updates cart correctly", () => {
  it("replaces item's quantity when replace if true", () => {
    const cart = [{ productName: "hat", quantity: 1, unitPrice: 2 }];
    const updatedCart = getUpdatedCart(cart, "hat", 2, 2, true);
    expect(updatedCart.length).toBe(1);
    expect(updatedCart[0].quantity).toBe(2);
  });
  it("adds existing item's new quantity to the existing quantity when replace is false", () => {
    const cart = [{ productName: "hat", quantity: 1, unitPrice: 2 }];
    const updatedCart = getUpdatedCart(cart, "hat", 2, 2, false);
    expect(updatedCart.length).toBe(1);
    expect(updatedCart[0].quantity).toBe(3);
  });
  it("adds a new item to the cart when newItem did not previously exist", () => {
    const cart = [];
    expect(getUpdatedCart(cart, "shoe", 1, 3, false).length).toBe(1);
  });
});
