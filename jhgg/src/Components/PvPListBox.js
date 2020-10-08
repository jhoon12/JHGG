import React from "react";
import Champdata from "../ChanpJson/champJson.json";
import * as S from "../Style/PvPListBoxStyle";
const GetGameType = ({ gameMode }) => {
  switch (gameMode) {
    case "ARAM":
      return "무작위 총력전";
    case "CLASSIC":
      return "소환사의 협곡 5:5";
    case "URF":
      return "우르프";
    case "ONEFORALL":
      return "단일모드";
  }
};
const FindChampKey = () => {
  let arr =[];
  for (const champKey in Champdata.data) {
    arr.push(Champdata.data[champKey].key);
  }
  return(arr)
};
FindChampKey();

const findIndex = (matchData)=>{
  const UserChampIndex = findIndex((ele, index)=>{
    return(matchData.participants[index].championId === FindChampKey()[index]);
  })
  console.log(UserChampIndex);
}

const PvPListBox = ({ match, winData }) => {
  return (
    <S.PvPListBox>
      {match.map((matchData, index) => {
        findIndex(matchData)
        const winningData = winData(matchData);
        return (
          <S.matchInfoBox key={index} winData={winningData}>
            <S.GameTime>
              <S.GameType>{GetGameType(matchData)}</S.GameType>
              <S.bar winData={winningData} />
              <S.win winData={winningData}>
                {winningData ? "승리" : "패배"}
              </S.win>
              <S.time>{`${Math.floor((matchData.gameDuration % 3600) / 60)}분 ${
                (matchData.gameDuration % 3600) % 60
              }초`}</S.time>
            </S.GameTime>
            <S.champInfoBox>
              <S.InfoImgBox>
                <S.champImg />
                <S.SummonerSpell>
                  <S.spell />
                  <S.spell />
                </S.SummonerSpell>
                <S.Runes>
                  <S.Rune />
                  <S.Rune />
                </S.Runes>
              </S.InfoImgBox>
            </S.champInfoBox>
          </S.matchInfoBox>
        );
      })}
    </S.PvPListBox>
  );
};
export default PvPListBox;
