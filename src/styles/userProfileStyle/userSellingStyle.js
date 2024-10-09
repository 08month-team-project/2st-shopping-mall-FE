import styled from "styled-components";

export const Warpper = styled.div`
  width: 80vw;
`;

export const TitleBox = styled.ul`
  width: 100%;
  padding-left: 3rem;
  border-bottom: 1px solid #ccd3d750;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.li`
  margin-right: 1rem;
  padding: 0 1rem;
  line-height: 8vh;
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 3px solid ${({ isActive }) => (isActive ? "#ED1E25" : "#fff")};
  cursor: pointer;
  &:hover {
    color: #666;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  padding: 2rem;
  background-color: #f4f6f8;
`;
export const ItemBox = styled.div`
  width: 100%;
  padding: 1.5rem 0 2rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.6rem;
`;
export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const Item = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid #d6d8db;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px 1px #d6d8db;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SelledItem = styled(Item)`
  opacity: 0.5;
`;

export const ItemInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const ItemName = styled.p``;
export const ItemPrice = styled.p``;
export const ItemAmount = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
`;

export const ModifyAmountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const ModifyAmountBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 0.7;
  }
`;
export const AmountIcon = styled.img``;
export const ModifyAmountNumber = styled.p``;
