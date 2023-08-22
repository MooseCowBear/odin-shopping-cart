import PropTypes from "prop-types";
import Cart from "../components/Cart";

export default function Checkout({ cart, setCart }) {
  // TODO: want to add options to update quantity, delete item
  console.log("cart in checkout", cart);
  return (
    <>
      <p>where the checkout will go...</p>
      <Cart cart={cart} setCart={setCart}/>
    </>
  );
}

Checkout.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired
};
