import { totalItems } from "../helpers/cart_helpers";
import PropTypes from "prop-types";
import Cart from "./Cart.jsx";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header({ cart, setCart }) {
  const [hideCart, setHideCart] = useState(true);

  const clickHandler = () => {
    setHideCart(!hideCart);
  };

  return (
    <div className="flex justify-between items-end p-5 w-full relative">
      <NavLink to="/">
        <h2 className="text-6xl font-extrabold">Sure Sure Sure</h2>
      </NavLink>
      <button
        className="flex flex-col items-center justify-center gap-3 relative grow-0 shrink-0"
        onClick={clickHandler}
      >
        <div className="h-8 w-8 flex justify-center items-center rounded-full absolute bottom-5 left-0 bg-fuchsia-500">
          <p className="font-bold text-gray-50">{totalItems(cart)}</p>
        </div>
        <svg
          className="h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="#082f49"
            d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
          />
        </svg>
        <small>go to cart</small>
      </button>
      <Cart cart={cart} setCart={setCart} hide={hideCart} side={true} setHide={setHideCart}/>
    </div>
  );
}

Header.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func,
};
