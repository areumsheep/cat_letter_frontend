import React from "react";
import styled from "styled-components";
import TitleText from "../../components/TitleText/TitleText";
import LetterWrite from "../../components/LetterWrite/LetterWrite";
import NextButton from "../../components/NextButton/NextButton";

const Wrapper = styled.div`
  background-color: #f1f3f3;
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 375px;
  height: 100%;
  margin: 0 auto;
  padding-top: 40px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
`;

const TypeLetterPage = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TitleText detailText={"표지는 앞에 고른 사진으로 보내질 예정이에요."}>
          상대에게 보내고 싶은 말을 적어보세요!
        </TitleText>
        <LetterWrite />
        <NextButton changePage={"/type_letter"}>다음으로 넘어간다옹</NextButton>
      </ContentWrapper>
    </Wrapper>
  );
};

export default TypeLetterPage;
