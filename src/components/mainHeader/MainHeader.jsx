import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../api/api";

import { Header, Logo, Img, IconBox, Icon } from "../../styles/MainHeaderStyle";

import LogoIcon from "../../Ulogo.svg";
import UserIcon from "../../icons/user.svg";
import LoginIcon from "../../icons/login.svg";
import LogoutIcon from "../../icons/logout.svg";

// 임시헤더입니다.
const MainHeader = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 로그인 상태 로컬 관리
  const navigate = useNavigate();

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 로그인 상태 확인
  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // 로컬 스토리지에서 토큰 가져오기
    if (token) {
      setIsAuthenticated(true); // 토큰이 있으면 로그인 상태로 설정
    }
  }, []);

  return (
    <Header>
      <Logo>
        <Link to="/">
          <Img src={LogoIcon} alt="logo" />
        </Link>
      </Logo>
      <IconBox>
        {isAuthenticated ? (
          // 로그아웃 아이콘 (로그인 상태일 때 표시)
          <Icon
            src={LogoutIcon}
            alt="logout-icon"
            onClick={() => {
              logout(navigate); // 로그아웃 함수 호출
              setIsAuthenticated(false); // 로그아웃 후 로그인 상태 false로 설정
            }}
          />
        ) : (
          // 로그인 아이콘 (로그인되지 않은 상태일 때만 표시)
          <Link to="/login">
            <Icon src={LoginIcon} alt="login-icon" />
          </Link>
        )}
        <Link to="/user">
          <Icon src={UserIcon} alt="user-icon" />
        </Link>
      </IconBox>
    </Header>
  );
};

export default MainHeader;
