import React, { useState } from "react";
import * as T from "../styles/SignupStyle";
import axios from "axios";
import Input from "../components/input/Input";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [emailStatus, setEmailStatus] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    gender: "",
    name: "",
    nickname: "",
  });

  // 이메일 중복 체크
  const handleEmailCheck = async () => {
    try {
      const response = await axios.post("/users/check-email", { email });
      setEmailMessage(
        response.data.available
          ? "사용 가능한 이메일 입니다."
          : "이미 사용중인 이메일 입니다."
      );
      setEmailStatus(response.data.available);
    } catch (error) {
      console.error("이메일 체크 중 오류 발생:", error);
    }
  };

  // 입력 필드 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 주소 검색 처리
  const handleAddressSearch = () => {
    const script = document.createElement("script");
    script.src =
      "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    script.onload = () => {
      new window.daum.Postcode({
        oncomplete: function (data) {
          const postalCode = data.zonecode;
          const fullAddr = data.address;

          setFormData((prevData) => ({
            ...prevData,
            postalCode: postalCode,
            address: fullAddr,
          }));
        },
      }).open();
    };
    document.body.appendChild(script);
  };

  // 폼 제출 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("users/signup", formData);
      if (response.status === 200) {
        // 리다이렉션 처리
        console.log("회원가입 성공");
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
    }
  };

  return (
    <T.Container>
      <T.FormContainer>
        <T.Header>회원가입</T.Header>
        <form onSubmit={handleSubmit}>
          <Input
            label="이름"
            type="text"
            name="name"
            placeholder="이름을 입력하세요"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            label="닉네임"
            type="text"
            name="nickname"
            placeholder="닉네임을 입력하세요"
            value={formData.nickname}
            onChange={handleChange}
          />

          <T.InputContainer>
            <Input
              label="이메일"
              type="email"
              name="email"
              placeholder="이메일을 입력하세요"
              value={formData.email}
              onChange={(e) => {
                handleChange(e);
                setEmail(e.target.value); // 이메일 상태 업데이트
              }}
            />
            <T.Button
              type="button"
              style={{ width: "150px" }}
              onClick={handleEmailCheck}
            >
              이메일 확인
            </T.Button>
          </T.InputContainer>

          {emailMessage && (
            <div style={{ color: emailStatus ? "green" : "red" }}>
              {emailMessage}
            </div>
          )}

          <Input
            label="비밀번호"
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            label="비밀번호 확인"
            type="password"
            name="confirmPassword"
            placeholder="비밀번호 확인"
            onChange={handleChange}
          />
          <Input
            label="전화번호"
            type="number"
            name="phoneNumber"
            placeholder="전화번호를 입력하세요"
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          <T.InputContainer>
            <Input
              label="우편번호"
              type="text"
              name="postalCode"
              placeholder="우편번호"
              value={formData.postalCode}
              readOnly
            />
            <T.Button
              type="button"
              style={{ width: "150px" }}
              onClick={handleAddressSearch}
            >
              주소찾기
            </T.Button>
          </T.InputContainer>
          <Input
            label="주소"
            type="text"
            name="address"
            placeholder="주소를 입력하세요"
            value={formData.address}
            readOnly
          />
          <T.InputContainer>
            <div>
              <label>성별</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="male"
                    checked={formData.gender === "male"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gender: e.target.checked ? "male" : "",
                      })
                    }
                  />
                  남성
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="female"
                    checked={formData.gender === "female"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gender: e.target.checked ? "female" : "",
                      })
                    }
                  />
                  여성
                </label>
              </div>
            </div>
          </T.InputContainer>

          <T.Button type="submit">가입</T.Button>
        </form>
      </T.FormContainer>
    </T.Container>
  );
};

export default Signup;
