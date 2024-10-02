import Input from "../components/input/Input";

const Signup = () => {
  return (
    <div>
      <h2>회원가입</h2>
      <form>
        <Input label="이름" type="text" name="name" />
        <Input label="닉네임" type="text" name="nickname" />
        <Input label="이메일" type="email" name="email" />
        <Input label="비밀번호" type="password" name="password" />
        <Input label="비밀번호 확인" type="password" name="confirmPassword" />
        <Input label="전화번호" type="number" name="phone_number" />
        <Input label="주소" type="text" name="address" />
        <button>주소찾기</button>
        <br />
        <button type="submit">가입</button>
      </form>
    </div>
  );
};

export default Signup;
