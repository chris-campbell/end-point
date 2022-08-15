import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import SignupForm from "./signupForm/SignupForm";
import SignupContainer from "./styles/styles";

import emailUnique from "./js/uniqueEmail";
import initialFormState from "./js/initalState";
import axiosClient from "../../utils/apiClient";
import { useAuth } from "../../context/AuthContext";

const Signup = () => {
  const [formState, setFormState] = useState(initialFormState);
  const { firstName, lastName, emailAddress, password, address } = formState;
  const { setAuth } = useAuth();

  const inputRef = useRef(null);
  let navigate = useNavigate();

  const uniqueEmail = () => {
    emailUnique(emailAddress, inputRef, setFormState);
  };

  const isFieldsEmpty = () => {
    if (
      (firstName === "") |
      (lastName === "") |
      (emailAddress === "") |
      (password === "") |
      (address === "")
    ) {
      return false;
    }
    return true;
  };

  const createUser = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axiosClient.post("/createUser", formState, {
        withCredentials: true,
      });

      if (data) {
        setAuth(data);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleStateChange = (e, obj) => {
    setFormState((prev) => ({ ...prev, [obj]: e }));
  };

  return (
    <SignupContainer className="signup">
      <div className="signup-wrapper">
        <div className="signup-message-panel">
          <div className="signup-message-wrapper">
            <img
              src="https://uppoint.s3.us-east-2.amazonaws.com/logo.svg"
              width={75}
            />
            <h1>Join the search!</h1>
            <p>
              Sed pharetra dapibus consequat. Integer dictum lorem dolor, non
              rhoncus mi aliquet quis. Nam vehicula turpis ut elit rutrum
              gravida.
            </p>
            <button>Sign In</button>
          </div>
        </div>

        <SignupForm
          form={formState}
          formState={handleStateChange}
          emailUnique={uniqueEmail}
          isFieldsEmpty={isFieldsEmpty}
          createUser={createUser}
        />
      </div>
    </SignupContainer>
  );
};

export default Signup;
