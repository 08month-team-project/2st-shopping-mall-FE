import React from "react";

import { MoreBtn } from "../../../styles/userProfileStyle/userSellingStyle";
import { UniBtn } from "../../button/UniBtn";

const Pagination = ({ items, handleClickMorePage, visibleItems }) => {
  return (
    <>
      {visibleItems < items.length && (
        <MoreBtn>
          <UniBtn onClick={handleClickMorePage}>▼ 더보기</UniBtn>
        </MoreBtn>
      )}
    </>
  );
};

export default Pagination;
