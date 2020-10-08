import React from "react";
import { Link } from "react-router-dom";
import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin:0;
        padding:0;
        overflow-x:hidden;
    }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const body = styled.div`
  background-color: #5383e8;
  border-top: 1px solid #4171d6;
  text-align: center;
  flex: 1;
  padding-top: 20px;
`;
export const TitleImg = styled.img`
  width: 20%;
  padding: 15px 0 24px;
  cursor: pointer;
  
`;
export const MainSelectBox = styled.div`
  display: flex;
  width: 30vw;
  margin: 0 auto;
`;
export const Select = styled.input`
  background-color: white;
  border: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  margin: 0 auto;
  font-size: 14px;
  padding: 15px 150px 18px 17px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
export const SelectBtnBox = styled.div`
  background-color: white;
  width: 7vw;
  display: flex;
  border: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  align-items: center;
`;
export const SelectBox = styled.div`
  display: flex;
  margin: 0 auto;
  padding-bottom: 20vw;
  width: 40vw;
`;
export const SelectBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-color: #00afff;
  border: none;
  height: 60%;
  width: 80%;
  color: white;
  font-weight: bold;
`;

export const tail = styled.div`
  color: white;
`;
