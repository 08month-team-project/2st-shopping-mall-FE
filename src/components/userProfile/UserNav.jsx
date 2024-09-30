import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const UserNav = () => {
  return (
    <>
      <Nav>
        <Ul>
          <Li>
            <StyledNavLink to="/user" end>
              개인정보
            </StyledNavLink>
          </Li>
          <Li>
            <StyledNavLink to="/user/register">물품등록 및 판매</StyledNavLink>
          </Li>
          <Li>
            <StyledNavLink to="/user/selling">판매한 물품</StyledNavLink>
          </Li>
          <Li>
            <StyledNavLink to="/user/buying">구매한 물품</StyledNavLink>
          </Li>
        </Ul>
      </Nav>
    </>
  );
};

export default UserNav;

// style
const Nav = styled.nav`
  width: 20vw;
  height: 100vh;
  padding: 2rem 0 2rem 1rem;
  position: fixed;
  top: 50px;
  right: 0;
  z-index: 98;
  border-left: 1px solid #ccc;
`;
const Ul = styled.ul`
  width: 100%;
`;
const Li = styled.li`
  width: 100%;
  font-size: 14px;
  border-radius: 50px 0 0 50px;
`;

// 이동된 링크 스타일
const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 1rem;
  border-radius: 50px 0 0 50px;
  &.active {
    background-color: #ffdfe0;
    font-weight: 500;
  }
`;
