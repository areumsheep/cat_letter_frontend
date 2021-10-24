import React from "react";
import styled from "styled-components";
import WitchCat from "../../static/Making/cat_witch.gif";

const LetterConjureImgContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const LetterConjureImg = styled.img`
  width: 100%;
`;

const LetterConjure = () => {
  return (
    <>
      <LetterConjureImgContainer>
        <LetterConjureImg src={WitchCat} />
      </LetterConjureImgContainer>
    </>
  );
};

export default LetterConjure;
