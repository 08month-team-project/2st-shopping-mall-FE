import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/api";
import { isValidEmail, isValidPassword } from "../utils/validation";
import * as L from "../styles/LoginStyle";
// import { XIconCloseBtn } from "../components/button/XIconCloseBtn";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // 로그인 성공 시, home으로 보내기 위해 useNavigate 사용

  // 이메일 입력 핸들링
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(!value || !isValidEmail(value)); //유효성 검사
  };

  const handleEmailBlur = () => {
    if (!isValidEmail(email)) {
      setEmailError(true);
    }
  };

  // 비밀번호 입력 핸들링
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordError(
      !value
        ? "비밀번호를 입력해 주세요."
        : !isValidPassword(value)
        ? "비밀번호는 영문자와 숫자를 포함하여 8자 이상 20자 이하로 입력해야 합니다."
        : ""
    );
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

  // 로그인 요청 함수
  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    if (emailError || passwordError) {
      setError("이메일이나 비밀번호를 확인해 주세요.");
      setIsLoading(false);
      return;
    }

    try {
      // api.js의 login 함수 호출
      const response = await login(email, password);

      const accessToken = response.headers["authorization"]?.split(" ")[1]; // "Bearer 액세스 토큰" 형식이므로 split 사용
      if (!accessToken) {
        throw new Error("액세스 토큰이 제공되지 않았습니다.");
      }
      localStorage.setItem("accessToken", accessToken); // 액세스 토큰을 로컬 스토리지에 저장
      console.log(response.data.message);
      navigate("/home"); // 로그인 성공 시, 홈 페이지로 이동
    } catch (error) {
      setError(
        error.response?.data?.message || "로그인 요청 중 오류가 발생했습니다."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <L.LoginPageStyle />
      <L.Container>
        <L.FormContainer>
          {/* <XIconCloseBtn
            top="10px"
            right="10px"
            onClick={() => navigate("/")} // 클릭 시 /home으로 이동, 현재 test를 위해 path 경로 지정
          /> */}
          <L.Title>로그인</L.Title>

          <form onSubmit={handleLogin}>
            <L.InputWrapper>
              <L.Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                placeholder="이메일을 입력하세요"
                error={emailError}
              />
              {emailError && (
                <L.ErrorMessage>
                  유효한 이메일 주소를 입력해 주세요.
                </L.ErrorMessage>
              )}
            </L.InputWrapper>

            <L.InputWrapper>
              <L.Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                placeholder="비밀번호를 입력해 주세요."
                error={passwordError}
              />
              {passwordError && (
                <L.ErrorMessage>
                  비밀번호는 영문자와 숫자를 포함하여 8자 이상 20자 이하로
                  입력해야 합니다.
                </L.ErrorMessage>
              )}
            </L.InputWrapper>

            {error && <L.ErrorMessage>{error}</L.ErrorMessage>}

            <L.Button type="submit" disabled={isLoading}>
              {isLoading ? "로그인 중입니다." : "Login"}
            </L.Button>
          </form>
        </L.FormContainer>
      </L.Container>
    </>
  );
}

export default Login;
