import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getItemImageById, getItemById } from "../api/api";
import {
  Wrapper,
  Image,
  Name,
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
  ModalCloseContent,
  ModalCloseWord,
  ButtonContainer,
  ModalButton,
  ModalCloseButton,
} from "../styles/ProductDetailStyle";

import HeartIcon from "../icons/heart.png";
import StoreIcon from "../icons/store.png";


const ProductDetail = () => {
  const { item_id } = useParams();
  const [itemImages, setItemImages] = useState([]);
  const [itemData, setItemData] = useState("");
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [ModalOpen, setModalOpen] = useState(false);
  const [ModalType, setModalType] = useState(""); 
  const [productInfo, setProductInfo] = useState(null); // 상품 정보를 상태로 추가


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
    setSelectedSize("");
    setQuantity(1);
  };

  // 장바구니 추가 클릭 시 모달 열기
  const handleAddToCart = (event) => {
    event.preventDefault();

    if (!selectedSize || quantity <= 0) {

      setModalType("warning");
      setModalOpen(true);
    } else {
      const info = {
        itemName: itemData.item_name,
        itemPrice: itemData.item_price,
        itemSize: selectedSize,
        itemQuantity: quantity,
        itemImage: itemImages[0]?.imageUrl,
      };
      
      setProductInfo(info); 
      setModalType("added");
      setModalOpen(true);
    }
  };



  
  const closeModal = () => {
    setModalOpen(false); 
  };

  //장바구니 페이지로 이동
  const handleGoToCart = () => {
    navigate("/Basket", { state: { product: productInfo } });
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



  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await getItemImageById(item_id);
        const response2 = await getItemById(item_id);
        console.log(response);
        console.log(response2);
        setItemImages(response.itemImageResponses); // API로부터 이미지 데이터 설정
        setItemData(response2);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages(); // item_id가 있을 때만 API 호출
  }, [item_id]);

  return (
    <>
      <Wrapper>
        <ImageContainer>
          <Image>
          <Slider {...settings}>
              {itemImages.map((image) => (
                <div key={image.imageUrlId}>
                  <img src={`${image.imageUrl}`} alt={`${image.imageUrlId}`} />
                </div>
              ))}
            </Slider>
          </Image>
          <Date>한정판매</Date>
        </ImageContainer>
        <InfoContainer>
            <Name>{itemData.seller_nickname}</Name>
            <Icon>
                <IconImage src={StoreIcon} alt="StoreIcon" />
                <IconImage src={HeartIcon} alt="HeartIcon" />
            </Icon>

            <Product>
                <ProductName>{itemData.item_name}</ProductName>
                <ProductPrice>{itemData.item_price}원</ProductPrice>
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
                  <p>{itemData.item_name}</p>
                  <p>{itemData.item_price}</p>
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
            <Button onClick={handleAddToCart}>장바구니에 담기</Button>
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

      {ModalOpen && ModalType === "added" && (
        <ModalOverlay>
          <ModalContent>
            <p>장바구니에 추가되었습니다</p>
            <ButtonContainer>
              <ModalButton onClick={closeModal}>쇼핑 계속하기</ModalButton>
              <ModalButton 
                onClick={() => {
                  closeModal();
                  handleGoToCart(); // 장바구니로 이동
                }}>장바구니로 가기</ModalButton>
            </ButtonContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default ProductDetail;
