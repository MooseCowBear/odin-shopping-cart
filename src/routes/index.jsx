import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

export default function Index({ cart, setCart }) {
  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <p>the index placeholder</p>
      <NavLink to="shop">shop</NavLink>
    </>
  );
}

Index.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
