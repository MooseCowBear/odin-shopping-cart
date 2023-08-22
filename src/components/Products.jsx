import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

export default function Products({ products }) {
  return (
    <div>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired
}