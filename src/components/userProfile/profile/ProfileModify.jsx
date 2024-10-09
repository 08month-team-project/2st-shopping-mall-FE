import React from "react";
import {
  BottomBox,
  Dot,
  ExplainBox,
  ExplainText,
  InfoBox,
  InfoBoxImg,
  InfoBoxImgText,
  InfoBoxIntro,
  InfoTextIntro,
  Input,
  InputAddress,
  InputIntro,
  Label,
  LabelBox,
  ModifyBox,
  ModifyWarpper,
  ModiInfoBox,
  PreviewImg,
  RadioInput,
  RadioLabel,
} from "../../../styles/userProfileStyle/profileStyle";
import { ErrorMessage } from "../../error/ErrorMessage";
import { InfoText } from "../../../styles/userProfileStyle/itemRegisterStyle";
import { UniBtn } from "../../button/UniBtn";
import { handleKeyDown } from "../../../utils/keyDownHandler";

const ProfileModify = ({
  previewImg,
  handleModify,
  handleImgChange,
  imgError,
  inputValues,
  changeInputValue,
  slangError,
  phoneError,
  emailError,
  handleGenderChange,
  isValidModify,
}) => {
  return (
    <ModifyWarpper>
      <ModifyBox onSubmit={handleModify}>
        <ModiInfoBox>
          <InfoBoxImg>
            {previewImg && <PreviewImg src={previewImg} alt="미리보기" />}
            <InfoBoxImgText>
              <Label>프로필사진</Label>
              <Input id="img" type="file" onChange={handleImgChange} />
            </InfoBoxImgText>
            {imgError && <ErrorMessage>{imgError}</ErrorMessage>}
          </InfoBoxImg>
          <InfoBox>
            <InfoText>
              <LabelBox>
                <Label htmlFor="name">이름</Label>
                <Dot />
              </LabelBox>
              <Input
                id="name"
                type="text"
                value={inputValues.name}
                onChange={changeInputValue}
                onKeyDown={handleKeyDown}
                required
              />
            </InfoText>
            {slangError.name && <ErrorMessage>{slangError.name}</ErrorMessage>}
          </InfoBox>
          <InfoBox>
            <InfoText>
              <LabelBox>
                <Label htmlFor="nickName">닉네임</Label>
                <Dot />
              </LabelBox>
              <Input
                id="nickName"
                type="text"
                value={inputValues.nickName}
                onChange={changeInputValue}
                onKeyDown={handleKeyDown}
                required
              />
            </InfoText>
            {slangError.nickName && (
              <ErrorMessage>{slangError.nickName}</ErrorMessage>
            )}
          </InfoBox>
          <InfoBox>
            <InfoText>
              <LabelBox>
                <Label htmlFor="phone_number">전화번호</Label>
                <Dot />
              </LabelBox>
              <Input
                id="phone_number"
                type="tel"
                value={inputValues.phone_number}
                onChange={changeInputValue}
                onKeyDown={handleKeyDown}
              />
            </InfoText>
            {phoneError && <ErrorMessage>{phoneError}</ErrorMessage>}
          </InfoBox>
          <InfoBox>
            <InfoText>
              <LabelBox>
                <Label htmlFor="email">이메일</Label>
                <Dot />
              </LabelBox>
              <Input
                id="email"
                type="text"
                value={inputValues.email}
                onChange={changeInputValue}
                onKeyDown={handleKeyDown}
              />
            </InfoText>
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          </InfoBox>
          <InfoBox>
            <InfoText>
              <LabelBox>
                <Label>성별</Label>
                <Dot />
              </LabelBox>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  value="남성"
                  checked={inputValues.gender === "남성"}
                  onChange={handleGenderChange}
                />
                남성
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  value="여성"
                  checked={inputValues.gender === "여성"}
                  onChange={handleGenderChange}
                />
                여성
              </RadioLabel>
            </InfoText>
          </InfoBox>
          <InfoBox>
            <InfoText>
              <Label htmlFor="address">주소</Label>
              <InputAddress
                id="address"
                type="text"
                value={inputValues.address}
                onChange={changeInputValue}
                onKeyDown={handleKeyDown}
              />
            </InfoText>
          </InfoBox>
          <InfoBoxIntro>
            <InfoTextIntro>
              <Label htmlFor="comment">소개</Label>
              <InputIntro
                id="comment"
                as="textarea"
                value={inputValues.comment}
                onChange={changeInputValue}
                onKeyDown={handleKeyDown}
              />
            </InfoTextIntro>
            {slangError.comment && (
              <ErrorMessage>{slangError.comment}</ErrorMessage>
            )}
          </InfoBoxIntro>
        </ModiInfoBox>
        <ExplainBox>
          <Dot />
          <ExplainText>표시된 항목은 필수입력 항목입니다.</ExplainText>
        </ExplainBox>
        <BottomBox>
          <ErrorMessage>{isValidModify}</ErrorMessage>
          <UniBtn type="submit">프로필수정</UniBtn>
        </BottomBox>
      </ModifyBox>
    </ModifyWarpper>
  );
};

export default ProfileModify;
