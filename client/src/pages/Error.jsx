import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>{error?.statusText}</p>
    </>
  );
};

export default NotFound;
