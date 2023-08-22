import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
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
      element: <Index />,
    },
    {
      path: "/shop",
      element: <Shop products={products} cart={cart} setCart={setCart} />,
    },
    {
      path: "/checkout",
      element: <Checkout cart={cart} />,
    },
  ]);

  if (error) return <p>Something went wrong.</p>;
  if (loading) return <p>loading...</p>;

  // TODO: header can't be here, has to be inside routes if want to navigate from it
  return (
    <>
      <Header cart={cart} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
