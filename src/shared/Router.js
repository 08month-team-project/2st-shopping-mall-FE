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
import Basket from "../pages/Basket";
import Payment from "../pages/Payment";
import MainHeader from "../components/mainHeader/MainHeader";

const Router = () => {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="user" element={<User />}>
          <Route index element={<Profile />} />
          <Route path="register" element={<Register />} />
          <Route path="selling" element={<Selling />} />
          <Route path="buying" element={<Buying />} />
        </Route>
        <Route path="signup" element={<Signup />} />
        <Route path="basket" element={<Basket />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
