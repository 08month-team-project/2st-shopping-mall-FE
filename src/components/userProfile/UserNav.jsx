import React from "react";

import {
  Nav,
  Ul,
  Li,
  StyledNavLink,
} from "../../styles/userProfileStyle/userNavStyle";

const UserNav = () => {
  return (
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
          <StyledNavLink to="/user/selling">판매등록된 물품</StyledNavLink>
        </Li>
        <Li>
          {/* <StyledNavLink to="/user/buying">구매한 물품</StyledNavLink> */}
        </Li>
      </Ul>
    </Nav>
  );
};

export default UserNav;
