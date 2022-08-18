import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../utils/apiClient";
import useErrors from "../hooks/useErrors";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(undefined);
  const { setError } = useErrors();

  const getAuth = async () => {
    try {
      const authValue = await axiosClient.get("/isUserLoggedIn", {
        withCredentials: true,
      });

      return setAuth(authValue.data);
    } catch (error) {
      setError(error.response);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, getAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
