import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
// import NotFound404 from "./pages/404/NotFound404";
import RequireAuth from "./components/auth/AuthRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* <Route path="*" element={<NotFound404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
