import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

export default function Products({ products, cart, setCart }) {
  return (
    <div>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        );
      })}
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
