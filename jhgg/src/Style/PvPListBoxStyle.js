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
  width: 112px;
  height: 96px;
  padding-top: 20px;
`;
export const InfoImgBox = styled.div`
  display: flex;
  height: 100%;
  width: 300px;
`;
export const champImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
`;
export const SummonerSpell = styled.div`
  width: 24px;
  height: 40%;
  margin-right: 5 px;
  margin-left: 5px;
`;
export const spell = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  &:nth-child(2) {
    margin-top: 3px;
  }
`;
export const Runes = styled.div`
  width: 24px;
  height: 40%;
  margin-right: 10px;
`;
export const Rune = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  border-radius: 50%;
  &:nth-child(1) {
    background-color: black;
  }
`;

export const KDABox = styled.div`
  height: 100%;
  width: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const KDA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin: 5px;
  height: 25px;
`;
export const Kill = styled.div`
  font-weight: bold;
  color: #555e5e;
  font-size: 15px;
`;
export const Death = styled.div`
  font-weight: bold;
  color: #c6443e;
  font-size: 15px;
  margin: 0 5px;
`;
export const Assist = styled.div`
  font-weight: bold;
  color: #555e5e;
  font-size: 15px;
`;
export const grade = styled.div`
  font-size: 12px;
  display: flex;
  font-weight: bold;
`;

export const gradeText = styled.div`
  color: #555e5e;
  margin-left: 5px;
`;

export const LevelData = styled.div`
  height: 100%;
  width: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const level = styled.div`
  font-size: 11px;
  text-align: center;
  line-height: 18px;
  color: #555e5e;
`;
export const countMultiKill = styled.div`
  background: #ee5a52;
  border: 1px solid #c6443e;
  border-radius: 15px;
  padding: 2px 5px;
  line-height: 1;
  font-size: 10px;
  color: white;
  margin-top: 5px;
`;
export const Items = styled.div`
  height: 100%;
  width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
export const itemList = styled.div`
  height: 60px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const item = styled.img`
  height: 20px;
  width: 20px;

  margin: 1px;
`;
export const itemlist1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const itemList2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ChampionListBox = styled.div`
  flex: 1;
  background-color: white;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
`;
export const Team1 = styled.div`
  width: 50%;
  ${(props) => {
    if (props.winData === 1) {
      return `background-color:#a3cfec;`;
    } else if (props.winData === 0) {
      return `background-color:#e2b6b3;`;
    }
  }}
`;
export const Team2 = styled.div`
  width: 50%;
  ${(props) => {
    if (props.winData === 1) {
      return `background-color:#a3cfec;`;
    } else if (props.winData === 0) {
      return `background-color:#e2b6b3;`;
    }
  }}
`;
export const summoner = styled.div`
  display: flex;
  width: 80px;
  height: 18px;
`;
export const ChampsImg = styled.img`
  width: 16px;
  height: 16px;
`;
export const summonerName = styled.div`
  display: block;
  width: 60px;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  cursor:pointer;
  ${(props)=>(props.myId?'color: #222':'color: #555')
  }
  
`;
