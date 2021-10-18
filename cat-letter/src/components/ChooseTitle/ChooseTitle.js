import React from "react";
import styled from "styled-components";
import SelectCat from '../../static/Main/cat.png';
import SelectGhost from '../../static/Main/ghost.png';
import SelectPumpkin from '../../static/Main/pumpkin.png';
import SelectSkull from '../../static/Main/skull.png';

import NextButton from "../NextButton/NextButton";

const Wrapper = styled.div`
  background-color: #F1F3F3;
  width: 100%;
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  padding-top: 50px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
`;
const ChooseImgContainer = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 8px;
`;
const TitleImg = styled.img`
  width: 100%;
  height: 100%;
`;
const ChooseImgWrppaer = styled.div`
  display: flex;
  justify-content: center;
`;
const ResultImgContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  margin-top: 8vh;
`;

const ChooseTitle = () => {
  return (
    <Wrapper>
      <ChooseImgWrppaer>
        <ChooseImgContainer>
          <TitleImg src={SelectCat} />
        </ChooseImgContainer>
        <ChooseImgContainer>
          <TitleImg src={SelectGhost} />
        </ChooseImgContainer>
        <ChooseImgContainer>
          <TitleImg src={SelectPumpkin} />
        </ChooseImgContainer>
        <ChooseImgContainer>
          <TitleImg src={SelectSkull} />
        </ChooseImgContainer>
      </ChooseImgWrppaer>

      <ResultImgContainer>
        <TitleImg src={SelectCat} />
      </ResultImgContainer>

      <NextButton>
        다음으로 넘어간다옹
      </NextButton>
    </Wrapper>
  );
};

export default ChooseTitle;
