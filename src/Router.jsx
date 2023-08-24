import PropTypes from "prop-types";
import Index from "./routes/index";
import Shop from "./routes/shop";
import Checkout from "./routes/checkout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThankYou from "./routes/thankyou";
import Error from "./routes/error";

export default function Router({ products, cart, setCart }) {
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

  return <RouterProvider router={router} />;
}

Router.propTypes = {
  products: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired
}