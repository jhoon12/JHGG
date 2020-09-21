import React, { useState, useCallback } from "react";
import * as S from "./Style/MainStyle";
import { Route } from "react-router-dom";
const Main = ({ history }) => {
  const [text, EditText] = useState("");
  const GoToTotal = () => {
    if (text === "") {
      alert("소환사를 입력하세요");
      return;
    } else {
      history.push(`/search/${text}`);
    }
  };
  function enterkey(e) {
    const ENTER_KEY_CODE = 13;
    if (e.keyCode === ENTER_KEY_CODE) {
      GoToTotal();
    }
  }
  const textChange = useCallback((e) => {
    EditText(e.target.value);
  }, []);
  return (
    <S.Container>
      <S.head>
        <S.headTitle>
          <S.smallTitle>OP.GG</S.smallTitle>
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
          <S.login>로그인</S.login>
        </S.loginSet>
      </S.head>
      <S.Background>
        <S.SelectMenu>
          <Menu></Menu>
        </S.SelectMenu>
      </S.Background>
      <S.body>
        <S.TitleImg src="https://attach.s.op.gg/logo/20200917203051.f544a6d3dce2fe709b5aac0b8d4ecbdf.png"></S.TitleImg>
        <S.SelectBox>
          <S.Select
            placeholder="소환사명, 소환사명, ..."
            onChange={textChange}
            value={text}
            onKeyDown={enterkey}  
          ></S.Select>
          <S.SelectBtnBox>
            <S.SelectBtn onClick={GoToTotal}>.GG</S.SelectBtn>
          </S.SelectBtnBox>
        </S.SelectBox>
        <S.tail>제작자: 박재훈 포트폴리오 작성하기</S.tail>
      </S.body>
    </S.Container>
  );
};

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

const Menu = () => {
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

  return (
    <>
      {textMenu.map(
        (text, index) => (
          (URL = URLmap(text)),
          (
            <S.MenuItem href={URL} target="_blank" isActive={index === 0}>
              {text}
            </S.MenuItem>
          )
        )
      )}
    </>
  );
};

export default Main;
