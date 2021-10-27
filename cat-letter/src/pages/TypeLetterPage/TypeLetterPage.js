import React, { useState } from "react";
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
  const [isActive, setIsActive] = useState(false);
  const changeInput = (value) => {
    if (value !== "") setIsActive(true);
    else setIsActive(false);
  };
  return (
    <Wrapper>
      <ContentWrapper>
        <TitleText detailText={"표지는 앞에 고른 사진으로 보내질 예정이에요."}>
          짧은 마음을 전할 편지를 작성해보세요!
        </TitleText>
        <LetterWrite changeInput={changeInput} />
        <NextButton
          changePage={"/conjure_letter"}
          alertText="편지 내용을 입력해주세요."
          isActive={isActive}
        >
          편지를 다 작성했어요!
        </NextButton>
      </ContentWrapper>
    </Wrapper>
  );
};

export default TypeLetterPage;
