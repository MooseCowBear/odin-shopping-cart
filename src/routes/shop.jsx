import PropTypes from "prop-types";
import Products from "../components/Products";
import { NavLink } from "react-router-dom";

export default function Shop({ products, cart, setCart }) {
  return (
    <>
      <h1>shop.</h1>
      <Products products={products} cart={cart} setCart={setCart} />
      <NavLink to="/checkout">Checkout</NavLink>
    </>
  );
}

Shop.propTypes = {
  products: PropTypes.array,
  cart: PropTypes.array,
  setCart: PropTypes.func
};
