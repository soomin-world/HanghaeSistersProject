import styled from "styled-components";

function Header() {
  return (
    <STNavbar>
      <STInner className="inner">
        <a href="/" className="logo">
          <STImage
            src="https://cdn-icons-png.flaticon.com/512/1720/1720950.png"
            alr="logo"
            width="50px"
            height="50px"
          />
        </a>
        <STSub className="subMenu">
          <STUl className="menu">
            <li>
              <STli href="/logIn">로그인</STli>
              {/* login 값이 false이면 로그아웃 출력 되게 구현해야함 */}
            </li>
            <li>
              <STli href="logIn">회원가입</STli>
            </li>
            <li>
              <STli href="/postingPage">글 작성</STli>
            </li>
          </STUl>
        </STSub>
      </STInner>
    </STNavbar>
  );
}

const STNavbar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
  background-color: #dcd0e6da;
`;

const STInner = styled.div`
  width: 100%;
  height: 70px;
  position: relative;
`;

const STUl = styled.ul`
  list-style: none;
  display: flex;
`;

const STImage = styled.img`
  position: absolute;
  top: 20;
  bottom: 15;
  left: 0;
  margin: auto;
`;
const STSub = styled.div`
  position: absolute;
  top: 10;
  right: 17px;
  display: flex;
`;

const STli = styled.a`
  padding: 13px 16px;
  display: block;
  font-size: 13px;
  color: #5a5959;
  text-decoration: none;
  &:hover {
    background-color: #9179c9da;
    color: #ffffff;
  }
`;

export default Header;
