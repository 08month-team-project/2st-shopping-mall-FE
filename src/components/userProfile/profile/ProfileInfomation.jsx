import React from "react";

// style
import {
  GenderIcon,
  Icon,
  Image,
  ProfileImg,
  Text,
  TextBox,
  Title,
  UserImg,
  UserInfo,
  UserInfoBox,
} from "../../../styles/userProfileStyle/profileStyle";

// icon
import SmileIcon from "../../../icons/smile.svg";
import PhoneIcon from "../../../icons/phone.svg";
import EmailIcon from "../../../icons/email.svg";
import MaleIcon from "../../../icons/male.svg";
import FemaleIcon from "../../../icons/female.svg";
import AddressIcon from "../../../icons/address.svg";
import PencilIcon from "../../../icons/pencil.svg";

const ProfileInfomation = ({ userInfo }) => {
  return (
    <UserInfoBox>
      <UserImg>
        <ProfileImg>
          <Image src={userInfo.profile_image_url} alt="프로필사진" />
        </ProfileImg>
        <Title>{userInfo.name}님, 환영합니다</Title>
      </UserImg>
      <UserInfo>
        <TextBox>
          <Icon src={SmileIcon} alt="phone-icon" />
          <Text>{userInfo.nickName}</Text>
        </TextBox>
        <TextBox>
          <Icon src={PhoneIcon} alt="phone-icon" />
          <Text>{userInfo.phone_number}</Text>
        </TextBox>
        <TextBox>
          <Icon src={EmailIcon} alt="email-icon" />
          <Text>{userInfo.email}</Text>
        </TextBox>
        <TextBox>
          <GenderIcon
            src={userInfo.gender === "male" ? MaleIcon : FemaleIcon}
          />
          <Text>{userInfo.gender === "male" ? "남성" : "여성"}</Text>
        </TextBox>
        <TextBox>
          <Icon src={AddressIcon} alt="address-icon" />
          <Text>{userInfo.address}</Text>
        </TextBox>
        <TextBox>
          <Icon src={PencilIcon} alt="pencil-icon" />
          <Text>{userInfo.comment}</Text>
        </TextBox>
      </UserInfo>
    </UserInfoBox>
  );
};

export default ProfileInfomation;
