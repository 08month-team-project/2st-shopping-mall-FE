import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
        ProductDescription,
        Button,
        ModalOverlay,
        ModalContent,
        ModalCloseContent,
        ModalCloseWord,
        ButtonContainer,
        ModalButton,
        ModalCloseButton
    } from '../styles/ProductDetailStyle';


import HeartIcon from "../icons/heart.png";
import StoreIcon from "../icons/store.png";
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import { getDetailData, getDetailImage } from '../api/api';




const ProductDetail = () => {
    const [detailData, setDetailData] = useState({
        item_id: "",
        item_name: "",
        item_price: 0,
        description: "",
        size_stock_list: [],
        seller_nickname: ""
    });

    const [imageData, setImageData] = useState([]);
    const [selectedStock, setSelectedStock] = useState(null); // 선택한 사이즈의 재고 정보 상태 추가



const fetchDetail = async () => {
    try {
    const res = await getDetailData();
    console.log(res);
    setDetailData({
        item_id: res.itemId,
        item_name: res.item_name,
        item_price: res.item_price,
        description: res.description,
        size_stock_list: res.size_stock_list,
        seller_nickname: res.seller_nickname
    });
    } catch (error) {
    console.error("상품 정보를 가져오는 도중 문제가 발생했습니다.", error.message);
    }
};

const fetchImage = async () => {
    try {
    const res = await getDetailImage();
    console.log(res);
    setImageData(res.itemImageResponses);
    } catch (error) {
    console.error("상품 이미지를 가져오는 도중 문제가 발생했습니다.", error.message);
    }
};

    // 컴포넌트가 처음 렌더링될 때 데이터 로딩
    useEffect(() => {
        fetchDetail();
        fetchImage();
    }, []);

    const handleSizeChange = (event) => {
        const size = event.target.value;
        setSelectedSize(size);

        // 선택된 사이즈에 해당하는 재고 정보를 찾기
        const stock = detailData.size_stock_list.find(item => item.clothing_size_name === size);
        setSelectedStock(stock); 
    };

const navigate = useNavigate();

const [images, setImages] = useState([image1, image2, image3]); 
const [selectedSize, setSelectedSize] = useState('');
const [quantity, setQuantity] = useState(1);
const [ModalOpen, setModalOpen] = useState(false); 
const [ModalType, setModalType] = useState('');  // 모달 타입 상태 (사이즈/수량 미선택 or 장바구니 추가 완료)


    // 사이즈 선택 
    //const handleSizeChange = (event) => {
    //    setSelectedSize(event.target.value);
    //};

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

// 장바구니 추가 클릭 시 모달 열기
    const handleAddToBasket = (event) => {
        event.preventDefault();
        
        if (!selectedSize || quantity <= 0) {
            // 사이즈 또는 수량이 선택되지 않았을 때 '사이즈와 수량을 선택해주세요' 모달 열기
            setModalType('warning');
            setModalOpen(true);
        } else {
            // 장바구니에 추가될 때 '장바구니에 추가되었습니다' 모달 열기
            setModalType('added');
            setModalOpen(true);
        }
    };


  // 모달 닫기 (X 버튼 클릭 시)
    const closeModal = () => {
        setModalOpen(false); // 모달 닫기
    };

    // 장바구니 페이지로 이동
    const handleGoToBasket = () => {
        navigate('/Basket');
    };

    // 결제 페이지로 이동
    const handleGoToPayment = () => {
        navigate('/Payment');
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
                        {imageData.length > 0 ? (
                            imageData.map((image) => (
                                <img 
                                    key={image.imageUrlId} 
                                    src={`/${image.imageUrl}.jpg`} 
                                    alt={`상품 이미지 ${image.imageUrlId}`} 
                                />
                            ))
                        ) : (
                            <p>이미지가 없습니다.</p>
                        )}
                        </Slider>
                    </Image>
                    <Date>한정판매</Date> 
                </ImageContainer>
                <InfoContainer>
                    <Name>{detailData.seller_nickname}</Name>
                    <Icon>
                        <IconImage src={StoreIcon} alt="StoreIcon"/>
                        <IconImage src={HeartIcon} alt="HeartIcon"/>
                    </Icon>

                    <Product>
                        <ProductName>{detailData.item_name}</ProductName>
                        <ProductPrice>{detailData.item_price}</ProductPrice>
                        <ProductInfo>
                            <ProductSize>
                                <Option>
                                <select onChange={handleSizeChange}>
                                    {detailData.size_stock_list.map((item) => (
                                        <option key={item.clothing_size_id} value={item.clothing_size_name}>
                                            {item.clothing_size_name}
                                        </option>
                                    ))}
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
                                <p>{detailData.item_name}</p>
                                <p>{detailData.item_price}원</p>
                                <p>사이즈: {selectedStock.clothing_size_name}</p>
                                <p>수량: {quantity}</p>
                                <p>재고: {selectedStock.stock}</p> 
                                <DeleteButton onClick={handleDeleteSelection}>✖️</DeleteButton>
                            </ProductCheck>
                            )}
                        </ProductInfo>
                        <ProductDescription>{detailData.description}</ProductDescription>
                        <DeliveryText>✔︎ 오전 10시까지 결제 완료 시 당일 발송</DeliveryText>
                        <DeliveryText>✔︎ 제주도 및 도시산간 지역은 추가 배송비 3000원</DeliveryText>
                    </Product>
                    <OptionBox>
                        <Button onClick={handleAddToBasket}>장바구니에 담기</Button>
                        <Button onClick={handleGoToPayment}>결제 바로가기</Button>
                    </OptionBox>
                </InfoContainer> 
            </Wrapper>

        {ModalOpen && ModalType === "warning" && (
            <ModalOverlay>
            <ModalCloseContent>
                <ModalCloseButton onClick={closeModal}>x</ModalCloseButton>
                <ModalCloseWord>사이즈와 수량을 선택해주세요</ModalCloseWord>
            </ModalCloseContent>
            </ModalOverlay>
        )}

        {ModalOpen && ModalType === 'added' && (
            <ModalOverlay>
                <ModalContent>
                    <p>장바구니에 추가되었습니다</p> 
                    <ButtonContainer>
                        <ModalButton onClick={closeModal}>쇼핑 계속하기</ModalButton>
                        <ModalButton onClick={handleGoToBasket}>장바구니로 가기</ModalButton>
                    </ButtonContainer>
                </ModalContent>
            </ModalOverlay>
        )}
    </>

    );
};

export default ProductDetail;
