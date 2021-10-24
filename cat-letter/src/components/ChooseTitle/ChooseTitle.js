import React, { useState } from "react";
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
    const [pictureState, setPictureState] = useState(0);
    const onChange = (number) => {
        setPictureState(number);
    }
    const getImage = (number) => {
        switch (number) {
            case 0:
                return SelectCat
            case 1:
                return SelectGhost
            case 2:
                return SelectPumpkin
            case 3:
                return SelectSkull
            default:
                return SelectCat
        }
    }
    return (
        <>
            <ChooseImgWrppaer>
                <ChooseImgContainer>
                    <TitleImg src={SelectCat} onClick={() => onChange(0)} />
                </ChooseImgContainer>
                <ChooseImgContainer>
                    <TitleImg src={SelectGhost} onClick={() => onChange(1)} />
                </ChooseImgContainer>
                <ChooseImgContainer>
                    <TitleImg src={SelectPumpkin} onClick={() => onChange(2)} />
                </ChooseImgContainer>
                <ChooseImgContainer>
                    <TitleImg src={SelectSkull} onClick={() => onChange(3)} />
                </ChooseImgContainer>
            </ChooseImgWrppaer>

            <ResultImgContainer>
                <TitleImg src={getImage(pictureState)} />
            </ResultImgContainer>
        </>
    );
};

export default ChooseTitle;
