import styled from "styled-components";

export const Warpper = styled.div`
  width: 80vw;
  padding: 3rem;
`;

export const RegisterBtn = styled.button`
  float: right;
`;

export const RegisterInfo = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const ItemInfoBox = styled.div``;
export const ItemInfo = styled.div`
  margin-bottom: 1rem;
`;
export const ItemInfoScript = styled(ItemInfo)`
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
`;
export const InfoLabel = styled.label`
  margin-right: 0.5rem;
`;
export const InfoInput = styled.input`
  padding: 0.25rem 0.5rem;
`;
export const InfoInputScript = styled(InfoInput)`
  width: 400px;
  height: 100px;
  margin-top: 0.5rem;
  resize: vertical;
  overflow-y: auto;
`;
export const Select = styled.select`
  padding: 0.25rem 0.5rem;
`;
export const Option = styled.option``;
export const ItemImagesBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
export const ItemImage = styled.img`
  display: block;
  width: 100px;
  margin-right: 0.5rem;
`;

export const ForemostImgBox = styled.div`
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ImgBox = styled.div`
  width: 20vw;
  height: 40vh;
  background-color: #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
export const ForemostImg = styled.img`
  width: 20vw;
  height: fit-content;
`;
export const ForemostImgText = styled.p``;
