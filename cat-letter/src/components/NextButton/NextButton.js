import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  background-color: #c4c4c4;
  width: 90%;
  height: 10vh;
  color: white;
  line-height: 10vh;
  margin: 0 auto;
  border-radius: 30px;
  bottom: 18px;
  left: 0;
  right: 0;
  position: absolute;
`;

const NextButton = (props) => {
  const history = useHistory();
  const onChagePage = () => {
    history.push(props.changePage);
  };

  return <Button onClick={onChagePage}>{props.children}</Button>;
};

export default NextButton;
