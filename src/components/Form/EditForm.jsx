import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { __upDatePost } from "../../redux/modules/postSlice";
import styled from "styled-components";

const EditForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { state } = useLocation();

  const [inputs, setInputs] = useState({
    title: state.title,
    category: state.category,
    imageBefore: state.imageBefore,
    imageAfter: state.imageAfter,
    content: state.content,
    price: state.price,
    hospitalAdress: state.hospitalAdress,
    doctor: state.doctor,
  });

  const {
    title,
    category,
    imageBefore,
    imageAfter,
    content,
    price,
    hospitalAdress,
    doctor,
  } = inputs;

  const onChnage = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const updateHandler = () => {
    if (title.trim() === "" || content.trim() === "" || category === "") {
      alert("내용과 제목을 입력해주세요");
      return;
    }
    const upDateContent = {
      title: title,
      category: category,
      imageBefore: imageBefore,
      imageAfter: imageAfter,
      content: content,
      price: price,
      hospitalAdress: hospitalAdress,
      doctor: doctor,
    };
    console.log("잘 넘어갔나?", upDateContent);
    dispatch(__upDatePost(upDateContent));
    navigate(`/detail/:${state.postId}`, { state: upDateContent });
  };

  return (
    <STForm onSubmit={updateHandler}>
      <STTitle>
        <STLabel>제목</STLabel>
        <STInput type="text" name="title" value={title} onChange={onChnage} />
      </STTitle>
      <STCategory>
        <STCLabel>수술부위</STCLabel>
        <STSelect name="category" onChange={onChnage}>
          <option name="category" value="">
            카테고리를 선택해주세요
          </option>
          <option name="category" value="눈성형">
            눈성형
          </option>
          <option name="category" value="코성형">
            코성형
          </option>
          <option name="category" value="턱성형">
            턱성형
          </option>
          <option name="category" value="지방흡입">
            지방흡입
          </option>
        </STSelect>
      </STCategory>

      <STImage>
        <STImageLabel>전</STImageLabel>
        <input
          type="url"
          name="imageBefore"
          value={imageBefore}
          onChange={onChnage}
        />
        <STImageLabel>후</STImageLabel>
        <input
          type="url"
          name="imageAfter"
          value={imageAfter}
          onChange={onChnage}
        />
      </STImage>
      <STContent>
        <STTextarea
          type="text"
          name="content"
          value={content}
          onChange={onChnage}
        />
      </STContent>
      <STPrice>
        <STPriceLabel>시술 비용</STPriceLabel>
        <input type="text" name="price" value={price} onChange={onChnage} />
        <STPriceLabel> 원</STPriceLabel>
      </STPrice>
      <STDoctor>
        <STInfoLabel>병원이름</STInfoLabel>
        <input
          type="text"
          name="hospitalAdress"
          value={hospitalAdress}
          onChange={onChnage}
        ></input>
        <STInfoLabel>원장님 성함</STInfoLabel>
        <input
          type="text"
          name="doctor"
          value={doctor}
          onChange={onChnage}
        ></input>
      </STDoctor>
      <STBDIV>
        <STButton type="submit">수정완료</STButton>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          이전으로
        </button>
      </STBDIV>
    </STForm>
  );
};
const STForm = styled.form`
  margin: 2% 0% 5% 15%;
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
export default EditForm;
