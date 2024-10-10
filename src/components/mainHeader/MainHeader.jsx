import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../api/api";
import { Header, Logo, Img, IconBox, Icon } from "../../styles/MainHeaderStyle";
import { UserContext } from "../../hook/context/UserContext";
import LogoIcon from "../../icons/Ulogo.svg";
import UserIcon from "../../icons/user.svg";
import LoginIcon from "../../icons/login.svg";
import LogoutIcon from "../../icons/logout.svg";

// 임시헤더입니다.
const MainHeader = () => {
  const { setUser } = useContext(UserContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 로그인 상태 로컬 관리
  const navigate = useNavigate();

  // localStorage가 변경될 때마다 상태 업데이트
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem("accessToken");
      setIsAuthenticated(!!token);
    };

    // 컴포넌트가 처음 마운트될 때 로컬스토리지 확인
    checkAuthStatus();

    // storage 이벤트 리스너 추가
    window.addEventListener("storage", checkAuthStatus);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("storage", checkAuthStatus);
    };
  }, []);

  return (
    <Header>
      <Logo>
        <Link to="/">
          <Img src={LogoIcon} alt="logo" />
        </Link>
      </Logo>
      <IconBox>
        <Link to="/Basket">장바구니</Link>
        <Link to="/signup">회원가입</Link>
        {isAuthenticated ? (
          // 로그아웃 아이콘 (로그인 상태일 때 표시)
          <Icon
            src={LogoutIcon}
            alt="logout-icon"
            onClick={() => {
              logout(navigate, setUser); // 로그아웃 함수 호출
              setIsAuthenticated(false); // 로그아웃 후 로그인 상태 false로 설정
            }}
          />
        ) : (
          // 로그인 아이콘 (로그인되지 않은 상태일 때만 표시)
          <Link to="/users/login">
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
