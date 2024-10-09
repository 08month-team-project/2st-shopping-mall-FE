import instance from "./instance";
import { Navigate } from "react-router-dom";
import axios from "axios";

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
    console.log("Request URL:", instance.defaults.baseURL + "/users/login");
    console.log("Request Data:", { email, password });
    console.log("Request Headers:", instance.defaults.headers);

    // 로그인 API 호출
    const response = await instance.post("/users/login", { email, password });

    console.log("Response Headers:", response.headers); // 전체 응답 헤더 출력
    console.log("Response Data:", response.data); // 응답 데이터 출력

    // 다양한 케이스에서 Authorization 헤더 확인
    let authorizationHeader =
      response.headers["Authorization"] || response.headers["authorization"];
    let token;

    if (!authorizationHeader) {
      console.warn(
        "Authorization 헤더가 없습니다. 응답 본문에서 토큰을 확인합니다."
      );
      token = response.data.token; // 응답 본문에서 `token`이 있는지 확인
    } else {
      token = authorizationHeader.split(" ")[1]; // Bearer 토큰 분리
    }

    // 토큰이 없으면 오류 발생
    if (!token) {
      throw new Error("Authorization 헤더를 찾을 수 없습니다.");
    }

    // JWT 토큰을 로컬 스토리지에 저장
    localStorage.setItem("accessToken", token);

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; // 모든 요청에 토큰 추가, 사용자가 로그인에 성공했다는 것을 증명하기 위해
    console.log("로그인 성공, 토큰 저장 완료:", token);

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
  navigate("/users/login");
};
