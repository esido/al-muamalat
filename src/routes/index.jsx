import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/auth/login/Login";
import Auth from "../pages/auth/Auth";

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
    </Routes>
  );
};

export default RouteController;
