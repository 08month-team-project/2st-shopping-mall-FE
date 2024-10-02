import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";
import Signup from "../pages/Signup";
import Profile from "../components/userProfile/Profile";
import Register from "../pages/Register";
import Selling from "../pages/Selling";
import Buying from "../pages/Buying";
import Login from "../pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="user" element={<User />}>
          <Route index element={<Profile />} />
          <Route path="register" element={<Register />} />
          <Route path="selling" element={<Selling />} />
          <Route path="buying" element={<Buying />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
