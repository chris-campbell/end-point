import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axiosClient from "../../utils/apiClient";
import { useAuth } from "../../context/AuthContext";
import Logo from "./img/logo.svg";
import LoginForm from "./loginForm/LoginForm";
import loginCred from "./js/loginState";
import LoginContainer from "./styles/styles";
import { useCurrentUser } from "../../context/UserContext";

const Login = () => {
  const [state, setState] = useState(loginCred);
  let navigate = useNavigate();
  const { fetchCurrentUser } = useCurrentUser();

  const { setAuth } = useAuth();

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
        <img alt="logo" src={Logo} className="login-logo" />

        <LoginForm loginUser={loginUser} updateState={updateState} />

        <p className="register-user">
          Not Registered, sign up{" "}
          <Link className="register-link" to="/">
            here
          </Link>
          .
        </p>
      </div>
    </LoginContainer>
  );
};

export default Login;
