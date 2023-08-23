import { NavLink } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="flex flex-col gap-5 items-center p-5 bg-gray-100 rounded">
      <h1 className="text-5xl font-extrabold">Thank You!</h1>
      <p>You&apos;re order hasn&apos;t actually been submitted.</p>
      <p className="text-center">
        But this is where we would tell you your order number is something like
        #12345567858 and to check your email for confirmation.
      </p>
      <NavLink
        to="/"
        className={
          "uppercase tracking-widest border-2 border-sky-950 px-3 rounded hover:bg-sky-950 hover:text-gray-50 focus:bg-sky-950 focus:text-gray-50"
        }
      >
        Take me back
      </NavLink>
    </div>
  );
}
