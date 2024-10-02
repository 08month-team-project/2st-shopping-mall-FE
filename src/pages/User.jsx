import React from "react";
import UserNav from "../components/userProfile/UserNav";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <>
      <UserNav />
      <Outlet />
    </>
  );
};

export default User;
