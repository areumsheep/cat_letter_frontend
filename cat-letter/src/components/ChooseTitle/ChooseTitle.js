import React from "react";
import styled from "styled-components";
import SelectCat from '../../static/Main/cat.png';
import SelectGhost from '../../static/Main/ghost.png';
import SelectPumpkin from '../../static/Main/pumpkin.png';
import SelectSkull from '../../static/Main/skull.png';

const ChooseImgContainer = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 8px;
  // background-color:white;
  // border-radius: 50%;
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
    <>
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
    </>
  );
};

export default ChooseTitle;
