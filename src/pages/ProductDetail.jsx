import React, {useState} from 'react';
import 
    {
        Wrapper, 
        Name, 
        Image,
        Date, 
        ImageContainer, 
        InfoContainer,
        Icon,
        IconImage,
        Product,
        ProductName,
        ProductPrice,
        ProductSize,
        OptionBox,
        DeliveryText,
        Button,
    } from '../styles/ProductDetailStyle';

import HeartIcon from "../icons/heart.png";
import StoreIcon from "../icons/store.png";

const ProductDetail = () => {
    return (
        <>
            <Name>닉네임</Name>
            <Wrapper>
                <ImageContainer>
                    <Image>
                        이미지
                    </Image>
                    <Date>판매가능날짜</Date>
                </ImageContainer>
                <InfoContainer>
                    <Icon>
                        <IconImage src={StoreIcon} alt="StoreIcon"/>
                        <IconImage src={HeartIcon} alt="HeartIcon"/>
                    </Icon>
                    <Product>
                        <ProductName>루즈핏 체크 셔츠</ProductName>
                        <ProductPrice>34000원</ProductPrice>
                        <ProductSize>사이즈 선택</ProductSize>
                        <DeliveryText>✔︎ 오전 10시까지 결제 완료 시 당일 발송</DeliveryText>
                        <DeliveryText>✔︎ 제주도 및 도시산간 지역은 추가 배송비 3000원</DeliveryText>
                    </Product>
                    <OptionBox>
                        <Button>쇼핑백 담기</Button>
                        <Button>바로 결제</Button>
                    </OptionBox>
                </InfoContainer> 
            </Wrapper>
        </>

    );
};

export default ProductDetail;