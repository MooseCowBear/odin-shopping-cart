import { useState } from "react";
import { useProducts } from "./helpers/fetcher";
import Router from "./Router";

function App() {
  const { products, error, loading } = useProducts();
  const [cart, setCart] = useState([]);

  if (error) return <p className="text-center">Something went wrong.</p>;
  if (loading) return <p className="text-center">getting cards...</p>;

  return (
    <Router products={products} cart={cart} setCart={setCart} />
  );
}

export default App;
