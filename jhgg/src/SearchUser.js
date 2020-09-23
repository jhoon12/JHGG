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
  const [userTier, setUserTier] = useState(null);

  const ChangeInput = (e) => {
    SetInputName(e.target.value);
  };
  const GoToTotal = () => {
    if (inputName === "") {
      alert("소환사를 입력하세요");
      return;
    }
    props.history.push(`/search/${inputName}`);
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
        console.log(data);
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
        const ReArab = () => {
          switch (res.data[0].rank) {
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
        setUserLeagueData(res);
        console.log(res.data);
        setUserTier(ReArab());
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
          ></S.Search>
          <S.SearchBtn onClick={GoToTotal}>.GG</S.SearchBtn>
        </S.SearchBox>
      </HeaderGG>
      <S.MainViewBox>
        <S.ProfileBox>
          {userData && (
            <S.ImgBackGround
              src={`https://opgg-static.akamaized.net/images/borders2/${userData}.png`}
            >
              <S.profileImg
                src={`http://ddragon.leagueoflegends.com/cdn/10.19.1/img/profileicon/${userData.profileIconId}.png`}
              />
            </S.ImgBackGround>
          )}
          <div>{props.match.params.userName}</div>
        </S.ProfileBox>
      </S.MainViewBox>
    </>
  );
};
export default SearchUser;

// {userLeagueData&&(
//   <>
//   <img src={`https://opgg-static.akamaized.net/images/medals/${userLeagueData.data[0].tier}_${userTier}.png?image=q_auto&v=1`}/>
//   <img src={`https://opgg-static.akamaized.net/images/medals/${userLeagueData.data[1].tier}_${userTier}.png?image=q_auto&v=1`}/>
//   </>
// )
// }
