import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookies";
import { queryAllByAltText } from "@testing-library/react";

const instance = axios.create({
  baseURL: "http://ec2-3-36-69-202.ap-northeast-2.compute.amazonaws.com:8080",
  // baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// instance.interceptors.request.use(
//   (config) => {
//     const accessToken = getCookie("ACCESS_TOKEN");
//     config.headers["Authorization"] = `Bearer ${accessToken}`;
//     return config;
//   },

//   (error) => {
//     return Promise.reject(error);
//   },
// );

// instance.interceptors.response.use(
//   (response) => {
//     if (response.headers.authorization) {
//       const re_access_token = response.headers.authorization.split(" ")[1];
//       removeCookie("ACCESS_TOKEN");
//       setCookie("ACCESS_TOKEN", re_access_token);
//     } else {
//     }
//     return response;
//   },

//   (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 400) {
//     }

//     if (error.response.status === 401 && !originalRequest._retry) {
//       try {
//         originalRequest._retry = true;

//         const refresh_token = localStorage.getItem("REFRESH_TOKEN");
//         originalRequest.headers["RefreshToken"] = `Bearer ${refresh_token}`;
//         return instance(originalRequest);
//       } catch (error) {
//         localStorage.removeItem("REFRESH_TOKEN");
//         localStorage.removeItem("name");
//         setCookie("ACCESS_TOKEN", "", -1);
//         window.location.href = "/login";
//         return Promise.reject(error);
//       }
//     }

//     return Promise.reject(error);
//   },
// );
export default instance;
