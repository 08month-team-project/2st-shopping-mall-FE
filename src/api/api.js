import { Navigate } from "react-router-dom";
import instance from "./instance"; // Axios 인스턴스 가져오기
import axios from "axios";

// 로그인 함수
export const login = async (email, password) => {
  try {
    // 로그인 API 호출
    const response = await instance.post("/login", { email, password });

    const authorizationHeader = response.headers["authorization"];
    if (!authorizationHeader) {
      throw new Error("액세스 토큰이 제공되지 않았습니다.");
    } // 응답 헤더에서 JWT 액세스 토큰 추출

    const token = authorizationHeader.split(" ")[1];
    if (!token) {
      throw new Error("액세스 토큰을 추출할 수 없습니다.");
    } // Authorization 헤더에서 "Bearer 액세스 토큰" 형식으로 토큰 추출

    // JWT 토큰을 로컬 스토리지에 저장
    localStorage.setItem("accessToken", token);

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; // 모든 요청에 토큰 추가, 사용자가 로그인에 성공했다는 것을 증명하기 위해

    return response.data.message;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "로그인 요청 중 오류 발생"
    );
  }
};

// 로그아웃 함수
export const logout = (navigate) => {
  localStorage.removeItem("accessToken");
  delete axios.defaults.headers.common["Authorization"];
  navigate("/login");
};
