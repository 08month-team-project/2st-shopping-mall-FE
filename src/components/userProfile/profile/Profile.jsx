import React, { useEffect, useState } from "react";
import {
  containSlang,
  isValidEmail,
  isValidPhone,
} from "../../../utils/validation";
import ProfileInfomation from "./ProfileInfomation";
import ProfileModify from "./ProfileModify";
import { getUserData } from "../../../api/api";

// icon
import UserFillIcon from "../../../icons/userFill.svg";

// style
import {
  LoginText,
  Wrapper,
} from "../../../styles/userProfileStyle/profileStyle";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "사용자",
    nickName: "닉네임",
    phone_number: "010-0000-0000",
    email: "example@gmail.com",
    address: {
      zipcode: "12345",
      city: "00구 00동",
    },
    comment: "소개글을 작성해주세요.",
    gender: "남성",
    profile_image_url: UserFillIcon,
  });
  const [inputValues, setInputValues] = useState({ ...userInfo });
  const [previewImg, setPreviewImg] = useState(UserFillIcon);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [slangError, setSlangError] = useState({});
  const [imgError, setImgError] = useState("");
  const [isValidModify, setIsValidModify] = useState("");
  // 로그인 상태관리
  const [isLogin, setIsLogin] = useState(false);

  const changeInputValue = (e) => {
    const { id, value } = e.target;

    setInputValues((prev) => {
      const newAddress = { ...prev.address };

      if (id === "zipcode") {
        newAddress.zipcode = value;
      } else if (id === "city") {
        newAddress.city = value;
      }

      return {
        ...prev,
        [id]: value,
        address: newAddress,
      };
    });

    // 전화번호 유효성검사
    if (id === "phone_number") {
      if (!isValidPhone(value)) {
        setPhoneError("유효하지 않은 전화번호 형식입니다. (예: 000-0000-0000)");
      } else {
        setPhoneError("");
      }
    }

    // 이메일 유효성검사
    if (id === "email") {
      if (!isValidEmail(value)) {
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
      setIsValidModify("프로필이 수정되었습니다.");
    } else {
      const errorInputs = [
        { id: "img", error: imgError },
        { id: "name", error: slangError.name },
        { id: "nickName", error: slangError.nickName },
        { id: "phone_number", error: phoneError },
        { id: "email", error: emailError },
        { id: "comment", error: slangError.comment },
      ];
      const firstErrorInput = errorInputs.find((input) => input.error);
      if (firstErrorInput) {
        document.getElementById(firstErrorInput.id).focus();
      }
      setIsValidModify("잘못 입력된 정보가 존재합니다.");
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
    setPreviewImg(UserFillIcon);

    // 파일형식 유효성검사
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (file) {
      if (!allowedTypes.includes(file.type)) {
        setImgError(
          "jpg, jpeg, png 형식의 이미지 파일만 업로드할 수 있습니다."
        );
        return;
      }

      // 파일 용량(1MB) 유효성검사
      if (file.size > 1 * 1024 * 1024) {
        setImgError("이미지 파일 크기는 1MB를 초과할 수 없습니다.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setInputValues((prev) => ({
          ...prev,
          profile_image_url: reader.result,
        }));
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // 주소 검색 결과 업데이트 함수
  const setFormData = (newData) => {
    setInputValues((prev) => ({
      ...prev,
      address: {
        zipcode: newData.zonecode,
        city: newData.address,
      },
    }));
  };

  // 유저데이터 get >> 🚂구현중...
  const getUserProfileData = async () => {
    try {
      const res = await getUserData();
      console.log(res);
      setUserInfo(res);
      setInputValues(res);
      setIsLogin(true); // 로그인 성공 시
    } catch (error) {
      if (error.response && error.response.data.code === 401) {
        // 401 = 로그인한 회원만 접속이 가능합니다.
        console.error(error.response.data.message);
      } else if (error.response.status === 403) {
        console.error("접근 권한이 없습니다.");
      } else {
        console.error(
          "사용자 정보를 불러오는데 실패하였습니다.",
          error.message
        );
      }
    }
  };
  useEffect(() => {
    getUserProfileData();
  }, []);

  return (
    <Wrapper>
      {isLogin ? (
        <>
          <ProfileInfomation userInfo={userInfo} />
          <ProfileModify
            inputValues={inputValues}
            previewImg={previewImg}
            handleImgChange={handleImgChange}
            imgError={imgError}
            changeInputValue={changeInputValue}
            handleModify={handleModify}
            slangError={slangError}
            phoneError={phoneError}
            handleGenderChange={handleGenderChange}
            emailError={emailError}
            isValidModify={isValidModify}
            setFormData={setFormData}
          />
        </>
      ) : (
        <LoginText>로그인을 해주세요.</LoginText>
      )}
    </Wrapper>
  );
};

export default Profile;
