import React from "react";
import { loginBusiness } from "../../api/api/";

const CompletedItems = () => {
  return (
    <>
      {loginBusiness.map((i) => {
        <div>
          <div>i.data.businessNum</div>
          <div>i.title</div>
          <div>i.color</div>
        </div>;
      })}
    </>
  );
};

export default CompletedItems;
