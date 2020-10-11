import styled, { css, createGlobalStyle } from "styled-components";

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
  margin-bottom: 8px;
  ${(props) => {
    if (props.winData === 1) {
      return `background-color:#a3cfec;`;
    } else if (props.winData === 0) {
      return `background-color:#e2b6b3;`;
    }
  }}
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
  width: 37px;
  margin: 5px auto;
  height: 2px;
  ${(props) => {
    if (props.winData === 1) {
      return `background-color:#99b9cf;`;
    } else if (props.winData === 0) {
      return `background-color:#cea7a7;`;
    }
  }}
`;
export const win = styled.div`
  ${(props) => {
    if (props.winData === 1) {
      return `color:#1a78ae;`;
    } else if (props.winData === 0) {
      return `color:#c6443e;`;
    }
  }}
  font-weight: bold;
  text-align: center;
  font-size: 11px;
  line-height: 16px;
`;
export const time = styled.div`
  text-align: center;
  font-size: 11px;
  color: #555;
  line-height: 16px;
  padding-top: 8px;
`;
export const champInfoBox = styled.div`
  width: 100px;
  height: 96px;
  padding-top: 20px;
`;
export const InfoImgBox = styled.div` 
  display:flex;
  height:100%;
`
export const champImg = styled.img` 
    width: 46px;
    height: 46px;
    border-radius: 50%;
    overflow: hidden;
`
export const SummonerSpell = styled.div`
  
  width:24px;
  height:40%;
  margin-left:3px;
`
export const spell = styled.img`
width:100%;
height:60%;
display:block;
background-color: black;

`
export const Runes = styled.div`
  width:24px;
  height:40%;`
export const Rune = styled.img`
width:100%;
height:60%;
display:block;
background-color: black;`