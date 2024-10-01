import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80vw;
`;
export const UserInfo = styled.div`
  width: 100%;
  padding: 2rem;
  margin: auto;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;
export const Img = styled.div`
  margin: auto;
  width: 100px;
  aspect-ratio: 1 / 1;
  background-color: #458af1;
  color: #fff;
  border-radius: 100%;
  font-size: 3rem;
  text-align: center;
  line-height: 90px;
`;
export const Title = styled.h2`
  margin: 2rem 0;
`;
export const Text = styled.p`
  margin-bottom: 1rem;
`;

export const InfoWarpper = styled.div`
  margin: auto;
  width: 60%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;
export const ModiInfoBox = styled.div``;
export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
export const InfoBoxIntro = styled(InfoBox)`
  align-items: flex-start;
`;
export const InfoText = styled.div`
  display: flex;
  align-items: center;
`;
export const InfoTextIntro = styled(InfoText)`
  align-items: flex-start;
`;
export const Label = styled.label``;
export const Input = styled.input`
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem;
`;
export const InputAddress = styled(Input)`
  width: 400px;
`;
export const InputIntro = styled(Input)`
  width: 400px;
  height: 150px;
`;

export const ModifyBtn = styled.button`
  display: block;
  width: fit-content;
  height: fit-content;
`;
