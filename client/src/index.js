import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { CurrentUserProvider } from "./context/UserContext";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
