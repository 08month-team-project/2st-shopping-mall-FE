import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputField from "../components/auth/InputField";
import { isValidEmail, isValidPassword } from "../utils/Validation";
import * as S from "../components/auth/styleAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // 로그인 성공 시, home으로 보내기 위해 useNavigate 사용

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (value && isValidEmail(value)) {
      setEmailError(false);
    }
  };

  const handleEmailBlur = () => {
    if (!isValidEmail(email)) {
      setEmailError(true);
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    if (value === "") {
      setPasswordError("비밀번호를 입력해주세요");
    } else if (!isValidPassword(value)) {
      setPasswordError(
        "비밀번호는 영문자와 숫자를 포함하여 8자 이상 20자 이하로 입력해야 합니다."
      );
    } else {
      setPasswordError("");
    }
  };

  const handlePasswordBlur = () => {
    if (password === "") {
      setPasswordError("비밀번호를 입력해 주세요.");
    } else if (!isValidPassword(password)) {
      setPasswordError(
        "비밀번호는 영문자와 숫자를 포함하여 8자 이상 20자 이하로 입력해야 합니다."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!isValidEmail(email)) {
      setError("유효한 이메일 주소를 입력해 주세요.");
      setIsLoading(false);
      return;
    }

    if (!isValidPassword(password)) {
      setError("비밀번호를 입력해주세요.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/signin", {
        email,
        password,
      });

      const token = response.data.token;

      if (token) {
        localStorage.setItem("token", token); // localstorage에 토큰 저장
        setError(""); // 성공하면 에러 메세지 초기화
        navigate("/home"); // 어디로 옮길지는 좀 더 생각해보기. main 아니면 home?
      } else {
        setError("로그인에 성공했지만, 토큰이 제공되지 않았습니다.");
      }
    } catch (error) {
      setError(error.response?.data?.message || "에러 메시지 기본값");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <h1>로그인</h1>
      <form onSubmit={handleLogin}>
        <S.Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          placeholder="이메일(example.supercoding.com)"
          style={{ borderColor: emailError ? "red" : "#ddd" }} // 유효하지 않으면 빨간 테두리
        />
        {emailError && (
          <S.ErrorMessage>유효한 이메일 주소를 입력해 주세요.</S.ErrorMessage>
        )}

        <S.Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          placeholder="비밀번호를 입력해 주세요."
          style={{ borderColor: passwordError ? "red" : "#ddd" }}
        />
        {passwordError && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}

        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
        <S.Button type="submit" disabled={isLoading}>
          {isLoading ? "로그인 중입니다." : "Sign In"}
        </S.Button>
      </form>
    </S.Container>
  );
}

export default Login;
