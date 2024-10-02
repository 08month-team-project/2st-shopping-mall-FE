import styled from "styled-components";

export const Warpper = styled.div`
  width: 80vw;
  margin-top: 10vh;
`;
export const Container = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`;
export const Title = styled.h3`
  width: 100%;
  height: 10vh;
  margin-bottom: 1rem;
  text-align: center;
  line-height: 10vh;
  background-color: #ccc;
`;
export const ItemBox = styled.div`
  width: 100%;
  padding-left: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;
export const Item = styled.div`
  width: calc((100% - 5rem) / 4);
  height: 300px;
  background-color: #ccc;
  position: relative;
  border-radius: 0.5rem;
`;
export const DelBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 20px;
  font-weight: 700;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
