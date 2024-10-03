import React, { useState } from "react";
import * as T from "../styles/SignupStyle";
import axios from "axios";
import Input from "../components/input/Input";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [emailStatus, setEmailStatus] = useState(null); // null: no check, true: available, false: in use

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    gender: "",
    name: "",
    nickname: "",
  });

  const handleEmailCheck = async () => {
    const response = await axios.post("/users/check-email", { email });
    if (response.data.available) {
      setEmailMessage("사용 가능한 이메일 입니다.");
      setEmailStatus(true);
    } else {
      setEmailMessage("이미 사용중인 이메일 입니다.");
      setEmailStatus(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("users/signup", {
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      gender: formData.gender,
      name: formData.name,
      nickname: formData.nickname,
    });
    if (response.status === 200) {
      //리다이렉션?
    }
  };

  return (
    <T.Container>
      <T.FormContainer>
        <T.Header>회원가입</T.Header>
        <form>
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
              onChange={handleChange}
            />
            <T.Button style={{ width: "150px" }} onClick={handleEmailCheck}>
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
              label="주소"
              type="text"
              name="address"
              placeholder="주소를 입력하세요"
              value={formData.address}
              onChange={handleChange}
            />
            <T.Button style={{ width: "150px" }}>주소찾기</T.Button>
          </T.InputContainer>
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
                        gender: e.target.checked ? "male" : "", // 체크 해제 시 gender 값 초기화
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
                        gender: e.target.checked ? "female" : "", // 체크 해제 시 gender 값 초기화
                      })
                    }
                  />
                  여성
                </label>
              </div>
            </div>
          </T.InputContainer>
          <br />
          <T.Button type="submit">가입</T.Button>
        </form>
      </T.FormContainer>
    </T.Container>
  );
};

export default Signup;
