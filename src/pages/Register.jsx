import React, { useState } from "react";
import axios from "axios";

import { slangList } from "../utils/slangWords";

// style
import {
  BtnBox,
  ThumbNailImg,
  ThumbNailImgBox,
  ThumbNailImgText,
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
  RegisterInfo,
  Select,
  Warpper,
  InfoText,
  InfoTextScript,
  Container,
} from "../styles/userProfileStyle/userRegisterStyle";
import { UniBtn } from "../components/button/UniBtn";
import { ErrorMessage } from "../components/error/ErrorMessage";
import { UserTitle } from "../components/userProfile/UserTitle";

const Register = () => {
  const [formData, setFormData] = useState({
    ///////////////// 백앤드랑 용어통일//////////////////
    name: "",
    price: "",
    category: "",
    size: "",
    amount: "",
    date: "",
    script: "",
  });
  const [validImages, setValidImages] = useState([]);
  const [imgError, setImgError] = useState("");
  const [thumbNailImg, setThumbNailImg] = useState(null);
  // const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [slangError, setSlangError] = useState({});
  const [notifyMsg, setNotifyMsg] = useState("");
  ///////////// itemId 저장을 위한 상태 ///////////////////
  const [itemId, setItemId] = useState(null);

  // 여러장이미지
  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    const newValidImages = [];

    setImgError("");

    files.forEach((file) => {
      // 파일형식 유효성검사
      if (!allowedTypes.includes(file.type)) {
        setImgError(
          "jpg, jpeg, png 형식의 이미지 파일만 업로드할 수 있습니다."
        );
      }
      // 파일용량(1MB) 유효성검사
      else if (file.size > 1 * 1024 * 1024) {
        setImgError("이미지 파일 크기는 1MB를 초과할 수 없습니다.");
      } else {
        newValidImages.push(file);
      }
    });

    setValidImages(newValidImages);

    // 대표이미지 = 첫번째이미지
    setThumbNailImg(URL.createObjectURL(newValidImages[0]));
    // setSelectedImageIndex(0);
  };

  // const handleImageClick = (index) => {
  //   setSelectedImageIndex(index);
  //   setThumbNailImg(URL.createObjectURL(validImages[index]));
  // };

  // 비속어 유효성검사
  const containSlang = (input) => {
    return slangList.some((word) => input.includes(word));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // 비속어 유효성검사
    if (containSlang(value)) {
      setSlangError((prev) => ({
        ...prev,
        [id]: "비속어를 포함할 수 없습니다.",
      }));
    } else {
      setSlangError((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  // 등록버튼클릭 >> 데이터 POST
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isSlangValid = Object.values(slangError).every(
      (error) => error === ""
    );

    if (isSlangValid) {
      console.log("상품 정보:", formData);
      console.log("이미지 목록:", validImages);
      console.log("대표이미지:", validImages[0]);

      setNotifyMsg("물품등록에 성공하였습니다!");
    } else {
      const errorInputs = [
        { id: "name", error: slangError.name },
        { id: "script", error: slangError.script },
      ];
      const firstErrorInput = errorInputs.find((input) => input.error);
      if (firstErrorInput) {
        document.getElementById(firstErrorInput.id).focus();
      }
      setNotifyMsg("잘못 입력된 정보가 존재합니다.");
    }

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
    //   setNotifyMsg("물품등록에 성공하였습니다!");
    // } catch (error) {
    //   console.error("등록오류:", error.message);
    //   setNotifyMsg("물품등록에 실패하였습니다.");
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
    //   setNotifyMsg("이미지 업로드에 성공하였습니다!");
    // } catch (error) {
    //   console.error("이미지 업로드 오류:", error);
    //   return;
    // }

    // 3. 대표이미지 데이터
    //   if (thumbNailImg) {
    //     const foremostImageFormData = new FormData();
    //     foremostImageFormData.append("thumbnail", thumbNailImg);

    //     try {
    //       await axios.post(`/items/${itemId}/thumbnail`, foremostImageFormData, {
    //         headers: {
    //           "Content-Type": "multipart/form-data",
    //         },
    //       });
    //       setNotifyMsg("대표 이미지 업로드에 성공하였습니다!");
    //     } catch (error) {
    //       console.error("대표 이미지 업로드 오류:", error);
    //       setNotifyMsg("대표 이미지 업로드에 실패하였습니다.");
    //     }
    //   }
  };

  // 엔터키 동작
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const inputs = document.querySelectorAll(
        'input[type="text"], input[type="number"], input[type="date"], textarea, select'
      );
      const currentInput = e.target;
      const index = Array.prototype.indexOf.call(inputs, currentInput);

      if (index >= 0 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  };

  // 현재날짜
  const today = new Date().toISOString().split("T")[0];

  return (
    <Warpper>
      <UserTitle>판매할 물품 등록하기</UserTitle>
      <Container onSubmit={handleSubmit}>
        <BtnBox>
          {notifyMsg && <ErrorMessage>{notifyMsg}</ErrorMessage>}
          <UniBtn type="submit">물품등록하기</UniBtn>
        </BtnBox>
        <RegisterInfo>
          <ThumbNailImgBox>
            {thumbNailImg ? (
              <ThumbNailImg src={thumbNailImg} alt="대표이미지" />
            ) : (
              <ImgBox>상품이미지를 등록해주세요.</ImgBox>
            )}
            <ThumbNailImgText>대표이미지입니다.</ThumbNailImgText>
          </ThumbNailImgBox>
          <ItemInfoBox>
            <ItemInfo>
              <InfoLabel>상품이미지</InfoLabel>
              <InfoInput
                type="file"
                id="img"
                multiple
                onChange={handleImagesChange}
                required
              />
              {validImages.length > 0 && (
                <ItemImagesBox>
                  {/* 이미지 여러개 중 가장 첫번째 이미지파일이 대표이미지 */}
                  {validImages.map((file, idx) => (
                    <ItemImage
                      key={idx}
                      src={URL.createObjectURL(file)}
                      alt={`이미지-${idx + 1}`}
                      // onClick={() => handleImageClick(idx)}
                      // $isselected={idx === selectedImageIndex}
                      isthumbnail={idx === 0}
                    />
                  ))}
                </ItemImagesBox>
              )}
            </ItemInfo>
            {imgError && <ErrorMessage>{imgError}</ErrorMessage>}
            <ItemInfo>
              <InfoText>
                <InfoLabel>상품명</InfoLabel>
                <InfoInput
                  type="text"
                  id="name"
                  placeholder="상품명을 입력하세요"
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  required
                />
              </InfoText>
              {slangError.name && (
                <ErrorMessage>{slangError.name}</ErrorMessage>
              )}
            </ItemInfo>
            <ItemInfo>
              <InfoLabel>가격</InfoLabel>
              <InfoInput
                type="number"
                id="price"
                placeholder="990원 이상부터 판매가능"
                min="990"
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
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
                onKeyDown={handleKeyDown}
                required
              >
                {/* 카테고리는 받아온 데이터로 분류할 예정 */}
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
                onKeyDown={handleKeyDown}
                required
              >
                {/* 사이즈는 받아온 데이터로 분류할 예정 */}
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
                onKeyDown={handleKeyDown}
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
                onKeyDown={handleKeyDown}
                required
              />
            </ItemInfo>
            <ItemInfoScript>
              <InfoTextScript>
                <InfoLabel>상품설명</InfoLabel>
                <InfoInputScript
                  as="textarea"
                  id="script"
                  placeholder="최소 10자이상 작성하세요."
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  required
                />
              </InfoTextScript>
              {slangError.script && (
                <ErrorMessage>{slangError.script}</ErrorMessage>
              )}
            </ItemInfoScript>
          </ItemInfoBox>
        </RegisterInfo>
      </Container>
    </Warpper>
  );
};

export default Register;
