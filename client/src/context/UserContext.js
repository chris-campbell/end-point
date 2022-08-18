import axiosClient from "../utils/apiClient";
import React, { useEffect, useRef } from "react";

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const fetchCurrentUser = async () => {
    setLoading(true);
    try {
      const userData = await axiosClient.get("/getCurrentUser", {
        withCredentials: true,
      });

      if (userData) {
        console.log({ userData });
        setCurrentUser(userData.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, fetchCurrentUser, loading }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => React.useContext(CurrentUserContext);
