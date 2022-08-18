import React from "react";
import Logo from "./img/logo.svg";
import axiosClient from "../../utils/apiClient";
import { useAuth } from "../../context/AuthContext";
import { useCurrentUser } from "../../context/UserContext";
import NavbarContainer from "./styles/styles";

const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const { currentUser } = useCurrentUser();
  const credentials = { withCredentials: true };

  const logout = async () => {
    try {
      await axiosClient.delete("/logoutUser", credentials);
      localStorage.setItem("userAuth", JSON.stringify(false));
      localStorage.clear();
      setAuth(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NavbarContainer>
      {auth ? (
        <div className="navbar-wrapper">
          <div>
            <img src={Logo} width={55} height={55} />
          </div>
          <div className="navbar-links">
            <div className="avatar">
              <img
                src={currentUser && currentUser.image}
                width={40}
                height={40}
              />
            </div>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      ) : null}
    </NavbarContainer>
  );
};

export default Navbar;
