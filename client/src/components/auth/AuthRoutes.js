import { useEffect } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Audio } from "react-loader-spinner";

const RequireAuth = ({}) => {
  const { auth, getAuth } = useAuth();

  let location = useLocation();

  useEffect(() => {
    validateAuth();
  }, [auth]);

  const validateAuth = async () => {
    await getAuth();
  };

  if (auth === undefined) return <Audio />;

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default RequireAuth;
