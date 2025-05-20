import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Auth from "../pages/auth/Auth";
import International from "../pages/international/International";
import Profile from "../pages/profile/Profile";
import EditUser from "../components/profile/editUser/EditUser";
import Courses from "../components/profile/courses/Courses";

const RouteController = () => {
  const token = localStorage.getItem("testUserToken");
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
      <Route path="/programs/international" element={<International />} />
      {token && (
        <Route path="/profile" element={<Profile />}>
          <Route index element={<EditUser />} />
          <Route path="/profile/courses" element={<Courses />} />
        </Route>
      )}
    </Routes>
  );
};

export default RouteController;
