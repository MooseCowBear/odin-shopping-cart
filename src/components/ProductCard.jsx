import PropTypes from "prop-types";

export default function ProductCard({ product }) {
  // temp width 
  return (
    <div>
      <img src={product.image} alt={product.title} width="100px" />
      <div>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
      <button>Add to cart</button>
      <input type="number" value="1" min="1" max="6"></input>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
}