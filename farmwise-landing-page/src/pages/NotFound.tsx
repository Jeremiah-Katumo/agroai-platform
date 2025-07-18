import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ErrorTemplate from "@/templates/ErrorTemplate";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <ErrorTemplate
      errorCode="404"
      title="Oops! Page not found"
      message="The page you're looking for doesn't exist or has been moved."
    />
  );
};

export default NotFound;
