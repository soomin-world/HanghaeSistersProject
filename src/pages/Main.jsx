import { useSelector } from "react-redux";


const Main = () => {
  const loginUser = useSelector((state)=>state.user.user.username)
  console.log(loginUser)
  return (
    <>
      <h1>여기는메인!!! {loginUser}님 안녕하세요</h1>
    </>
  )
}

export default Main;
