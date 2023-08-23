import PropTypes from "prop-types";
import Cart from "../components/Cart";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

export default function Checkout({ cart, setCart }) {
  return (
    <>
      <Header cart={cart} setCart={setCart} hide={false} />
      <div className="w-full px-5 flex flex-col gap-5">
        <h1 className="text-4xl font-extrabold lowercase">Checkout.</h1>
        <Cart cart={cart} setCart={setCart} hide={false} side={false} />
        <NavLink
          to="/shopping"
          className={
            "self-center uppercase tracking-widest border-2 border-sky-950 px-3 rounded hover:bg-sky-950 hover:text-gray-50 focus:bg-sky-950 focus:text-gray-50"
          }
        >
          Continue Shopping
        </NavLink>
      </div>
    </>
  );
}

Checkout.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired
};
