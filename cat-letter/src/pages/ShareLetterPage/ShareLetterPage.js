import React from "react";
import styled from "styled-components";
import GoodWitch from "../../components/GoodWitch/GoodWitch";
import TitleText from "../../components/TitleText/TitleText";
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

const ShareLetterPage = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <GoodWitch />
        <TitleText detailText={"따봉 마법사야 고마워!"}>
          만들어진 편지를 공유해봐요.
        </TitleText>
        {/* <LetterWrite /> */}
        <NextButton changePage={"/conjure_letter"}>
          편지를 다 작성했어요!
        </NextButton>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ShareLetterPage;
