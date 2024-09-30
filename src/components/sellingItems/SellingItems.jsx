import React from "react";
import { loginGuest } from "../../api/api/";

const SellingItems = () => {
  return (
    <>
      {loginGuest.map(() => {
        <div>
          <div>img</div>
          <div>상품명</div>
          <div>컬러</div>
        </div>;
      })}
    </>
  );
};

export default SellingItems;
