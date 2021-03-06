import styled, { css, createGlobalStyle } from "styled-components";

export const MainViewBox = styled.div`
  flex: 1;
  margin: 0 auto;
  width: 1000px;

  min-height: 100vh;
`;
export const line = styled.div`
  border-bottom: 1px solid #c6cbcb;
  width: 155%;
  margin-left: calc(-50vw + 50%);
  padding: 0;
  margin-bottom: 8px;
 `;
export const MainContainer = styled.div`
  display: flex;
`;
export const PvPListBox = styled.div`
  flex: 1;
  margin-left: 15px;
`;
export const Container = styled.div`
  background-color: #eaeaea;
`;
export const matchInfoBox = styled.div`
  flex: 1;
  height: 96px;
  border-radius: 3px;
  margin-top: 8px;
  ${(props) => {
    if (props.winData === 1) {
      return `background-color:#a3cfec;`;
    } else if (props.winData === 0) {
      return `background-color:#e2b6b3;`;
    }
  }}
  /* ${(props) => {
    return props.winData
      ? "background-color:#a3cfec;"
      : `background-color:#e2b6b3`;
  }} */
  display:flex;
`;

export const GameTime = styled.div`
  height: 100%;
  width: 12%;
  padding-top: 10px;
`;
export const GameType = styled.div`
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  font-size: 11px;
  color: #555;
  line-height: 16px;
`;
export const bar = styled.div`
  background: #cea7a7;
  width: 27px;
  margin: 5px auto;
  height: 2px;

`;
export const win = styled.div`
  ${(props) => {
    if (props.winData === 1) {
      return `color:#a3cfec;`;
    } else if (props.winData === 0) {
      return `color:#e2b6b3;`;
    }
  }}
`;
