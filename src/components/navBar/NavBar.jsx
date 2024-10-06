import React, { useEffect, useState } from "react";
import * as S from "../../styles/NavBarStyle";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuery, QueryClient } from "@tanstack/react-query";
// import { useCookies } from "react-cookie";
import logout from "../../utils/icons/logout_icon.png";
import { Link } from "react-router-dom";
// import { getCookie } from "./../../api/cookies";

const Navbar = () => {
  // const [cookies, setCookie, removeCookie] = useCookies(["ACCESS_TOKEN"]);
  const navigate = useNavigate();

  const queryClient = new QueryClient();

  useEffect(() => {
    // const accessToken = getCookie("ACCESS_TOKEN");
  }, []);

  // const removeAllAccessTokenCookies = () => {
  //   const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  //   cookies.filter((cookie) => cookie.startsWith("ACCESS_TOKEN")).map((cookie) => removeCookie(cookie.split("=")[0]));
  //   localStorage.removeItem("name");
  //   localStorage.removeItem("REFRESH_TOKEN");
  //   localStorage.removeItem("usertype");
  // };
  const logoutHandler = () => {
    // removeAllAccessTokenCookies();
    navigate("/");
  };

  // navigate 이동 함수
  const navigateGuestMain = () => {
    navigate("/guest/main");
  };
  const navigateMap = () => {
    navigate("/guest/company");
  };
  const navigateMyPage = () => {
    navigate("/guest/mypage");
  };
  const navigateDashBoard = () => {
    navigate("/admin/dashboard");
  };
  const navigateApproveList = () => {
    navigate("/admin/approvelist");
  };
  return (
    <>
      <S.StNavBar>
        <S.StNavbarContainer>
          <Link to={"/change_pw/guest"}>
            <S.StLogOut>{localStorage.getItem("name")}</S.StLogOut>
          </Link>
          <S.StNameDes>님 반갑습니다</S.StNameDes>

          <S.StLogOutContainer>
            <Link to={"/"}>
              <S.StLogOut onClick={logoutHandler}>LOGOUT</S.StLogOut>
              <S.StLogOutImg src={logout} alt="logoutImg" onClick={logoutHandler}></S.StLogOutImg>
            </Link>
          </S.StLogOutContainer>
        </S.StNavbarContainer>
      </S.StNavBar>
    </>
  );
};

export default Navbar;
