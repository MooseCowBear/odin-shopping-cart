import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

export default function Products({ products, cart, setCart }) {
  return (
    <div className="flex flex-row flex-wrap gap-5 justify-evenly">
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
