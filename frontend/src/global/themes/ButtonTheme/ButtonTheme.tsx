import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { changeMode } from "redux/Mode/slice";

export default () => {
  const dispatch = useDispatch();
  const {mode} = useSelector((state: any) => state.modeReducer)
  const handleChangeMode = () => {
    if(mode == "dark"){
      dispatch(changeMode({ mode: "light"}));
    } else{
      dispatch(changeMode({ mode: "dark"}));
    }
  };

  const ButtonTheme = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-center: center;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 20px;
    padding: 10px;
    font-size: 25px;
    border-radius: 15px;
    border: none;
    background: ${({ theme }) =>
      mode == "dark"
        ? theme.buttons.buttonsFlow.bgDark
        : theme.buttons.buttonsFlow.bgClear};
    box-shadow: ${({ theme }) => theme.buttons.shadow};
    color: ${({ theme }) => theme.buttons.letter};
    &:hover {
      background: ${({ theme }) =>
        mode == "dark"
          ? theme.buttons.buttonsFlow.hoverDark
          : theme.buttons.buttonsFlow.hoverClear};
    }
  `;
  return (
    <ButtonTheme onClick={handleChangeMode}>
      {mode == "dark" ? <BsFillMoonFill /> : <BsSunFill />}
    </ButtonTheme>
  );
};
