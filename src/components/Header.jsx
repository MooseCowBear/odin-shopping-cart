import { totalItems } from "../helpers/cart_helpers";
import PropTypes from "prop-types";
import Cart from "./Cart.jsx";
import { NavLink } from "react-router-dom";

export default function Header({ cart, setCart }) {
  // TODO: clickhandler to show Cart -- update cart to take show cart prop so can hide
  let showCart = false;

  const clickHandler = () => {
    showCart = !showCart;
  };

  return (
    <div>
      <NavLink to="/">
        <h1>Sure Sure Sure</h1>
      </NavLink>
      <button onClick={clickHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill=""
            d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
          />
        </svg>
        <small>go to cart</small>
        <p>items in cart: {totalItems(cart)}</p>
      </button>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

Header.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func,
};
