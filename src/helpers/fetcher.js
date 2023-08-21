import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        // testing
        const response = await fetch(
          "https://fakestoreapi.com/products/category/jewelery?limit=5",
          { mode: "cors" }
        );
        if (response.status >= 400) {
          throw new Error("server error");
        }
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return { products, error, loading };
};
