import React from "react";
import styled from "styled-components";
import ChooseTitle from "../../components/ChooseTitle/ChooseTitle";
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
  padding-top: 50px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
`;

const ChooseTitlePage = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <ChooseTitle></ChooseTitle>
                <NextButton changePage={"/type_letter"} isActive={true}>표지를 다 골랐어요!</NextButton>
            </ContentWrapper>
        </Wrapper>
    );
};

export default ChooseTitlePage;
