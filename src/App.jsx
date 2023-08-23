import { useState } from "react";
import "./App.css";
import Index from "./routes/index";
import Shop from "./routes/shop";
import Checkout from "./routes/checkout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useProducts } from "./helpers/fetcher";

function App() {
  const { products, error, loading } = useProducts();
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index cart={cart} setCart={setCart} />,
    },
    {
      path: "/shop",
      element: <Shop products={products} cart={cart} setCart={setCart} />,
    },
    {
      path: "/checkout",
      element: <Checkout cart={cart} setCart={setCart} />,
    },
  ]);

  if (error) return <p>Something went wrong.</p>;
  if (loading) return <p>getting cards...</p>;

  return (
    <RouterProvider router={router} />
  );
}

export default App;
