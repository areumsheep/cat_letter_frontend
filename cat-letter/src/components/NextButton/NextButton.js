import React from "react";
import styled from "styled-components";

const Button = styled.div`
  background-color: #C4C4C4;
  width: 90%;
  height: 10vh;
  color: white;
  line-height: 10vh;
  margin:0 auto;
  border-radius: 30px;
  bottom: 18px;
  left: 0;
  right: 0;
  position: absolute;
`;
const NextButton = (props) => {
  return (
    <Button>
        {props.children}
    </Button>
  );
};

export default NextButton;