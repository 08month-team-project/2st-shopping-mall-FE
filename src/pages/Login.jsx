import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputField from "../components/auth/InputField";
import { isValidEmail } from "../utils/Validation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // 로그인 성공 시, home으로 보내기 위해 useNavigate 사용

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!isValidEmail(email)) {
      setError("유효한 이메일 주소를 입력해 주세요.");
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
    <Container>
      <h1>로그인</h1>
      <form onSubmit={handleLogin}>
        <InputField
          label="이메일"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="이메일(example.supercoding.com)"
        />
        <InputField
          label="비밀번호"
          type="password"
          value={password}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="비밀번호를 입력해 주세요."
        />

        {error && <p className="login-error">{error}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "로그인 중입니다." : "Sign In"}
        </button>
      </form>
    </Container>
  );
}

export default Login;
