import axios from "axios";

// Axios 인스턴스를 생성하고, 기본 설정 적용
const instance = axios.create({
  baseURL: "http://localhost:8080", // 로컬 백엔드 주소로 설정 (필요 시 변경 가능)
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청을 보내기 전에 JWT 토큰을 자동으로 헤더에 추가하는 인터셉터 설정
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // 쿠키에서 JWT 토큰을 가져옴
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
