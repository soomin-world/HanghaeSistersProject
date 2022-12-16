import styled from "styled-components";

const Form = () => {
  const onSubmitHandler = () => {};

  return (
    <STForm onSubmit={onSubmitHandler}>
      <STTitle>
        <STLabel>제목</STLabel>
        <STInput type="text" />
      </STTitle>
      <STCategory>
        <STCLabel>수술부위</STCLabel>
        <STSelect>
          <option value="" defaultValue>
            카테고리를 선택해주세요
          </option>
          <option value="eye">눈성형</option>
          <option value="nose">코성형</option>
          <option value="chin">턱성형</option>
          <option value="liptsuction">지방흡입</option>
        </STSelect>
      </STCategory>
      <STImage>
        <STImageLabel>전</STImageLabel>
        <input type="file" />
        <STImageLabel>후</STImageLabel>
        <input type="file" />
      </STImage>
      <STContent>
        <STTextarea type="text" />
      </STContent>
      <STPrice>
        <STPriceLabel>시술 비용</STPriceLabel>
        <input style={{ fontSize: "bold" }} />
        <STPriceLabel> 원</STPriceLabel>
      </STPrice>
      <STDoctor>
        <STInfoLabel>병원이름</STInfoLabel>
        <input type="text"></input>
        <STInfoLabel>원장님 성함</STInfoLabel>
        <input type="text"></input>
      </STDoctor>
      <STBDIV>
        <STButton>완료</STButton>
      </STBDIV>
    </STForm>
  );
};

const STForm = styled.form`
  margin: 15% 0% 0% 15%;
  width: 60%;
  border: 1px solid black;
  border-radius: 25px;
  background-color: rgb(255, 255, 255);
  padding: 50px 50px 30px 40px;
`;
const STTitle = styled.div`
  width: 800px;
  height: 50px;
  margin: 10px 0px 30px 10px;
`;

const STLabel = styled.label`
  font-size: 30px;
  margin-right: 20px;
  font-weight: bold;
`;

const STInput = styled.input`
  width: 80%;
  height: 30px;
`;

const STCategory = styled.div`
  width: 60%;
  height: 30px;
  margin-bottom: 20px;
`;

const STCLabel = styled.label`
  margin-right: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const STSelect = styled.select``;

const STImage = styled.div`
  margin-bottom: 20px;
`;

const STImageLabel = styled.label`
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const STContent = styled.div`
  width: 100%;
  height: 500px;
`;

const STTextarea = styled.textarea`
  width: 100%;
  height: 500px;
  font-size: 15px;
`;

const STPrice = styled.div`
  height: 30px;
  margin: 30px 0px 15px 0px;
`;

const STPriceLabel = styled.label`
  margin: 0px 10px 0px 10px;
  font-size: 20px;
  font-weight: bold;
`;

const STDoctor = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const STInfoLabel = styled.label`
  margin: 0px 10px 0px 10px;
  font-size: 20px;
  font-weight: bold;
`;

const STButton = styled.button`
  width: 50px;
  height: 30px;
`;

const STBDIV = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;
export default Form;
