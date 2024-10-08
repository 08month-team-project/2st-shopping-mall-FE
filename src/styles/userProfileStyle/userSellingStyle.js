import styled from "styled-components";

export const Warpper = styled.div`
  width: 80vw;
`;
export const Container = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  background-color: #f4f6f8;
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
export const ItemBox = styled.div`
  width: 100%;
  padding: 1.5rem 0 2rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.6rem;
`;
export const Item = styled.div`
  width: calc((100% - 8rem) / 4);
  position: relative;
  border: 1px solid #d6d8db;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 0 10px 1px #d6d8db;
  background-color: #fff;
`;
export const SelledItem = styled(Item)`
  opacity: 0.5;
`;
export const ItemInfoBox = styled.div``;
export const ItemImg = styled.p`
  width: 100%;
  height: 200px;
  background-color: #ececec;
  text-align: center;
  padding-top: 3rem;
`;
export const ItemInfoText = styled.div`
  padding: 0.25rem 0.5rem;
`;
export const ItemName = styled.p``;
export const ItemCountBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ItemPrice = styled.p``;
export const ItemAmount = styled.p``;
