import React, { useEffect, useState } from "react";
import BaseKey from "./API";
import axios from "axios";
const SearchUser = (props) => {
  const [userData, setUserData] = useState(null);
  const [userLeagueData, setUserLeagueData] = useState(null);
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
  useEffect(()=>{
    (async()=>{
      try{
        const res = await axios.get(`/lol/league/v4/entries/by-summoner/${userData.id}`,
        {
          headers:{
            "X-Riot-Token": BaseKey,
          }
        }
        );
        setUserLeagueData(res.data);
        console.log(res);
      }catch(err){
        console.log(err);
      }
    })()
  },[userData])


  return (
    <>
      {userData && (
        <>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/10.19.1/img/profileicon/${userData.profileIconId}.png`}
        />
        {/* <img src={`opgg-static.akamaized.net/images/medals/${}.png?image=q_auto&v=1}/> */}
        </>
      )}
    </>
  );
};
export default SearchUser;
