import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  const { status, statusText } = error;

  return (
    <div className="text-xl text-center font-extrabold">
      <h1>Oops!! :( </h1>
      <h2>Something went wrong!!</h2>
      <h1>{status + " : " + statusText}</h1>
    </div>
  );
};

export default Error;
