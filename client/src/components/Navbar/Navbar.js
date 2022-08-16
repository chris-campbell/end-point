import React from "react";
import styled from "styled-components";
import Logo from "./img/logo.svg";
import axiosClient from "../../utils/apiClient";
import { useAuth } from "../../context/AuthContext";
import { useCurrentUser } from "../../context/UserContext";

const NavbarContainer = styled.div`
  background-color: var(--primary-color-red);
  .navbar-wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    padding: 1rem 0;
    .navbar-links {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .avatar img {
        border-radius: 2rem;
        border: 1px solid var(--accent-light);
      }
      .logout-btn {
        padding: 0.5rem;
        font-size: 1rem;
        background-color: transparent;
        border: none;
        color: var(--accent-light);
        cursor: pointer;
        letter-spacing: 0.05rem;
        &:hover {
          transition: 400ms all ease-in-out;
          opacity: 0.8;
        }
      }
    }
  }
`;

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
