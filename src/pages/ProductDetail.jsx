import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 
    {
        Wrapper, 
        Image,
        Date, 
        ImageContainer, 
        InfoContainer,
        Icon,
        IconImage,
        Product,
        ProductInfo,
        ProductName,
        ProductPrice,
        ProductSize,
        ProductCheck,
        ProductCheckButton,
        DeleteButton,
        Count,
        Option,
        QuantityButton,
        OptionBox,
        DeliveryText,
        Button,
        ModalOverlay,
        ModalContent,
        ButtonContainer,
        ModalButton
  
    } from '../styles/ProductDetailStyle';

import HeartIcon from "../icons/heart.png";
import StoreIcon from "../icons/store.png";
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

const ProductDetail = () => {

    const navigate = useNavigate(); 

    const [images, setImages] = useState([image1, image2, image3]); 
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [ModalOpen, setModalOpen] = useState(false); 

    // 사이즈 선택 
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    // 수량 감소 (1개 이하로 내려가지 않도록 제한)
    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
    };

    // 수량 증가 (10개 이상으로 올라가지 않도록 제한)
    const increaseQuantity = () => {
        setQuantity((prevQuantity) => Math.min(10, prevQuantity + 1));
    };

    // 선택한 정보를 삭제하는 함수
    const handleDeleteSelection = () => {
        setSelectedSize('');  
        setQuantity(1);       
    };

     // 장바구니 페이지로 이동하는 함수
    const handleGoToCart = () => {
        navigate('/Buying'); 
    };   


    // 장바구니 추가 클릭 시 모달 열기
    const handleAddToCart = (event) => {
        event.preventDefault();
        console.log('장바구니 추가 버튼 클릭됨');
        setModalOpen(true); 
    };

    // 모달 닫기 (Go Shopping 버튼 클릭 시)
    const handleGoShopping = () => {
        setModalOpen(false); 
    };

    
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };


    return (
        <>
            <Wrapper>
                <ImageContainer>
                    <Image>
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`Slide ${index}`}/>
                                </div>
                            ))}
                        </Slider>
                    </Image>
                    <Date>한정판매</Date>
                </ImageContainer>
                <InfoContainer>
                    <Icon>
                        <IconImage src={StoreIcon} alt="StoreIcon"/>
                        <IconImage src={HeartIcon} alt="HeartIcon"/>
                    </Icon>

                    <Product>
                        <ProductName>세시토 싱글 블레이저</ProductName>
                        <ProductPrice>89000원</ProductPrice>
                        <ProductInfo>
                            <ProductSize>
                                <Option>
                                    <select onChange={handleSizeChange}>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                    </select>
                                </Option>
                                <QuantityButton>
                                    <ProductCheckButton onClick={decreaseQuantity}>➖</ProductCheckButton>
                                    <Count>{quantity}</Count>
                                    <ProductCheckButton onClick={increaseQuantity}>➕</ProductCheckButton>
                                </QuantityButton>
                            </ProductSize>

                            {selectedSize && (
                            <ProductCheck>
                                <p>루즈핏 체크 셔츠</p>
                                <p>34000원</p>
                                <p>사이즈: {selectedSize}</p>
                                <p>수량: {quantity}</p>
                                <DeleteButton onClick={handleDeleteSelection}>✖️</DeleteButton>
                            </ProductCheck>
                            )}
                        </ProductInfo>
                        <DeliveryText>✔︎ 오전 10시까지 결제 완료 시 당일 발송</DeliveryText>
                        <DeliveryText>✔︎ 제주도 및 도시산간 지역은 추가 배송비 3000원</DeliveryText>
                    </Product>
                    <OptionBox>
                        <Button onClick={handleAddToCart}>장바구니 추가</Button>
                        <Button>결제 바로가기</Button>
                    </OptionBox>
                </InfoContainer> 
            </Wrapper>

            {ModalOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <p>장바구니에 추가되었습니다.</p>
                        <ButtonContainer>
                            <ModalButton onClick={handleGoShopping}>쇼핑 계속하기</ModalButton>
                            <ModalButton onClick={handleGoToCart}>장바구니로 가기</ModalButton>
                        </ButtonContainer>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>

    );
};

export default ProductDetail;