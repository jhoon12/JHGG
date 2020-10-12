import React, { useEffect, useState, useCallback } from "react";
import BaseKey from "../API";
import axios from "axios";
import { Route } from "react-router-dom";
import * as S from "../Style/SearchUserStyle";
import Main from "./Main";
import HeaderGG from "./SearchBox";
import ProfileBox from "./Profile";
import RankBox from "./RankBox";
import PvPListBox from "./PvPListBox";
const SearchUser = (props) => {
  const [userData, setUserData] = useState(null); //유저데이터
  const [userLeagueData, setUserLeagueData] = useState(null); //리그데이터
  const [userTierFree, setUserTierFree] = useState(null); //자랭 아라비아
  const [usertierSolo, setUserTierSolo] = useState(null); //솔랭 아라비아
  const [soloRank, SetSoloRank] = useState(null); //솔랭 정보
  const [freeRank, SetFreeRank] = useState(null); //자랭 정보
  const [matches, SetMatches] = useState([]); //전적 정보 아이디
  const [match, SetMatch] = useState([]); //전적 정보 배열
  const winData = useCallback(
    //styledcomponents에서 사용하기 위한 함수(승패색깔)
    (matchData) => {
      //match배열 map(각각의 게임 정보)
      let type;
      const participantId = match.findIndex((ele, index) => {
        return (
          matchData.participantIdentities[index].player.accountId ===
          userData.accountId
        );
      }); //params의 이름과 match배열에 담겨있는 인덱스 찾기
      matchData .summonerIndex =
      participantId; // matchData에 유저 인덱스 추가
      if (matchData.participantIdentities[participantId].participantId < 6) {
        //만약 그 게임에서 유저가 레드팀이면
        type = 1;
      } else {
        //블루팀이라면
        type = 0;
      }
      if (matchData.teams[0].win === "Win" && type === 0) {
        //만약 레드팀이 이겼고, 유저도 레드팀이라면

        return 0;
      } else if (matchData.teams[1].win === "Win" && type === 1) {
        //만약 블루팀이 이겼고, 유저도 블루팀이라면

        return 0;
      } else {
        //패배했다면
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
  
      } catch (err) {
        console.log(err);
        if(err.response.status === 429){
          props.history.push(`/error`);
        }
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
            res.data[index].rank 
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
        if (res.data[0].queueType === "RANKED_SOLO_5x5") {
          setUserTierSolo(ReArab(0));
          setUserTierFree(ReArab(1));
        } else if (res.data[1].queueType === "RANKED_SOLO_5x5") {
          setUserTierSolo(ReArab(1));
          setUserTierFree(ReArab(0));
        }

        SetRankData(res.data[0].queueType, res.data); //솔랭자랭정렬

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
      <HeaderGG></HeaderGG>
      <S.MainViewBox>
        {userData && <ProfileBox props={props} soloRank={soloRank} userData={userData} />}
        <S.line />
        <S.MainContainer>
          <RankBox
            usertierSolo={usertierSolo}
            userTierFree={userTierFree}
            userLeagueData={userLeagueData}
            soloRank={soloRank}
            freeRank={freeRank}
          ></RankBox>
          <PvPListBox match={match} winData={winData} />
        </S.MainContainer>
      </S.MainViewBox>
    </S.Container>
  );
};
export default SearchUser;
// sadsderasd