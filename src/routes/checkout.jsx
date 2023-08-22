import PropTypes from "prop-types";
import { calculatePrice, calculateSubtotal } from "../helpers/cart_helpers";

export default function Checkout({ cart }) {
  // TODO: want to add options to update quantity, delete item
  console.log("cart in checkout", cart);
  return (
    <>
      <p>where the checkout will go...</p>
      <ul>
        {cart.map((elem, index) => {
          return (
          <li key={index}>
            <span>{elem.productName}</span>
            <span>${calculatePrice(elem.quantity, elem.unitPrice)}</span>
          </li>
          );
        })}
      </ul>
      <p>total: $<span>{calculateSubtotal(cart)}</span></p>
    </>
  );
}

Checkout.propTypes = {
  cart: PropTypes.array,
};
