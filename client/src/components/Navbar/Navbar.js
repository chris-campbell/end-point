import React, { useContext, useEffect, useState } from "react";
import Logo from "./img/logo.svg";
import Bell from "./img/bell.svg";
import AuthContext from "../../context/AuthContext";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
// import CurrentUserContext from "../../context/UserContext";
import "./css/Navbar.css";

function Navbar() {
  const { getLoggedIn } = useContext(AuthContext);
  // const { user, setUser } = useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    await updateCurrentUser();
    setIsLoading(false);
  }, []);

  const updateCurrentUser = async () => {
    const userData = await axios.get("/currentUser");
    // setUser(userData);
  };

  function capFirstChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const logOut = async () => {
    await axios.get("http://localhost:4000/users/logout");

    await getLoggedIn();

    return <Redirect to="/login" />;
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <img className="logo" alt="logo" src={Logo} />

        <div className="notification-icon">
          <div className="notify">
            <img className="nav-icon" alt="notification-bell" src={Bell} />
            {/* {user.data.alerts.length <= 0 ? null : (
              <div className="notification-count">
                {user.data.alerts.length}
              </div>
            )} */}
          </div>
        </div>
        <ul className="main-nav">
          <li>
            <div className="dropdown">
              <img
                className="avatar btn btn-secondary dropdown-toggle"
                alt="user-avatar"
                // src={user.data.image}
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />
              {/* {console.log(user.data.image)} */}
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" onClick={logOut} to="/login">
                  Logout
                </Link>
              </div>
            </div>
          </li>
          {/* <li className="username">{capFirstChar(user.data.firstName)}</li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
