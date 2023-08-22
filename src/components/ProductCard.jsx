import PropTypes from "prop-types";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);

  // temp width
  return (
    <div>
      <img src={product.image} alt={product.title} width="100px" />
      <div>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
      <button>Add to cart</button>
      <input
        type="number"
        value={quantity}
        min="1"
        max="6"
        onChange={(e) => setQuantity(e.target.value)}
      ></input>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
