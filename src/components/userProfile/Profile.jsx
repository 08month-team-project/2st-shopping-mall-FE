import React, { useState } from "react";

// icon
import PhoneIcon from "../../icons/phone.svg";
import EmailIcon from "../../icons/email.svg";
import MaleIcon from "../../icons/male.svg";
import FemaleIcon from "../../icons/female.svg";
import AddressIcon from "../../icons/address.svg";
import PencilIcon from "../../icons/pencil.svg";
import UserIcon from "../../icons/user.svg";
import SmileIcon from "../../icons/smile.svg";

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
  ErrorMsg,
  InfoBoxImgText,
  Dot,
  LabelBox,
  ExplainText,
  ExplainBox,
  BottomBox,
} from "../../styles/profileStyle";

// 비속어목록
const slangList = ["바보", "멍청이", "시발", "병신"];

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "사용자",
    nickname: "닉네임",
    phone: "010-0000-0000",
    email: "sldkfjsdf@naver.com",
    address: "들안로00길 00",
    intro: "소개글을 작성해주세요.",
    gender: "male",
    profileImg: UserIcon,
  });
  const [inputValues, setInputValues] = useState({ ...userInfo });
  const [previewImg, setPreviewImg] = useState(UserIcon);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [slangError, setSlangError] = useState({});
  const [imgError, setImgError] = useState("");

  // 전화번호 유효성검사
  const validatePhone = (phone) => {
    const regex = /^\d{3}-\d{4}-\d{4}$/;
    return regex.test(phone);
  };
  // 이메일 유효성검사
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  // 비속어 유효성검사
  const containSlang = (input) => {
    return slangList.some((word) => input.includes(word));
  };

  const changeInputValue = (e) => {
    const { id, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [id]: value,
    }));

    // 전화번호 유효성검사
    if (id === "phone") {
      if (!validatePhone(value)) {
        setPhoneError("유효하지 않은 전화번호 형식입니다. (예: 000-0000-0000)");
      } else {
        setPhoneError("");
      }
    }

    // 이메일 유효성검사
    if (id === "email") {
      if (!validateEmail(value)) {
        setEmailError("유효하지 않은 이메일 형식입니다.");
      } else {
        setEmailError("");
      }
    }

    // 비속어 유효성검사
    if (containSlang(value)) {
      setSlangError((prev) => ({
        ...prev,
        [id]: "비속어를 포함할 수 없습니다.",
      }));
    } else {
      setSlangError((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  // 수정버튼클릭
  const handleModify = (e) => {
    e.preventDefault();

    const isImgValid = !imgError;
    const isEmailValid = !emailError;
    const isPhoneValid = !phoneError;
    const isSlangValid = Object.values(slangError).every(
      (error) => error === ""
    );

    if (isImgValid && isEmailValid && isPhoneValid && isSlangValid) {
      setUserInfo(inputValues);
      alert("프로필이 수정되었습니다.");
    } else {
      const errorInputs = [
        { id: "img", error: imgError },
        { id: "name", error: slangError.name },
        { id: "nickname", error: slangError.nickname },
        { id: "phone", error: phoneError },
        { id: "email", error: emailError },
        { id: "address", error: slangError.address },
        { id: "intro", error: slangError.intro },
      ];
      const firstErrorInput = errorInputs.find((input) => input.error);
      if (firstErrorInput) {
        document.getElementById(firstErrorInput.id).focus();
      }
    }
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
    setImgError("");
    setPreviewImg(UserIcon);

    // 파일형식 유효성검사
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (file) {
      if (!allowedTypes.includes(file.type)) {
        setImgError(
          "jpg, jpeg, png 형식의 이미지 파일만 업로드할 수 있습니다."
        );
        return;
      }

      // 파일 용량(1MB) 유효서검사
      if (file.size > 1 * 1024 * 1024) {
        setImgError("이미지 파일 크기는 1MB를 초과할 수 없습니다.");
        return;
      }

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

  // 엔터키
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const inputs = document.querySelectorAll(
        'input[type="text"], input[type="tel"], input[type="email"], textarea'
      );
      const currentInput = e.target;
      const index = Array.prototype.indexOf.call(inputs, currentInput);

      if (index >= 0 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  };

  return (
    <>
      <header
        style={{
          width: "100%",
          height: "10vh",
          backgroundColor: "darkblue",
          position: "fixed",
          top: "0",
          zIndex: "999",
        }}
      />
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
              <Icon src={SmileIcon} alt="phone-icon" />
              <Text>{userInfo.nickname}</Text>
            </TextBox>
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

        <InfoWarpper as="form" onSubmit={handleModify}>
          <ModiInfoBox>
            <InfoBoxImg>
              {previewImg && <PreviewImg src={previewImg} alt="미리보기" />}
              <InfoBoxImgText>
                <Label>프로필사진</Label>
                <Input id="img" type="file" onChange={handleImgChange} />
              </InfoBoxImgText>
              {imgError && <ErrorMsg>{imgError}</ErrorMsg>}
            </InfoBoxImg>
            <InfoBox>
              <InfoText>
                <LabelBox>
                  <Label htmlFor="name">이름</Label>
                  <Dot />
                </LabelBox>
                <Input
                  id="name"
                  type="text"
                  value={inputValues.name}
                  onChange={changeInputValue}
                  onKeyDown={handleKeyDown}
                  required
                />
              </InfoText>
              {slangError.name && <ErrorMsg>{slangError.name}</ErrorMsg>}
            </InfoBox>
            <InfoBox>
              <InfoText>
                <LabelBox>
                  <Label htmlFor="nickname">닉네임</Label>
                  <Dot />
                </LabelBox>
                <Input
                  id="nickname"
                  type="text"
                  value={inputValues.nickname}
                  onChange={changeInputValue}
                  onKeyDown={handleKeyDown}
                  required
                />
              </InfoText>
              {slangError.nickname && (
                <ErrorMsg>{slangError.nickname}</ErrorMsg>
              )}
            </InfoBox>
            <InfoBox>
              <InfoText>
                <LabelBox>
                  <Label htmlFor="phone">전화번호</Label>
                  <Dot />
                </LabelBox>
                <Input
                  id="phone"
                  type="tel"
                  value={inputValues.phone}
                  onChange={changeInputValue}
                  onKeyDown={handleKeyDown}
                />
              </InfoText>
              {phoneError && <ErrorMsg>{phoneError}</ErrorMsg>}
            </InfoBox>
            <InfoBox>
              <InfoText>
                <LabelBox>
                  <Label htmlFor="email">이메일</Label>
                  <Dot />
                </LabelBox>
                <Input
                  id="email"
                  type="text"
                  value={inputValues.email}
                  onChange={changeInputValue}
                  onKeyDown={handleKeyDown}
                />
              </InfoText>
              {emailError && <ErrorMsg>{emailError}</ErrorMsg>}
            </InfoBox>
            <InfoBox>
              <InfoText>
                <LabelBox>
                  <Label>성별</Label>
                  <Dot />
                </LabelBox>
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
                  onKeyDown={handleKeyDown}
                />
              </InfoText>
              {slangError.address && <ErrorMsg>{slangError.address}</ErrorMsg>}
            </InfoBox>
            <InfoBoxIntro>
              <InfoTextIntro>
                <Label htmlFor="intro">소개</Label>
                <InputIntro
                  id="intro"
                  as="textarea"
                  value={inputValues.intro}
                  onChange={changeInputValue}
                  onKeyDown={handleKeyDown}
                />
              </InfoTextIntro>
              {slangError.intro && <ErrorMsg>{slangError.intro}</ErrorMsg>}
            </InfoBoxIntro>
          </ModiInfoBox>
          <BottomBox>
            <ExplainBox>
              <Dot />
              <ExplainText>표시된 항목은 필수입력 항목입니다.</ExplainText>
            </ExplainBox>
            <ModifyBtn type="submit">프로필수정</ModifyBtn>
          </BottomBox>
        </InfoWarpper>
      </Wrapper>
    </>
  );
};

export default Profile;
