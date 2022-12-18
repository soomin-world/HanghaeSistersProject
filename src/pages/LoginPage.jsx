import { useState } from "react";
import styled from "styled-components";

// Lottie style
import Lottie from "lottie-react";
import { loginLottie } from "../assets/lottie";

// 컴포넌트
import Login from "../components/Login";




const LoginPage = () => {
  // const is_signIn = [signin, setSignin] = useState(true)

  return (
    <Contain>
			<ImgBox>
        {/* <Lottie animationData ={loginLottie}/> */}
      </ImgBox>
      <LoginBox>
        {/* {is_signIn? <Login /> : <SignUp/>} */}
        <Login />
      </LoginBox>
    </Contain>
  )
}

const Contain = styled.div`
  width: 100vw;
	height: 100vh;
	background-color: #ffec99;
	/* background-color: #fff3bf; */
	/* background-color: #e5dbff; */
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImgBox = styled.div`
  width:100%;
  height: 100%;
  border: 1px solid red;
`
const LoginBox = styled.div`
  width:100%;
`
export default LoginPage;
