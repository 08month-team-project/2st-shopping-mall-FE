import React, { useState } from "react";
import styled from "styled-components";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "사용자",
    phone: "010-0000-0000",
    email: "sldkfjsdf@naver.com",
    address: "주소입니다",
    intro: "소개글입니다",
  });
  const [inputValues, setInputValues] = useState({ ...userInfo });

  const changeInputValue = (e) => {
    const { id, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleModify = () => {
    setUserInfo(inputValues);
  };

  return (
    <Wrapper>
      <UserInfo>
        <Img>img</Img>
        <Title>{userInfo.name}님, 환영합니다</Title>
        <Text>{userInfo.phone}</Text>
        <Text>{userInfo.email}</Text>
        <Text>{userInfo.address}</Text>
        <Text>{userInfo.intro}</Text>
      </UserInfo>

      <InfoWarpper>
        <ModiInfoBox>
          <InfoBox>
            <InfoText>
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                type="text"
                value={inputValues.name}
                onChange={changeInputValue}
              />
            </InfoText>
          </InfoBox>
          <InfoBox>
            <InfoText>
              <Label htmlFor="phone">전화번호</Label>
              <Input
                id="phone"
                type="tel"
                value={inputValues.phone}
                onChange={changeInputValue}
              />
            </InfoText>
          </InfoBox>
          <InfoBox>
            <InfoText>
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                value={inputValues.email}
                onChange={changeInputValue}
              />
            </InfoText>
          </InfoBox>
          <InfoBox>
            <InfoText>
              <Label htmlFor="address">주소</Label>
              <InputAddress
                id="address"
                type="text"
                value={inputValues.address}
                onChange={changeInputValue}
              />
            </InfoText>
          </InfoBox>
          <InfoBoxIntro>
            <InfoTextIntro>
              <Label htmlFor="intro">소개</Label>
              <InputIntro
                id="intro"
                type="text"
                value={inputValues.intro}
                onChange={changeInputValue}
              />
            </InfoTextIntro>
          </InfoBoxIntro>
        </ModiInfoBox>
        <ModifyBtn onClick={handleModify}>프로필수정</ModifyBtn>
      </InfoWarpper>
    </Wrapper>
  );
};

export default Profile;

// style
const Wrapper = styled.div`
  width: 80vw;
`;
const UserInfo = styled.div`
  width: 100%;
  padding: 2rem;
  margin: auto;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;
const Img = styled.div`
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
const Title = styled.h2`
  margin: 2rem 0;
`;
const Text = styled.p`
  margin-bottom: 1rem;
`;

const InfoWarpper = styled.div`
  margin: auto;
  width: 60%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;
const ModiInfoBox = styled.div``;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const InfoBoxIntro = styled(InfoBox)`
  align-items: flex-start;
`;
const InfoText = styled.div`
  display: flex;
  align-items: center;
`;
const InfoTextIntro = styled(InfoText)`
  align-items: flex-start;
`;
const Label = styled.label``;
const Input = styled.input`
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem;
`;
const InputAddress = styled(Input)`
  width: 400px;
`;
const InputIntro = styled(Input)`
  width: 400px;
  height: 150px;
`;

const ModifyBtn = styled.button`
  display: block;
  width: fit-content;
  height: fit-content;
`;
