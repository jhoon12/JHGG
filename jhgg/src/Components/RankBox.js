import React from "react";
import * as S from "../Style/RankBoxStyle";
import ChampName from "../ChanpJson/champJson.json";
const RankBox = ({
  userLeagueData,
  soloRank,
  freeRank,
  usertierSolo,
  userTierFree,
}) => {
  console.log(ChampName);
  return (
    <>
      {userLeagueData && soloRank && freeRank && (
        <S.RankInfoBox>
          <S.soloRankBox>
            <S.SoloRankImg
              src={`https://opgg-static.akamaized.net/images/medals/${soloRank.tier}_${usertierSolo}.png?image=q_auto&v=1`}
            />
            {/* 솔랭 이미지 */}
            <S.SolorRankInfo>
              <S.RankType>솔로랭크</S.RankType>
              <S.soloTier>
                {soloRank.tier} {usertierSolo}
              </S.soloTier>
              <S.LPBox>
                <S.LP>{`${soloRank.leaguePoints} LP `} </S.LP>
                <div> {`/  ${soloRank.wins}승`}</div>
                <div>{` ${soloRank.losses}패`}</div>
              </S.LPBox>
              <div>
                {`승률 ${Math.round(
                  (soloRank.wins / (soloRank.wins + soloRank.losses)) * 100
                )}%`}
              </div>
            </S.SolorRankInfo>
          </S.soloRankBox>
          <S.FreeRankBox>
            <S.SoloRankImg
              src={`https://opgg-static.akamaized.net/images/medals/${freeRank.tier}_${usertierSolo}.png?image=q_auto&v=1`}
            />
            <S.SolorRankInfo>
              <S.RankType>자유 5:5 랭크</S.RankType>
              <S.soloTier>
                {freeRank.tier} {userTierFree}
              </S.soloTier>
              <S.LPBox>
                <S.LP>{`${freeRank.leaguePoints} LP `} </S.LP>
                <div> {`/  ${freeRank.wins}승 `}</div>
                <div>{` ${freeRank.losses}패`}</div>
              </S.LPBox>

              <div>
                {`승률 ${Math.round(
                  (freeRank.wins / (freeRank.wins + freeRank.losses)) * 100
                )}%`}
              </div>
            </S.SolorRankInfo>
          </S.FreeRankBox>
        </S.RankInfoBox>
      )}
    </>
  );
};
export default RankBox;
