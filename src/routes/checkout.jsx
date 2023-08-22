import PropTypes from "prop-types";
import { calculatePrice } from "../helpers/cart_helpers";

export default function Checkout({ cart }) {
  // TODO: want to add options to update quantity, delete item
  return (
    <>
      <p>where the checkout will go...</p>
      <ul>
        {cart.map((elem, index) => {
          <li key={index}>
            <span>{elem.productName}</span>
            <span>{calculatePrice(elem.quantity, elem.unitPrice)}</span>
          </li>;
        })}
      </ul>
    </>
  );
}

Checkout.propTypes = {
  cart: PropTypes.array,
};
