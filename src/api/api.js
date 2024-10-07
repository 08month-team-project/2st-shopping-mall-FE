import { Navigate } from "react-router-dom";
import instance from "./instance"; // Axios 인스턴스 가져오기
import axios from "axios";

// 로그인 함수
export const login = async (email, password) => {
  try {
    // 로그인 API 호출
    const response = await instance.post("/login", { email, password });
    // 헤더에서 JWT 토큰 추출
    const token = response.data.token; // 백엔드에서 받은 액세스 토큰 (백엔드 노션 참조)

    // JWT 토큰을 로컬 스토리지에 저장
    if (token) {
      localStorage.setItem("accessToken", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; // 모든 요청에 토큰 추가, 사용자가 로그인에 성공했다는 것을 증명하기 위해
    }

    return response.data;
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
