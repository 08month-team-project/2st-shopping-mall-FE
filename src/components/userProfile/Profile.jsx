import React from "react";
import styled from "styled-components";

const Profile = () => {
  return (
    <Wrapper>
      <UserInfo>
        <Img>img</Img>
        <Name>하수현님, 환영합니다</Name>
        <Text>000-0000-0000</Text>
        <Text>msldml@naver.com</Text>
      </UserInfo>
    </Wrapper>
  );
};

export default Profile;

// style
const Wrapper = styled.div`
  width: 80vw;
  padding-top: 4rem;
  float: left;
`;
const UserInfo = styled.div`
  width: 50vw;
  margin: auto;
  text-align: center;
`;
const Img = styled.div`
  margin: auto;
  width: 100px;
  aspect-ratio: 1 / 1;
  background-color: #458af1;
  color: #fff;
  border-radius: 100%;
  font-size: 3rem;
  text-align: center;
  line-height: 90px;
`;
const Name = styled.h2`
  margin: 2rem 0;
`;
const Text = styled.p`
  margin-bottom: 1rem;
`;
const ModifyBtn = styled.button``;
