import React from "react";
import styled from "styled-components";
import * as S from "../styles/StyleHome";
import Navbar from "../components/navBar/NavBar";

const Home = () => {
  return (
    <S.DivContainer>
      <Navbar />
    </S.DivContainer>
  );
};

export default Home;
