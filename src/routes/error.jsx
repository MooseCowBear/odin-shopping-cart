import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1 className="text-xl font-bold">Something went wrong.</h1>
      <p>{error.status || error.message}</p>
    </div>
  );
}
