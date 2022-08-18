import React, { useState } from "react";
import loginCred from "./js/loginState";
import { Link } from "react-router-dom";
import LoginForm1 from "./loginForm/LoginForm";
import axiosClient from "../../utils/apiClient";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { useCurrentUser } from "../../context/UserContext";
import Logo from "./img/logo.svg";
import LoginContainer from "./styles/styles";

const Login = () => {
  const [state, setState] = useState(loginCred);

  const { setAuth } = useAuth();
  const { fetchCurrentUser } = useCurrentUser();

  let navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const user = await axiosClient.post("/loginUser", state, {
        withCredentials: true,
      });

      if (user) {
        setAuth(user.data);
        fetchCurrentUser();
        localStorage.setItem("user", JSON.stringify(user.data));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateState = (e, property) => {
    setState((prev) => ({ ...prev, [property]: e }));
  };

  return (
    <LoginContainer className="login">
      <div className="login-wrapper">
        <div className="contain">
          <img alt="logo" src={Logo} className="login-logo" width={65} />
          <LoginForm1 loginUser={loginUser} updateState={updateState} />
          <div className="signup">
            <p className="not-registered">
              Not Registered, sign up{" "}
              <Link className="registered-link" to="/">
                here
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
