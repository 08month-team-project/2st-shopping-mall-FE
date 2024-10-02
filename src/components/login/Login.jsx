import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/signin", {
        email,
        password,
      }); //주소 확인하기
      const token = response.data.token;
      localStorage.setItem("token", token);
      setError("");
    } catch (error) {
      setError("Invalid email or password");
    }

    return (
      <div className="login-container">
        <h1>로그인</h1>
        <form onSubmit={handleLogin}>
          <div className="login-email">
            <input
              type="email"
              value={email}
              onChange={(event) => SetEmail(event.target.value)}
              placeholder="email 주소를 정확하게 입력해주세요."
            />
          </div>
          <div className="login-password">
            <input
              type="password"
              value={password}
              onChange={(event) => SetPassword(event.target.value)}
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  };
}

export default Login;
