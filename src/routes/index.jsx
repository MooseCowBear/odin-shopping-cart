import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

export default function Index({ cart, setCart }) {
  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <div className="flex flex-col min-[1200px]:flex-row gap-5 min-[1200px]:gap-[6rem] items-center justify-between p-10 mt-5 bg-gray-100 rounded-md">
        <div className="flex relative">
          <img
            src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=479587&type=card"
            alt="shark typhoon"
            className="inline absolute translate-x-[-35%] rotate-[-12deg] rounded-lg"
          />
          <img
            src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129882&type=card"
            alt="cancel"
            className="inline translate-x-[0%] rounded-lg"
          />
          <img
            src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=423707&type=card"
            alt="negate"
            className="inline absolute translate-x-[35%] rotate-12 rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="p-5 text-center">
            <h1 className="text-4xl font-extrabold lowercase">Welcome</h1>
            <p>
              to the internet&apos;s only card shop catering exclusively to
              players who love blue.
            </p>
            <p>
              <q>Five stars!</q> --
              <a
                href="https://www.youtube.com/watch?v=OwUDLv52nrc"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                Chris Kluwe
              </a>
              *
            </p>
          </div>
          <NavLink
            to="shop"
            className={
              "border-sky-950 px-5 py-3 rounded-md border-2 uppercase tracking-widest hover:bg-sky-950 hover:text-gray-50 focus:bg-sky-950 focus:text-gray-50"
            }
          >
            shop
          </NavLink>
        </div>
      </div>
      <p className="mt-3">* Just kidding. Obviously.</p>
    </>
  );
}

Index.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
