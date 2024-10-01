// 이메일 유효성 검사 정규 표현식
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const isValidEmail = (email) => {
  return emailRegex.test(email);
};

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

export const isValidPassword = (password) => {
  return passwordRegex.test(password);
};

//test 메서드는 true, false를 반환
