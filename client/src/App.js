import React from "react";
import axios from "axios";
import Router from "./Router";
import Navbar from "./components/Navbar/Navbar";
import { SnackbarProvider } from "notistack";
import "./index.css";

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <SnackbarProvider>
        <Navbar />
        <Router />
      </SnackbarProvider>
    </>
  );
}

export default App;
