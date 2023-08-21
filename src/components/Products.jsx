import ProductCard from "./ProductCard";
import { useProducts } from "../helpers/fetcher";

export default function Products() {
  const { products, error, loading } = useProducts();

  if (error) return <p>Something went wrong :(</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {products.map(product => {
        return (
          <ProductCard key={product.id} product={product} />
        );
      })}
    </div>
  );
}