import React from "react";
import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin:0;
        padding:0;
    }
`;

export const head = styled.div`
  background-color: #5383e8;
  display: flex;

  > div:nth-child(2) {
    color: white;
  }
`;

export const smallTitle = styled.div`
  padding: 5px 20px;
  font-size: 25px;
  font-weight: bolder;
  color: white;
  letter-spacing: -1px;
`;

export const SelectGame = styled.div`
  flex: 1;
  background-color: #232f46;
  display: flex;
  div {
    flex: 1;
  }
`;

export const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;

  &:hover {
  }
`;
