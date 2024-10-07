import styled from "styled-components";

export const Container = styled.form`
  padding: 2rem 4rem 8rem 4rem;
  background-color: #f4f6f8;
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const ThumbNailImgBox = styled.div`
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ImgBox = styled.div`
  width: 20vw;
  height: 40vh;
  background-color: #fff;
  box-shadow: 0 0 10px 1px #d6d8db;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 500;
`;
export const ThumbNailImg = styled.img`
  width: 20vw;
  height: fit-content;
`;
export const ThumbNailImgText = styled.p`
  margin-top: 0.5rem;
  text-align: center;
  font-weight: 600;
`;

export const RegisterInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const ItemInfoBox = styled.div`
  margin-left: 3rem;
`;
export const ItemInfo = styled.div`
  &:not(:first-child) {
    margin-top: 1rem;
  }
`;
export const ItemInfoScript = styled(ItemInfo)`
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
`;
export const InfoText = styled.div`
  display: flex;
  align-items: center;
`;
export const InfoTextScript = styled(InfoText)`
  align-items: flex-start;
`;
export const InfoLabel = styled.label`
  margin-right: 0.5rem;
`;
export const InfoInput = styled.input`
  width: 200px;
  padding: 0.25rem 0.5rem;
`;
export const InfoInputScript = styled(InfoInput)`
  width: 400px;
  height: 100px;
  margin-top: 0.5rem;
  resize: vertical;
  overflow-y: auto;
`;
export const ItemImagesBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
export const ItemImage = styled.img`
  display: block;
  width: 100px;
  margin-right: 0.5rem;
  // 대표이미지스타일
  /* border: 2px solid ${({ $isselected }) =>
    $isselected ? "#007bff" : "#ccc"}; */
  border: 2px solid ${({ isthumbnail }) => (isthumbnail ? "#007bff" : "#ccc")};
`;
