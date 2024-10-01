import React, { useState } from "react";

// style
import {
  Wrapper,
  UserInfo,
  Img,
  Title,
  Text,
  InfoWarpper,
  ModiInfoBox,
  InfoBox,
  InfoBoxIntro,
  InfoText,
  InfoTextIntro,
  Label,
  Input,
  InputAddress,
  InputIntro,
  ModifyBtn,
} from "../../styles/profileStyle";

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
