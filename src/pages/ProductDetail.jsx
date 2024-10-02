import React, {useState} from 'react';
import {Wrapper, Name, Section, Image, Text, ImageContainer, InfoContainer, Button} from '../styles/ProductDetailStyle';

const ProductDetail = () => {
    return (
        <Wrapper>
            <Name>닉네임</Name>
            <Section>
                <ImageContainer>
                    <Image>image</Image>
                    <Text>판매가능날짜</Text>
                </ImageContainer>
                <InfoContainer>
                    <h2>title</h2>
                    <p>price</p>
                    <p>description</p>
                    <p>사이즈 선택</p>
                </InfoContainer>
            </Section>
            <Button>장바구니 추가</Button>
        </Wrapper>

    );
};

export default ProductDetail;