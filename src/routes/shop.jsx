import PropTypes from "prop-types";
import Products from "../components/Products";

export default function Shop({ products }) {
  return (
    <>
      <h1>shop.</h1>
      <Products products={products} />
    </>
  );
}

Shop.propTypes = {
  products: PropTypes.array.isRequired,
};
