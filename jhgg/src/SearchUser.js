import React, { useEffect, useState, useC, useCallback } from "react";
import BaseKey from "./API";
import axios from "axios";
import { Route } from "react-router-dom";
import * as S from "./Style/SearchUserStyle";
import Main, { NavItem, GameKinds, Menu, HeaderGG } from "./Main";
const SearchUser = (props) => {
  const [userData, setUserData] = useState(null); //유저데이터
  const [inputName, SetInputName] = useState(""); //다른 유저 검색
  const [userLeagueData, setUserLeagueData] = useState(null); //리그데이터
  const [userTierFree, setUserTierFree] = useState(null); //자랭 아라비아
  const [usertierSolo, setUserTierSolo] = useState(null); //솔랭 아라비아
  const [soloRank, SetSoloRank] = useState(null); //솔랭 정보
  const [freeRank, SetFreeRank] = useState(null); //자랭 정보
  const [matches, SetMatches] = useState([]); //전적 정보 아이디
  const [match, SetMatch] = useState([]);//전적 정보 배열
  const ChangeInput = (e) => {
    SetInputName(e.target.value);
  }; //유저 검색창
  const GoToTotal = () => {
    if (inputName === "") {
      alert("소환사를 입력하세요");
      return;
    }
    window.location.replace(`/search/${inputName}`);
  }; //다른 유저 페이지로 이동
  const enterkey = (e) => {
    const ENTER_KEY_CODE = 13;
    if (e.keyCode === ENTER_KEY_CODE) {
      GoToTotal();
    }
  }; //엔터키
  const winData = useCallback(//styledcomponents에서 사용하기 위한 함수(승패색깔)
    (matchData) => {//match배열 map(각각의 게임 정보)
      let type;
      const participantId = match.findIndex((ele,index) => {
        return (
          matchData.participantIdentities[index].player.summonerName ===
          props.match.params.userName
        );
      });//params의 이름과 match배열에 담겨있는 인덱스 찾기
      match.summonerName = matchData.participantIdentities[participantId].player.summonerName;// match 객체 배열에 이름 키 추가
      if (matchData.participantIdentities[participantId].participantId<6) {//만약 그 게임에서 유저가 레드팀이면
        type = 1;
      } else {//블루팀이라면
        type = 0;
      }
      if (matchData.teams[0].win === "Win" && type === 0) {//만약 레드팀이 이겼고, 유저도 레드팀이라면
       
        return 0;
      } else if (matchData.teams[1].win === "Win" && type === 1) {//만약 블루팀이 이겼고, 유저도 블루팀이라면
       
        return 0;
      } else {//패배했다면
        return 1;
      }
    },
    [match]
  );

  const SetRankData = (queueType, data) => {
    if (queueType === "RANKED_SOLO_5x5") {
      SetSoloRank(data[0]);
      SetFreeRank(data[1]);
    } else if (queueType === "RANKED_FLEX_SR") {
      SetSoloRank(data[1]);
      SetFreeRank(data[0]);
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
  }, []); //유저 데이터
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
        setUserTierFree(ReArab(0));
        setUserTierSolo(ReArab(1)); //티어아라비아로변경
        SetRankData(res.data[0].queueType, res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [userData]); //랭크 데이터 가져오기
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `/lol/match/v4/matchlists/by-account/${userData.accountId}?endIndex=10`,
          {
            headers: {
              "X-Riot-Token": BaseKey,
            },
          }
        );
        SetMatches(data.matches);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [userData]); //매치 데이터 가져오기

  useEffect(() => {
    const matchesMap = matches.map(async ({ gameId }) => {
      try {
        const { data } = await axios.get(`/lol/match/v4/matches/${gameId}`, {
          headers: {
            "X-Riot-Token": BaseKey,
          },
        });
        return data;
      } catch (err) {
        console.log(err);
      }
    });

    Promise.all(matchesMap).then((Response) => {
      SetMatch(Response);
    });
  }, [matches]);
  return (
    <S.Container>
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
          {userData && soloRank && (
            <S.ImgBackGround
              src={`https://opgg-static.akamaized.net/images/borders2/${soloRank.tier.toLowerCase()}.png`}
            >
              <S.profileImg
                onError={(e) =>
                  (e.target.src =
                    "https://opgg-static.akamaized.net/images/profile_icons/profileIcon7.jpg?image=q_auto&v=1518361200")
                }
                src={`http://ddragon.leagueoflegends.com/cdn/10.19.1/img/profileicon/${userData.profileIconId}.png`}
              />
            </S.ImgBackGround> //테두리
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
          <S.PvPListBox>
            {match.map((matchData, index) => (
              <S.matchInfoBox          
                key={index}
                winData={winData(matchData)}
              >{console.log(matchData)}</S.matchInfoBox>
            ))}
          </S.PvPListBox>
        </S.MainContainer>
      </S.MainViewBox>
    </S.Container>
  );
};
export default SearchUser;
// 무작위 총력전 
// gameMode: "ARAM"
// 일반
// gameMode: "CLASSIC"
// 솔랭
// gameMode: "CLASSIC"
// 자랭
// gameMode: "CLASSIC"
// 우르프
// gameMode: "URF"
// 단일모드
// gameMode: "ONEFORALL"
// 일반은 소환사의 협곡 5:5로 수정예정