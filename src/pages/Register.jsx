import React from 'react';
import ItemRegister from '../components/userProfile/ItemRegister';

// style
import { Warpper } from '../styles/userProfileStyle/userRegisterStyle';
import { UserTitle } from '../components/userProfile/UserTitle';

const Register = () => {
  return (
    <Warpper>
      <UserTitle>판매할 물품 등록하기</UserTitle>
      <ItemRegister />
    </Warpper>
  );
};

export default Register;
