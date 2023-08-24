import PropTypes from "prop-types";
import { useState } from "react";
import { getUpdatedCart } from "../helpers/cart_helpers";

export default function ProductCard({ product, cart, setCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleClick = (e) => {
    setCart(
      getUpdatedCart(
        cart,
        e.target.getAttribute("data-product-name"),
        parseInt(e.target.parentNode.querySelector("input").value),
        parseFloat(e.target.getAttribute("data-product-price"))
      )
    );
  };

  return (
    <div className="flex flex-col justify-between w-[220px] bg-gray-100 p-3 rounded-md">
      <div>
        <img src={product.image} alt={product.title} className="rounded-lg" />
        <div className="flex justify-between">
          <h3 className="font-bold">{product.title}</h3>
          <p>${product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <input
          name="quantity"
          type="number"
          value={quantity}
          min="1"
          max="10"
          onChange={(e) => setQuantity(e.target.value)}
          className="p-2 rounded max-w-[60px]"
        ></input>
        <button
          data-product-name={product.title}
          data-product-price={product.price}
          onClick={handleClick}
          className="border-2 border-sky-950 px-3 rounded hover:bg-sky-950 hover:text-gray-50 focus:bg-sky-950 focus:text-gray-50"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
