import PropTypes from "prop-types";
import {
  calculatePrice,
  calculateSubtotal,
  getUpdatedCart,
} from "../helpers/cart_helpers";

// TODO: add a bool prop to conditionally add checkout button
// if cart is a child of header, want it to be absolutely positioned compareed to it
// also want a "close" or "keeping shopping" button

export default function Cart({ cart, setCart }) {
  const changeHandler = (e, productName, price) => {
    setCart(
      getUpdatedCart(cart, productName, parseInt(e.target.value), price, true)
    );
  };

  const clickHandler = (productName) => {
    let data = [...cart];
    const index = data.findIndex((elem) => elem.productName === productName);
    data.splice(index, 1);
    setCart(data);
  };

  return (
    <div className="hidden">
      <h2>Cart:</h2>
      <ul>
        {cart.map((elem, index) => {
          return (
            <li key={index}>
              <span>{elem.productName}</span>
              <span>${calculatePrice(elem.quantity, elem.unitPrice)}</span>
              <input
                name="quantity"
                type="number"
                value={elem.quantity}
                min="1"
                max="4"
                onChange={(e) =>
                  changeHandler(e, elem.productName, elem.unitPrice)
                }
              ></input>
              <button onClick={() => clickHandler(elem.productName)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="#082f49"
                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                  />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
      <p>
        total: $<span>{calculateSubtotal(cart)}</span>
      </p>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
