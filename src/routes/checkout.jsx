import PropTypes from "prop-types";
import Cart from "../components/Cart";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Address from "../components/Address";
import Billing from "../components/Billing";

export default function Checkout({ cart, setCart }) {
  const emptyCart = () => {
    setCart([]);
  }

  return (
    <>
      <Header cart={cart} setCart={setCart} hide={false} />
      <div className="w-full px-5 flex flex-col gap-5">
        <h1 className="text-4xl font-extrabold lowercase">Checkout.</h1>
        <Cart cart={cart} setCart={setCart} hide={false} side={false} />
        <Address title={"Shipping Address"} />
        <Address title={"Billing Address"} />
        <Billing />
        <div className="flex flex-col-reverse sm:items-center sm:justify-between gap-5 sm:flex-row">
          <NavLink
            to="/shop"
            className={
              "uppercase tracking-widest border-2 border-sky-950 px-3 rounded hover:bg-sky-950 hover:text-gray-50 focus:bg-sky-950 focus:text-gray-50 text-center"
            }
          >
            Continue Shopping
          </NavLink>
          <NavLink to="/thankyou" onClick={emptyCart}
            className={
              "uppercase tracking-widest border-2 border-sky-950 px-3 rounded hover:bg-sky-950 hover:text-gray-50 focus:bg-sky-950 focus:text-gray-50 text-center"
            }
          >
            Submit
          </NavLink>
        </div>
      </div>
    </>
  );
}

Checkout.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
