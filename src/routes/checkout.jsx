import PropTypes from "prop-types";
import Cart from "../components/Cart";
import Header from "../components/Header";

export default function Checkout({ cart, setCart }) {
  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <Cart cart={cart} setCart={setCart} />
    </>
  );
}

Checkout.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired
};
