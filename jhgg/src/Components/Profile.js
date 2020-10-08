import React from 'react'
import * as S from "../Style/ProfileStyle";

const ProfileBox = ({props,soloRank, userData}) => {
    return(
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
    )
}
export default ProfileBox;