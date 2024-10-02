import React, { useState } from "react";
import axios from "axios";

// style
import {
  ForemostImg,
  ForemostImgBox,
  ImgBox,
  InfoInput,
  InfoInputScript,
  InfoLabel,
  ItemImage,
  ItemImagesBox,
  ItemInfo,
  ItemInfoBox,
  ItemInfoScript,
  Option,
  RegisterBtn,
  RegisterInfo,
  Select,
  Warpper,
} from "../styles/userRegisterStyle";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    size: "",
    amount: "",
    date: "",
    script: "",
  });
  const [images, setImages] = useState([]);
  const [foremostImg, setForemostImg] = useState(null);
  const [itemId, setItemId] = useState(null); // itemId 저장을 위한 상태
  const [successMsg, setSuccessMsg] = useState("");

  // 여러장이미지
  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // 대표이미지
  const handleForemostImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForemostImg(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // 데이터 POST
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("상품 정보:", formData);
    console.log("이미지 목록:", images);
    console.log("대표이미지:", foremostImg);

    setSuccessMsg("물품등록에 성공하였습니다!");

    // 1. 상품정보 데이터
    // const formDataToSend = new FormData();
    // Object.entries(formData).forEach(([key, value]) => {
    //   formDataToSend.append(key, value);
    // });
    // try {
    //   const response = await axios.post(
    //     "/items/seller/register",
    //     formDataToSend
    //   );
    //   setItemId(response.data.itemId);

    //   console.log("등록결과:", response.data);
    //   setSuccessMsg("물품등록에 성공하였습니다!");
    // } catch (error) {
    //   console.error("등록오류:", error.message);
    //   setSuccessMsg("물품등록에 실패하였습니다.");
    //   return;
    // }

    // 2. 여러장 이미지 데이터
    // const imagesFormData = new FormData();
    // images.forEach((image) => {
    //   imagesFormData.append("images", image);
    // });
    // try {
    //   await axios.post("/items/images/upload", imagesFormData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    //   setSuccessMsg("이미지 업로드에 성공하였습니다!");
    // } catch (error) {
    //   console.error("이미지 업로드 오류:", error);
    //   return;
    // }

    // 3. 대표이미지 데이터
    //   if (foremostImg) {
    //     const foremostImageFormData = new FormData();
    //     foremostImageFormData.append("thumbnail", foremostImg);

    //     try {
    //       await axios.post(`/items/${itemId}/thumbnail`, foremostImageFormData, {
    //         headers: {
    //           "Content-Type": "multipart/form-data",
    //         },
    //       });
    //       setSuccessMsg("대표 이미지 업로드에 성공하였습니다!");
    //     } catch (error) {
    //       console.error("대표 이미지 업로드 오류:", error);
    //       setSuccessMsg("대표 이미지 업로드에 실패하였습니다.");
    //     }
    //   }
  };

  // 현재날짜
  const today = new Date().toISOString().split("T")[0];

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
      <Warpper as="form" onSubmit={handleSubmit}>
        <RegisterBtn type="submit">물품등록하기</RegisterBtn>
        {successMsg && <p style={{ color: "red" }}>{successMsg}</p>}
        <RegisterInfo>
          <ForemostImgBox>
            {foremostImg ? (
              <ForemostImg src={foremostImg} alt="대표이미지" />
            ) : (
              <ImgBox>대표이미지를 등록하세요</ImgBox>
            )}
            <InfoInput
              type="file"
              onChange={handleForemostImgChange}
              required
            />
          </ForemostImgBox>
          <ItemInfoBox>
            <ItemInfo>
              <InfoLabel>이미지</InfoLabel>
              <InfoInput
                type="file"
                id="img"
                multiple
                onChange={handleImagesChange}
              />
              {images.length > 0 && (
                <ItemImagesBox>
                  {images.map((file, idx) => (
                    <ItemImage
                      key={idx}
                      src={URL.createObjectURL(file)}
                      alt={`이미지-${idx + 1}`}
                    />
                  ))}
                </ItemImagesBox>
              )}
            </ItemInfo>
            <ItemInfo>
              <InfoLabel>상품명</InfoLabel>
              <InfoInput
                type="text"
                id="name"
                placeholder="상품명을 입력하세요"
                onChange={handleInputChange}
                required
              />
            </ItemInfo>
            <ItemInfo>
              <InfoLabel>가격</InfoLabel>
              <InfoInput
                type="number"
                id="price"
                placeholder="990원 이상부터 판매가능"
                min="990"
                onChange={handleInputChange}
                required
              />
              원
            </ItemInfo>
            <ItemInfo>
              <InfoLabel>카테고리</InfoLabel>
              <Select
                name="category"
                id="category"
                onChange={handleInputChange}
                required
              >
                <Option value="">--카테고리--</Option>
                <Option value="male">남성의류</Option>
                <Option value="female">여성의류</Option>
                <Option value="child">아동의류</Option>
              </Select>
            </ItemInfo>
            <ItemInfo>
              <InfoLabel>사이즈</InfoLabel>
              <Select
                name="size"
                id="size"
                onChange={handleInputChange}
                required
              >
                <Option value="">--사이즈--</Option>
                <Option value="small">S</Option>
                <Option value="medium">M</Option>
                <Option value="large">L</Option>
              </Select>
            </ItemInfo>
            <ItemInfo>
              <InfoLabel>판매수량</InfoLabel>
              <InfoInput
                type="number"
                id="amount"
                placeholder="1개 이상부터 등록가능"
                min="1"
                onChange={handleInputChange}
                required
              />
            </ItemInfo>
            <ItemInfo>
              <InfoLabel>판매기간</InfoLabel>
              <InfoInput
                type="date"
                id="date"
                min={today}
                onChange={handleInputChange}
                required
              />
            </ItemInfo>
            <ItemInfoScript>
              <InfoLabel>상품설명</InfoLabel>
              <InfoInputScript
                as="textarea"
                id="script"
                placeholder="최소 10자이상 작성하세요."
                onChange={handleInputChange}
                required
              />
            </ItemInfoScript>
          </ItemInfoBox>
        </RegisterInfo>
      </Warpper>
    </>
  );
};

export default Register;
