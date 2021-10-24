import React from "react";
import styled from "styled-components";

const DetailText = styled.p`
  font-size: 15px;
  font-weight: 300;
  letter-spacing: -0.5px;
`;
const MainText = styled.h3`
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const TitleText = (props) => {
  return (
    <>
      <DetailText>{props.detailText}</DetailText>
      <MainText>{props.children}</MainText>
    </>
  );
};

export default TitleText;
