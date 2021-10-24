import React from "react";
import styled from "styled-components";
import TitleText from "../../components/TitleText/TitleText";
import LetterConjure from "../../components/LetterConjure/LetterConjure";
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

const ConjureLetterPage = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TitleText detailText={"뾰로롱~ 마법사가 편지에 마법을 부리고 있어요!"}>
          마법으로 잠긴 편지를 공유해볼까요?
        </TitleText>
        <LetterConjure />
        <NextButton changePage={"/share_letter"}>
          네 좋아요! 공유해볼래요!
        </NextButton>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ConjureLetterPage;
