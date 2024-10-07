import Cookies from "js-cookie";

// 쿠키에 JWT 토큰 저장 (유효 기간 설정 가능)
export const setCookie = (name, value, options = {}) => {
  Cookies.set(name, value, { ...options, secure: true, sameSite: "strict" });
};

// 쿠키에서 JWT 토큰 가져오기
export const getCookie = (name) => {
  return Cookies.get(name);
};

// 쿠키 삭제하기
export const deleteCookie = (name) => {
  Cookies.remove(name);
};
