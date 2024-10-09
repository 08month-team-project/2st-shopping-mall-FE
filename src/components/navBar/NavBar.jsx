import React, { useEffect, useState } from "react";
import * as S from "../../styles/NavBarStyle";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuery, QueryClient } from "@tanstack/react-query";
// import { useCookies } from "react-cookie";
import logout from "../../utils/icons/logout_icon.png";
import { Link } from "react-router-dom";
// import { getCookie } from "./../../api/cookies";
import { getCategories } from "../../api/api";
import LogoIcon from "../../icons/Ulogo.svg";
import UserIcon from "../../icons/user.svg";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  // const [cookies, setCookie, removeCookie] = useCookies(["ACCESS_TOKEN"]);
  const navigate = useNavigate();

  const queryClient = new QueryClient();

  useEffect(() => {
    // const accessToken = getCookie("ACCESS_TOKEN");
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        console.log(data);
        setCategories(data.categoryList);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/home?category_id=${categoryId}`); // URL 파라미터로 category_id를 전달
  };
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
  const navigateLoginPage = () => {
    navigate("/login");
  };

  return (
    <>
      <S.StNavBar>
        <S.StNavbarContainer>
          <S.StLogoDiv>
            <Link to="/">
              <img src={LogoIcon} alt="logo" />
            </Link>
          </S.StLogoDiv>
          <S.StCategoriesContainer>
            <S.StCategoriesUl>
              {categories.map((category) => (
                <S.StCategoriesLi key={category.id}>{category.categoryName}</S.StCategoriesLi>
              ))}
            </S.StCategoriesUl>
          </S.StCategoriesContainer>
          <S.StUserSection>
            <Link to="user">
              <S.StNameDes>
                <S.StLogOut>{localStorage.getItem("name")}</S.StLogOut>
                <S.Icon src={UserIcon} alt="user-icon" />
              </S.StNameDes>
            </Link>
            <Link to={"/"}>
              <S.StLogOutContainer>
                <S.StLogOut onClick={logoutHandler}>로그아웃</S.StLogOut>
                <S.StLogOutImg src={logout} alt="logoutImg" onClick={logoutHandler}></S.StLogOutImg>
              </S.StLogOutContainer>
            </Link>
          </S.StUserSection>
        </S.StNavbarContainer>
      </S.StNavBar>
    </>
  );
};

export default Navbar;
