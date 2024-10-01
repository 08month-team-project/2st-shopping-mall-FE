// 이메일 유효성 검사 정규 표현식
const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const isValidEmail = (email) => {
  return pattern.test(email);
};

//test 메서드는 true, false를 반환
