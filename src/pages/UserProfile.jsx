import React from "react";
import NavBar from "../components/navBar/NavBar";
import SellingItems from "../components/sellingItems/SellingItems";
import CompletedItems from "../components/completeItems/CompletedItems";

const UserProfile = () => {
  return (
    <div>
      <NavBar />
      <SellingItems />
      <CompletedItems />
    </div>
  );
};

export default UserProfile;
