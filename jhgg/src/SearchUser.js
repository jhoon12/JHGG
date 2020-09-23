import React, { useEffect, useState } from "react";
import BaseKey from "./API";
import axios from "axios";
const SearchUser = (props) => {
  const [userData, setUserData] = useState(null);
  const [userLeagueData, setUserLeagueData] = useState(null);
  const [userTier, setUserTier] = useState(null);
  let src;
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
        const ReArab = () =>{
          switch(res.data[0].rank){
            case "I" :
              return(1);
            case "II":
              return(2);
            case "III":
              return(3);
            case "IV":
              return(4);
          }
        }
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
      {userData && (
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/10.19.1/img/profileicon/${userData.profileIconId}.png`}
        />
      )}
      {userLeagueData&&(
          <>
          <img src={`https://opgg-static.akamaized.net/images/medals/${userLeagueData.data[0].tier}_${userTier}.png?image=q_auto&v=1`}/>
          <img src={`https://opgg-static.akamaized.net/images/medals/${userLeagueData.data[1].tier}_${userTier}.png?image=q_auto&v=1`}/>
          </>
      )
      }
    </>
  );
};
export default SearchUser;
