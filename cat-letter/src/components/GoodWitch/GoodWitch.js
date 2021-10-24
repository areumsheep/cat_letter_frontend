import React from "react";
import styled from "styled-components";
import ThankYouWitch from "../../static/Result/good_witch.png";

const GoodWitchImgContainer = styled.div`
  width: 20%;
  margin: 0 auto;
`;
const GoodWitchImg = styled.img`
  width: 100%;
`;

const GoodWitch = () => {
  return (
    <>
      <GoodWitchImgContainer>
        <GoodWitchImg src={ThankYouWitch} />
      </GoodWitchImgContainer>
    </>
  );
};

export default GoodWitch;
