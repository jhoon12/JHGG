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
const getSpeel = (matchData) => {
  let spell1Arr = [];
  let spell2Arr = [];
  let spellArr = [];
  for (let spell of matchData) {
    for (let spellKeyData in Spell.data) {
      if (Spell.data[spellKeyData].key === spell.spell1Id) {
        spell1Arr.push(Spell.data[spellKeyData].id);
      }
      if (Spell.data[spellKeyData].key === spell.spell2Id) {
        spell2Arr.push(Spell.data[spellKeyData].id);
      }
    }
    spellArr.push(spell1Arr.concat(spell2Arr));
    spell1Arr = [];
    spell2Arr = [];
  }
  return spellArr;
}; //20개 배열 반환, 0~9번은 1번스펠 10-19번은 2번스펠
const findMultiKill = (mymatch) => {
  if (mymatch.pentaKills) {
    return "펜타킬";
  } else if (mymatch.quadraKills) {
    return "쿼드라킬";
  } else if (mymatch.tripleKills) {
    return "트리플킬";
  } else if (mymatch.doubleKills) {
    return "더블킬";
  }
};
const ExisfindtMultiKill = (mymatch) => {
  if (findMultiKill(mymatch)) {
    return <S.countMultiKill>{findMultiKill(mymatch)}</S.countMultiKill>;
  }
};

const PvPListBox = ({ match, winData }) => {
  return (
    <S.PvPListBox>
      {match.map((matchData, index) => {
        const winningData = winData(matchData);
        matchData.champId = findChampIndex(matchData);
        matchData.champ = FindChampName(matchData.champId);
        matchData.spell = getSpeel(matchData.participants);
        const mymatch = matchData.participants[matchData.summonerIndex].stats;
        console.log(mymatch);

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
                <S.champImg
                  src={`https://opgg-static.akamaized.net/images/lol/champion/${matchData.champ[
                    matchData.summonerIndex
                  ].replace(/ /gi, "")}.png?image=q_auto,w_46&v=1601445791`}
                />
                <S.SummonerSpell>
                  <S.spell
                    src={`https://opgg-static.akamaized.net/images/lol/spell/${
                      matchData.spell[matchData.summonerIndex][0]
                    }.png?image=q_auto&v=1601445791`}
                  />
                  <S.spell
                    src={`https://opgg-static.akamaized.net/images/lol/spell/${
                      matchData.spell[matchData.summonerIndex][1]
                    }.png?image=q_auto&v=1601445791`}
                  />
                </S.SummonerSpell>
                <S.Runes>
                  <S.Rune
                    src={`https://opgg-static.akamaized.net/images/lol/perk/${mymatch.perk0}.png?image=q_auto,w_22&v=1601445791`}
                  />
                  <S.Rune
                    src={`https://opgg-static.akamaized.net/images/lol/perkStyle/${mymatch.perkSubStyle}.png?image=q_auto,w_22&v=1601445791`}
                  />
                </S.Runes>
              </S.InfoImgBox>
            </S.champInfoBox>
            <S.KDABox>
              <S.KDA>
                <S.Kill>{mymatch.kills} /</S.Kill>
                <S.Death>{mymatch.deaths}</S.Death>
                <S.Assist>/ {mymatch.assists}</S.Assist>
              </S.KDA>
              <S.grade>
                {((mymatch.kills + mymatch.assists) / mymatch.deaths).toFixed(
                  2
                )}
                <S.gradeText>평점</S.gradeText>
              </S.grade>
              {ExisfindtMultiKill(mymatch)}
            </S.KDABox>
            <S.LevelData>
              {/* <S.levelDataBox>asdas</S.levelDataBox> */}
              <S.level>레벨{mymatch.champLevel}</S.level>
            </S.LevelData>
            <S.Items>
              <S.itemList>
                <S.itemlist1>
                  <S.item src={ mymatch.item0 ? `http://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${mymatch.item0}.png`:`https://opgg-static.akamaized.net/images/pattern/opacity.1.png`}></S.item>
                  <S.item src={mymatch.item1 ?`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${mymatch.item1}.png`:`https://opgg-static.akamaized.net/images/pattern/opacity.1.png`}></S.item> 
                  <S.item src={mymatch.item2 ?`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${mymatch.item2}.png`:`https://opgg-static.akamaized.net/images/pattern/opacity.1.png`}></S.item> 
                  <S.item src={mymatch.item6 ?`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${mymatch.item6}.png`:`https://opgg-static.akamaized.net/images/pattern/opacity.1.png`}></S.item>   
                </S.itemlist1>
                <S.itemList2>
                <S.item src={mymatch.item3 ?`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${mymatch.item3}.png`:`https://opgg-static.akamaized.net/images/pattern/opacity.1.png`}></S.item>
                <S.item src={mymatch.item4 ?`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${mymatch.item4}.png`:`https://opgg-static.akamaized.net/images/pattern/opacity.1.png`}></S.item>
                <S.item src={mymatch.item5 ?`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/item/${mymatch.item5}.png`:`https://opgg-static.akamaized.net/images/pattern/opacity.1.png`}></S.item>
                <S.item src={mymatch.win ? `https://opgg-static.akamaized.net/css3/sprite/images/icon-buildblue-p.png` : `https://opgg-static.akamaized.net/css3/sprite/images/icon-buildred-p.png`}></S.item>
                </S.itemList2>
              </S.itemList>
            </S.Items>
          </S.matchInfoBox>
        );
      })}
    </S.PvPListBox>
  );
};
export default PvPListBox;
