import instance from "./instance"; // Axios 인스턴스 가져오기
import { setCookie, getCookie, removeCookie } from "./cookies"; // 쿠키 함수들 가져오기

// 로그인 함수
export const login = async (email, password) => {
  try {
    // 로그인 API 호출 (엔드포인트는 /login)
    const response = await instance.post("/login", { email, password });

    // 헤더에서 JWT 토큰 추출
    const token = response.headers["authorization"]?.split(" ")[1]; // 'Bearer <accessToken>'에서 토큰 부분만 추출, 백엔드 노션 참고
    if (token) {
      setCookie("token", token, { expires: 1 }); // 1일 동안 쿠키에 토큰 저장
      return response.data; // 로그인 성공 시, 메시지 반환
    } else {
      throw new Error(
        "로그인에 성공했지만, 액세스 토큰이 제공되지 않았습니다."
      );
    }
  } catch (error) {
    throw error.response?.data || new Error("로그인 요청 중 오류 발생");
  }
};

// 로그아웃 함수
export const logout = () => {
  try {
    removeCookie("token"); // 쿠키에서 JWT 토큰 제거
  } catch (error) {
    console.error("로그아웃 중 오류 발생:", error);
  }
};
