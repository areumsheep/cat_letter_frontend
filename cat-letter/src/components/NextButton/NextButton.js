import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  background-color: ${props => props.isActive ? "#ff8b3f" : "#c4c4c4"};
  width: 90%;
  height: 9vh;
  color: white;
  line-height: 9vh;
  margin: 0 auto;
  border-radius: 30px;
  bottom: 18px;
  left: 0;
  right: 0;
  position: absolute;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const NextButton = (props) => {
    const { isActive, changePage, alertText } = props;
    const history = useHistory();
    const onChagePage = () => {
        if (isActive) history.push(changePage);
        else alert(alertText);
    };

    return <Button onClick={onChagePage} isActive={isActive}>{props.children}</Button>;
};

export default NextButton;
