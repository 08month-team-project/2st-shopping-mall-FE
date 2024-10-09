import instance from "./instance";
// import { Navigate } from "react-router-dom";
import axios from "axios";
import { setCookie, removeCookie } from "../api/cookies";

const getAllItem = async () => {
  try {
    const response = await instance.get(`/items`);
    return response.data;
  } catch (error) {
    console.error("Error fetching item:", error);
    throw error;
  }
};

const getItemById = async (item_id) => {
  try {
    const response = await instance.get(`/items/${item_id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching item:", error);
    throw error;
  }
};

const searchAllItems = async () => {
  const response = await instance.get("/items/search");
  return response.data;
};

const searchItems = async ({
  category_id,
  item_name,
  page_number = 1, // 기본값 설정
  status_condition = "AVAILABLE", // 기본 상태값 설정
  sort_condition = "LATEST", // 기본 정렬 조건 설정
} = {}) => {
  const params = {};

  // 주어진 값이 있을 때만 params에 추가
  if (category_id) params.category_id = category_id;
  if (item_name) params.item_name = item_name;
  if (page_number) params.page_number = page_number;
  if (status_condition) params.status_condition = status_condition;
  if (sort_condition) params.sort_condition = sort_condition;

  const response = await instance.get("/items/search", {
    params,
  });

  console.log("API Response:", response);
  return response.data;
};

const getCategories = async (email) => {
  const response = await instance.get("/items/categories", email);
  return response.data;
};

const checkEmail = async (email) => {
  const response = await instance.post("/users/check-email", email);
  return response.data;
};

const formSubmit = async (formData) => {
  const response = await instance.post("/users/signup", formData);
  return response.data;
};

export {
  getAllItem,
  getItemById,
  searchItems,
  getCategories,
  searchAllItems,
  checkEmail,
  formSubmit,
};

// 로그인 함수
export const login = async (email, password) => {
  try {
    // 로그인 API 호출
    const response = await instance.post("/users/login", { email, password });

    // 응답 데이터와 응답 헤더 출력하여 디버깅
    console.log("API 응답 데이터:", response.data);
    console.log("응답 헤더:", response.headers);

    // 응답 헤더에서 Authorization 헤더 추출 (액세스 토큰)
    const authorizationHeader = response.headers["authorization"];
    if (!authorizationHeader) {
      throw new Error("응답 헤더에 액세스 토큰이 없습니다.");
    }

    /// Authorization 헤더에서 Bearer 형식으로 토큰 추출
    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) {
      throw new Error("Authorization 헤더에서 토큰을 추출할 수 없습니다.");
    }

    // 응답 본문에서 refresh 토큰 추출
    const { refresh } = response.data;
    if (!refresh) {
      throw new Error("응답 데이터에 리프레시 토큰이 없습니다.");
    }

    // 액세스 토큰을 로컬 스토리지에 저장
    localStorage.setItem("accessToken", accessToken);
    console.log("토큰이 로컬 스토리지에 저장되었습니다:", accessToken);

    // 리프레시 토큰을 쿠키에 저장 (유효기간 3일)
    setCookie("refreshToken", refresh, { path: "/", maxAge: 3 * 24 * 60 * 60 });
    console.log("리프레시 토큰이 쿠키에 저장되었습니다:", refresh);

    // 모든 요청에 액세스 토큰 추가, 사용자가 로그인에 성공했다는 것을 증명하기 위해
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    return response;
  } catch (error) {
    console.error("로그인 중 오류 발생:", error);
    throw new Error(
      error.response?.data?.message || "로그인 요청 중 오류 발생"
    );
  }
};

// 로그아웃 함수
export const logout = (navigate) => {
  localStorage.removeItem("accessToken"); // 로컬 스토리지에서 액세스 토큰 제거
  delete axios.defaults.headers.common["Authorization"];

  // 리프레시 토큰 쿠키 삭제
  removeCookie("refreshToken");
  console.log("리프레시 토큰 쿠키가 삭제되었습니다.");

  if (navigate) {
    navigate("/users/login");
  }
};

// 유저프로필_유저데이터get
export const getUserData = async () => {
  const response = await instance.get("/users/my-page");
  return response.data;
};

// 유저프로필_물품등록_카테고리get
export const getItemCategories = async () => {
  const response = await instance.get("/items/categories");
  return response.data;
};

// 유저프로필_물품등록_사이즈get
export const getItemSizes = async () => {
  const response = await instance.get("/items/size");
  return response.data;
};

// 유저프로필_물품등록_post
export const postItemData = async (jsonData) => {
  const response = await instance.post("/items/seller/register", jsonData);
  return response.data;
};
