import styled from "styled-components";

function Footer() {
  return (
    <STFooter>
      <div className="inner">
        <div className="backEnd">
          <ul>
            <li>KyuMin</li>
            <li>Sora</li>
            <li>ChumBaek</li>
          </ul>
        </div>
        <div className="frontEnd">
          <ul>
            <li>SoYoung</li>
            <li>JinYoung</li>
            <li>SuMin</li>
          </ul>
        </div>
      </div>
    </STFooter>
  );
}

const STFooter = styled.footer`
  background-color: #d85d9061;
  width: 100%;
  height: 60px;
  padding: 10px;
  margin-top: 100px;
  div {
    display: flex;
    justify-content: space-between;
    ul {
      list-style: none;
      justify-content: center;
      li {
        margin: 10px 0px 10px 10px;
        font-size: 13px;
      }
    }
  }
`;

// 백 , 프론트 나눠서 각각 깃허브 주소 연결시키
export default Footer;
