import { useState } from "react";
import Index from "./routes/index";
import Shop from "./routes/shop";
import Checkout from "./routes/checkout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useProducts } from "./helpers/fetcher";
import ThankYou from "./routes/thankyou";
import Error from "./routes/error";

function App() {
  const { products, error, loading } = useProducts();
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index cart={cart} setCart={setCart} />,
      errorElement: <Error />,
    },
    {
      path: "/shop",
      element: <Shop products={products} cart={cart} setCart={setCart} />,
    },
    {
      path: "/checkout",
      element: <Checkout cart={cart} setCart={setCart} />,
    },
    {
      path: "/thankyou",
      element: <ThankYou />,
    },
  ]);

  // TODO: abstract these
  if (error) return <p className="text-center">Something went wrong.</p>;
  if (loading) return <p className="text-center">getting cards...</p>;

  return (
    <RouterProvider router={router} />
  );
}

export default App;
