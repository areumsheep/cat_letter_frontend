import React from "react";
import styled from "styled-components";
import LetterLine from "../../static/Typing/letter_line.png";
import LetterDetail from "../../static/Typing/letter_detail.png";

const LetterText = styled.textarea`
  background-image: url(${LetterLine});
  width: 373px;
  height: 173px;
  font-family: "Gowun Batang", serif;
  font-size: 16px;
  border: 0;
  outline: 0;
  line-height: 22px;
  resize: none;
`;
const LetterDetailImgContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 1px 3px;
`;
const LetterDetailImg = styled.img`
  width: 28%;
`;

const LetterWrite = () => {
  return (
    <>
      <LetterText placeholder={"예시) 안녕 할로윈 잘 보내!"}></LetterText>
      <LetterDetailImgContainer>
        <LetterDetailImg src={LetterDetail} />
      </LetterDetailImgContainer>
    </>
  );
};

export default LetterWrite;
