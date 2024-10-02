import React from "react";
import styled from "styled-components";
import {
  Container,
  Title,
  ItemBox,
  Item,
  Warpper,
  DelBtn,
} from "../styles/userSellingStyle";

const Selling = () => {
  return (
    <>
      <header
        style={{
          width: "100%",
          height: "10vh",
          backgroundColor: "darkblue",
          position: "fixed",
          top: "0",
          zIndex: "999",
        }}
      />
      <Warpper>
        <Container>
          <Title>판매중인 물품</Title>
          <ItemBox>
            <Item>
              <DelBtn>X</DelBtn>
            </Item>
            <Item>
              <DelBtn>X</DelBtn>
            </Item>
            <Item>
              <DelBtn>X</DelBtn>
            </Item>
            <Item>
              <DelBtn>X</DelBtn>
            </Item>
            <Item>
              <DelBtn>X</DelBtn>
            </Item>
          </ItemBox>
        </Container>
        <Container>
          <Title>판매완료된 물품</Title>
          <ItemBox>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </ItemBox>
        </Container>
      </Warpper>
    </>
  );
};

export default Selling;
