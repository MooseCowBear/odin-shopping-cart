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

  // temp width
  return (
    <div>
      <img src={product.image} alt={product.title} width="100px" />
      <div>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
      <input
        type="number"
        value={quantity}
        min="1"
        max="10"
        onChange={(e) => setQuantity(e.target.value)}
      ></input>
      <button
        data-product-name={product.title}
        data-product-price={product.price}
        onClick={handleClick}
      >
        Add to cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
