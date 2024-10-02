import React, { useState } from "react";

// icon
import PhoneIcon from "../../icons/phone.svg";
import EmailIcon from "../../icons/email.svg";
import MaleIcon from "../../icons/male.svg";
import FemaleIcon from "../../icons/female.svg";
import AddressIcon from "../../icons/address.svg";
import PencilIcon from "../../icons/pencil.svg";
import UserIcon from "../../icons/user.svg";

// style
import {
  Wrapper,
  UserInfo,
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
  RadioLabel,
  RadioInput,
  InputAddress,
  InputIntro,
  ModifyBtn,
  TextBox,
  Icon,
  UserImg,
  UserInfoBox,
  GenderIcon,
  ProfileImg,
  Image,
  PreviewImg,
  InfoBoxImg,
} from "../../styles/profileStyle";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "사용자",
    phone: "010-0000-0000",
    email: "sldkfjsdf@naver.com",
    address: "주소입니다",
    intro: "소개글입니다",
    gender: "male",
    profileImg: UserIcon,
  });
  const [inputValues, setInputValues] = useState({ ...userInfo });
  const [previewImg, setPreviewImg] = useState(UserIcon);

  const changeInputValue = (e) => {
    const { id, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // 수정버튼클릭
  const handleModify = () => {
    setUserInfo(inputValues);
  };

  // 성별변환
  const handleGenderChange = (e) => {
    setInputValues((prev) => ({
      ...prev,
      gender: e.target.value,
    }));
  };

  // 프로필사진변환
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputValues((prev) => ({
          ...prev,
          profileImg: reader.result,
        }));
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Wrapper>
      <UserInfoBox>
        <UserImg>
          <ProfileImg>
            <Image src={userInfo.profileImg} alt="프로필사진" />
          </ProfileImg>
          <Title>{userInfo.name}님, 환영합니다</Title>
        </UserImg>
        <UserInfo>
          <TextBox>
            <Icon src={PhoneIcon} alt="phone-icon" />
            <Text>{userInfo.phone}</Text>
          </TextBox>
          <TextBox>
            <Icon src={EmailIcon} alt="email-icon" />
            <Text>{userInfo.email}</Text>
          </TextBox>
          <TextBox>
            <GenderIcon
              src={userInfo.gender === "male" ? MaleIcon : FemaleIcon}
            />
            <Text>{userInfo.gender === "male" ? "남성" : "여성"}</Text>
          </TextBox>
          <TextBox>
            <Icon src={AddressIcon} alt="address-icon" />
            <Text>{userInfo.address}</Text>
          </TextBox>
          <TextBox>
            <Icon src={PencilIcon} alt="pencil-icon" />
            <Text>{userInfo.intro}</Text>
          </TextBox>
        </UserInfo>
      </UserInfoBox>

      <InfoWarpper>
        <ModiInfoBox>
          <InfoBoxImg>
            {previewImg && <PreviewImg src={previewImg} alt="미리보기" />}
            <InfoBox>
              <Label>프로필사진</Label>
              <Input type="file" onChange={handleImgChange} />
            </InfoBox>
          </InfoBoxImg>
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
              <RadioLabel>성별</RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  value="male"
                  checked={inputValues.gender === "male"}
                  onChange={handleGenderChange}
                />
                남성
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  value="female"
                  checked={inputValues.gender === "female"}
                  onChange={handleGenderChange}
                />
                여성
              </RadioLabel>
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
