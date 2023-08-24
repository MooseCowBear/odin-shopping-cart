import PropTypes from "prop-types";
import {
  calculatePrice,
  calculateSubtotal,
  getUpdatedCart,
} from "../helpers/cart_helpers";
import { NavLink } from "react-router-dom";

export default function Cart({ cart, setCart, hide, side, setHide }) {
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

  const setHideToTrue = () => {
    setHide(true);
  };

  return (
    <div data-testid="cart-element"
      className={`bg-gray-100 rounded p-5 flex flex-col gap-2 ${
        hide && hide ? "hidden" : ""
      } ${
        side && side
          ? "absolute bottom-0 right-0 translate-y-[100%] shadow-md w-clamp z-10"
          : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-bold">Your Cart:</h2>
        {side && (
          <button onClick={setHideToTrue} className="h-[20px] w-[20px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#082f49"
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>
          </button>
        )}
      </div>
      <ul>
        {cart.map((elem, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-between p-2 border-b-2"
            >
              <div className="flex gap-5">
                <span>{elem.productName}</span>
                <span>${calculatePrice(elem.quantity, elem.unitPrice)}</span>
              </div>
              <div className="flex gap-3 items-center">
                <input
                  name="quantity"
                  type="number"
                  value={elem.quantity}
                  min="1"
                  max="4"
                  onChange={(e) =>
                    changeHandler(e, elem.productName, elem.unitPrice)
                  }
                  className="px-2 py-1 rounded"
                ></input>
                <button
                  onClick={() => clickHandler(elem.productName)}
                  className="w-[20px] h-[20px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#082f49"
                      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                    />
                  </svg>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="self-end">
        subtotal: $<span>{calculateSubtotal(cart).toFixed(2)}</span>
      </p>
      {side && (
        <NavLink
          to="/checkout"
          onClick={setHideToTrue}
          className={
            "self-center uppercase tracking-widest border-2 border-sky-950 px-3 rounded hover:bg-sky-950 hover:text-gray-50 focus:bg-sky-950 focus:text-gray-50"
          }
        >
          Checkout
        </NavLink>
      )}
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  hide: PropTypes.bool.isRequired,
  side: PropTypes.bool.isRequired,
  setHide: PropTypes.func,
};
