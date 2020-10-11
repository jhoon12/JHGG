import React from "react";
import Champdata from "../ChanpJson/champJson.json";
import Spell from "../SpellJson/spell.json";
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
  let arr = [];
  for (const champKey in Champdata.data) {
    arr.push(Champdata.data[champKey].key);
  }
  return arr;
};
const findChampIndex = (matchData) => {
  const findChamp = matchData.participants.map((ele, index) => {
    return FindChampKey().find((e) => parseInt(e) === ele.championId);
  });
  return findChamp;
};
const FindChampName = (champId) => {
  let arr = [];
  let key = [];
  for (const champKey in Champdata.data) {
    key.push(Champdata.data[champKey]);
  }
  for (let id of champId) {
    key.forEach((e) => {
      if (e.key === id) {
        arr.push(e.name);
      }
    });
  }
  return arr;
};
const getSpeel = (matchData) =>{
  let spell1Arr =[];
  let spell2Arr = [];
  let obj = {}
  for(let spell of matchData){
    for(let spellKeyData in Spell.data){
      if(Spell.data[spellKeyData].key === spell.spell1Id){
        spell1Arr.push(Spell.data[spellKeyData].id)
      }
      if(Spell.data[spellKeyData].key === spell.spell2Id){
        spell1Arr.push(Spell.data[spellKeyData].id);
      }
    }
  }
  const spellArr = spell1Arr.concat(spell2Arr);
  return(spellArr);
}//20개 배열 반환, 0~9번은 1번스펠 10-19번은 2번스펠

const PvPListBox = ({ match, winData }) => {
  return (
    <S.PvPListBox>
      {match.map((matchData, index) => {
        const winningData = winData(matchData);
        console.log(matchData);
        matchData.champId = findChampIndex(matchData);
        matchData.champ =FindChampName(matchData.champId);
        console.log(getSpeel(matchData.participants))
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
                <S.champImg src={`https://opgg-static.akamaized.net/images/lol/champion/${(matchData.champ[matchData.summonerIndex]).replace(/ /gi, "")}.png?image=q_auto,w_46&v=1601445791`}/>
                <S.SummonerSpell>
                  {/* <S.spell src={`https://opgg-static.akamaized.net/images/lol/spell/${}.png?image=q_auto&v=1601445791`}/> */}
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
