import React, { useCallback } from "react";
import * as S from "../Style/HeaderGGstyle"
const NavItem = ({ imgSrc, children }) => {
  let URL;
  switch (children) {
    case "next":
      URL = "https://next.op.gg/";
      break;
    case "배틀그라운드":
      URL = "https://pubg.op.gg/";
      break;
    case "오버워치":
      URL = "https://overwatch.op.gg/";
      break;
    case "포트나이트":
      URL = "https://fortnite.op.gg/";
      break;
    case "레인보우식스 시즈":
      URL = "https://r6.op.gg/";
      break;
    case "톡피지지":
      URL = "https://talk.op.gg/";
      break;
  }
  return (
    <S.NavItemContainer>
      <S.NavItem href={URL} target="_blank">
        <img src={imgSrc} />
        <div>{children}</div>
      </S.NavItem>
    </S.NavItemContainer>
  );
};

const GameKinds = () => {
  const navItemArray = [
    {
      name: "next",
      src:
        "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-next-gray.svg",
    },
    {
      name: "배틀그라운드",
      src:
        "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-pubg-gray.svg",
    },
    {
      name: "오버워치",
      src:
        "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-overwatch-gray.svg",
    },
    {
      name: "포트나이트",
      src:
        "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-fortnite-gray.svg",
    },
    {
      name: "레인보우식스 시즈",
      src:
        "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-r-6-gray.svg",
    },
    {
      name: "톡피지지",
      src:
        "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-talk-gray.svg",
    },
  ];
  return (
    <>
      {navItemArray.map(({ name, src }) => (
        <NavItem imgSrc={src}>{name}</NavItem>
      ))}
    </>
  );
};

const Menu = (activeIndex) => {
  let URL;
  const textMenu = [
    "#집에있자",
    "챔피언분석",
    "통계",
    "랭킹",
    "프로관전",
    "멀티서치",
    "OP셜",
    "커뮤니티",
  ];
  const URLmap = useCallback((text) => {
    switch (text) {
      case "챔피언분석":
        return "https://www.op.gg/champion/statistics";
        break;
      case "통계":
        return "https://www.op.gg/statistics/champion/";
        break;
      case "랭킹":
        return "https://www.op.gg/ranking/ladder/";
        break;
      case "프로관전":
        return "https://www.op.gg/spectate/pro/";
        break;
      case "멀티서치":
        return "https://www.op.gg/multi/query=";
      case "OP셜":
        return "https://news.op.gg/";
        break;
      case "커뮤니티":
        return "https://talk.op.gg/s/lol/all?sort=popular";
        break;
    }
  });

  return textMenu.map(
    (text, index) => (
      (URL = URLmap(text)),
      (
        <S.MenuItem href={URL} target="_blank" isActive={index === activeIndex}>
          {text}
        </S.MenuItem>
      )
    )
  );
};
const HeaderGG = ({ children }) => {
  const GoToMain = () => {
    window.location.replace("/");
  };
  return (
    <>
      <S.head>
        <S.headTitle>
          <S.smallTitle onClick={GoToMain}>JH.GG</S.smallTitle>
          <NavItem
            imgSrc="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg"
            hover="none"
          >
            리그오브레전드
          </NavItem>
        </S.headTitle>
        <S.SelectGame>
          <GameKinds></GameKinds>
        </S.SelectGame>
        <S.loginSet>
          <S.login href="https://member.op.gg/?redirect_url=">로그인</S.login>
        </S.loginSet>
      </S.head>
      <S.Background>
        <S.SelectMenu>
          {Menu(0)}
          {children}
        </S.SelectMenu>
      </S.Background>
    </>
  );
};

export default HeaderGG;