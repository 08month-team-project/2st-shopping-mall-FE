import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // 로그인 성공 시, home으로 보내기 위해 useNavigate 사용

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/signin", {
        // 백엔드와 주소 확인해야 함.
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token); // localstorage에 토큰 저장
      setError(""); // 성공하면 에러 메세지 초기화
      navigate("/home"); // 어디로 옮길지는 좀 더 생각해보기. main 아니면 home?
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h1>로그인</h1>
      <form onSubmit={handleLogin}>
        <div className="login-email">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email 주소를 정확하게 입력해주세요."
          />
        </div>
        <div className="login-password">
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {error && <p className="login-error">{error}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
