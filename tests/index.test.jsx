import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Index from "../src/routes/index"

const mockHeader = vi.fn();
vi.mock("../src/components/Header", () => ({
  default: (props) => {
    mockHeader(props);
    return <div>Header</div>;
  },
}));

const mockSetCart = vi.fn();

describe("index component", () => {

  it("renders header", () => {
    render(
      <MemoryRouter>
        <Index cart={[]} setCart={mockSetCart}/>
      </MemoryRouter>
    );

    expect(mockHeader).toBeCalledTimes(1);
  })

  it("has a link to shop", () => {
    render(
      <MemoryRouter>
        <Index cart={[]} setCart={mockSetCart} />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", {name: "shop"})).toBeInTheDocument();
  })
})