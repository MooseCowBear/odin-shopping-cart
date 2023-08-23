import PropTypes from "prop-types";
import Products from "../components/Products";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

export default function Shop({ products, cart, setCart }) {
  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <div className="flex flex-col gap-5 px-5">
        <h1 className="text-4xl font-extrabold lowercase">Shop.</h1>
        <Products products={products} cart={cart} setCart={setCart} />
      </div>
      <NavLink to="/checkout">Checkout</NavLink>
    </>
  );
}

Shop.propTypes = {
  products: PropTypes.array,
  cart: PropTypes.array,
  setCart: PropTypes.func
};
