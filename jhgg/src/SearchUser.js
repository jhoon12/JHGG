import React, { useEffect, useState } from "react";
import BaseKey from "./API";
import axios from "axios";
import { Route } from "react-router-dom";
import * as S from "./Style/SearchUserStyle";
import Main, { NavItem, GameKinds, Menu, HeaderGG } from "./Main";
const SearchUser = (props) => {
  const [userData, setUserData] = useState(null);
  const [inputName, SetInputName] = useState("");
  const [userLeagueData, setUserLeagueData] = useState(null);
  const [userTierFree, setUserTierFree] = useState(null);
  const [usertierSolo, setUserTierSolo] = useState(null);
  const [tier, setTier] = useState(null);
  const [soloRank, SetSoloRank] = useState(null);
  const [freeRank, SetFreeRank] = useState(null);

  const ChangeInput = (e) => {
    SetInputName(e.target.value);
  };
  const GoToTotal = () => {
    if (inputName === "") {
      alert("소환사를 입력하세요");
      return;
    }
    window.location.replace(`/search/${inputName}`);
  };
  const enterkey = (e) => {
    const ENTER_KEY_CODE = 13;
    if (e.keyCode === ENTER_KEY_CODE) {
      GoToTotal();
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `/lol/summoner/v4/summoners/by-name/${props.match.params.userName}`,
          {
            headers: {
              "X-Riot-Token": BaseKey,
            },
          }
        );
        setUserData(data);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `/lol/league/v4/entries/by-summoner/${userData.id}`,
          {
            headers: {
              "X-Riot-Token": BaseKey,
            },
          }
        );
        const ReArab = (index) => {
          switch (
            res.data[index].rank //기준이 자랭
          ) {
            case "I":
              return 1;
            case "II":
              return 2;
            case "III":
              return 3;
            case "IV":
              return 4;
          }
        };
        setUserLeagueData(res); //리그데이터저장
        setTier(res.data[0].tier.toLowerCase()); //티어소문자변경
        setUserTierFree(ReArab(0)); //티어아라비아로변경
        setUserTierSolo(ReArab(1));
        SetSoloRank(res.data[1]); //솔랭데이터저장
        SetFreeRank(res.data[0]); //자랭데이터저장
      } catch (err) {
        console.log(err);
      }
    })();
  }, [userData]);
  useEffect(() => {
    (async () => {
      try {
        console.log(userData.accountId);
        const res = await axios.get(
          `/kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${userData.accountId}`,
          {
            headers: {
              "X-Riot-Token": BaseKey,
            },
          }
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [userData]);

  return (
    <>
      <HeaderGG>
        <S.SearchBox>
          <S.country>KR</S.country>
          <S.Search
            placeholder="소환사명, 소환사명, ..."
            onChange={ChangeInput}
            value={inputName}
            onKeyDown={enterkey}
          ></S.Search>
          <S.SearchBtn
            onClick={() => {
              GoToTotal();
            }}
          >
            .GG
          </S.SearchBtn>
        </S.SearchBox>
      </HeaderGG>
      <S.MainViewBox>
        <S.ProfileBox>
          {userData && tier && (
            <S.ImgBackGround
              src={`https://opgg-static.akamaized.net/images/borders2/${tier}.png`}
            >
              <S.profileImg
                src={`http://ddragon.leagueoflegends.com/cdn/10.19.1/img/profileicon/${userData.profileIconId}.png`}
              />
            </S.ImgBackGround>
          )}
          <S.InfoBox>
            <S.UserName>{props.match.params.userName}</S.UserName>
            <S.toolBox>
              <S.reload
                onClick={() => {
                  window.location.replace(
                    `/search/${props.match.params.userName}`
                  );
                }}
              >
                전적 갱신
              </S.reload>
              <S.howMuchTime
                href={`http://ifi.gg/summoner/${props.match.params.userName}`}
              >
                롤 몇 시간 했는지 궁금해?
                <S.howMuchImg src="https://opgg-static.akamaized.net/images/img-nopgg-banner@2x.png" />
              </S.howMuchTime>
            </S.toolBox>
          </S.InfoBox>
        </S.ProfileBox>
        <S.line />
        <S.MainContainer>
          {userLeagueData && soloRank && freeRank && (
            <S.RankInfoBox>
              <S.soloRankBox>
                <S.SoloRankImg
                  src={`https://opgg-static.akamaized.net/images/medals/${userLeagueData.data[1].tier}_${usertierSolo}.png?image=q_auto&v=1`}
                />
                <S.SolorRankInfo>
                  <S.RankType>솔로랭크</S.RankType>
                  <S.soloTier>
                    {soloRank.tier} {usertierSolo}
                  </S.soloTier>
                  <S.LPBox>
                    <S.LP>{`${soloRank.leaguePoints} LP `} </S.LP>
                    <div> {`/  ${soloRank.wins}승 `}</div>
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
                  src={`https://opgg-static.akamaized.net/images/medals/${userLeagueData.data[0].tier}_${usertierSolo}.png?image=q_auto&v=1`}
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
          <S.PvPListBox>asd</S.PvPListBox>
        </S.MainContainer>
      </S.MainViewBox>
    </>
  );
};
export default SearchUser;
{
  /* <img
src={`https://opgg-static.akamaized.net/images/medals/${userLeagueData.data[0].tier}_${userTier}.png?image=q_auto&v=1`}
/> */
}
