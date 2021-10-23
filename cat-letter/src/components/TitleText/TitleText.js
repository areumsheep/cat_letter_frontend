import React from "react";
import styled from "styled-components";
import LetterLine from "../../static/Typing/letter_line.png";

const DetailText = styled.p`
  font-size: 15px;
  font-weight: 300;
  letter-spacing: -0.5px;
`;
const MainText = styled.h3`
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const LetterText = styled.textarea`
  background-image: url(${LetterLine});
  width: 375px;
  height: 173px;
  font-family: "Gowun Batang", serif;
  font-size: 16px;
  border: 0;
  outline: 0;
  line-height: 22px;
`;

const TitleText = (props) => {
  return (
    <>
      <DetailText>{props.detailText}</DetailText>
      <MainText>{props.children}</MainText>
      <LetterText>foo bar</LetterText>
    </>
  );
};

export default TitleText;
