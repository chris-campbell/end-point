import { useEffect } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Rings } from "react-loader-spinner";

const RequireAuth = ({}) => {
  const { auth, getAuth } = useAuth();

  let location = useLocation();

  useEffect(() => {
    validateAuth();
  }, [auth]);

  const validateAuth = async () => {
    await getAuth();
  };

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (auth === undefined)
    return (
      <div style={style}>
        <Rings />
      </div>
    );

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default RequireAuth;
