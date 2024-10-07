import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoIcon from "../../Ulogo.svg";
import UserIcon from "../../icons/user.svg";
import LoginIcon from "../../icons/login.svg";

// 임시헤더입니다.
const MainHeader = () => {
  return (
    <Header>
      <Logo>
        <Link to="/">
          <Img src={LogoIcon} alt="logo" />
        </Link>
      </Logo>
      <IconBox>
        <Link to="/login">
          <Icon src={LoginIcon} alt="login-icon" />
        </Link>
        <Link to="user">
          <Icon src={UserIcon} alt="user-icon" />
        </Link>
      </IconBox>
    </Header>
  );
};

export default MainHeader;

// style
const Header = styled.header`
  padding: 1rem 3rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  position: relative;
  z-index: 9999;
`;
const Logo = styled.h1``;
const Img = styled.img``;
const IconBox = styled.div`
  display: flex;
  gap: 1rem; /* 아이콘 간격 추가 */
`;

const Icon = styled.img`
  width: 32px;
  cursor: pointer; /* 마우스 커서를 손가락 모양으로 변경 */
`;
