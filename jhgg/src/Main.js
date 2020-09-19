import React from "react";
import * as S from "./Style/MainStyle";

const Main = () => {
  return (
    <S.head>
      <S.smallTitle>OP.GG</S.smallTitle>
      <NavItem imgSrc="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg">
        리그오브레전드
      </NavItem>
      <S.SelectGame>
        <GameKinds></GameKinds>
      </S.SelectGame>
    </S.head>
  );
};

const NavItem = ({ imgSrc, children }) => {
  return (
    <S.NavItemContainer>
      <img src={imgSrc} />
      <div>{children}</div>
    </S.NavItemContainer>
  );
};

const GameKinds = () => {
  const navItemArray = [
    {
      name: "리그오브레전드",
      src:
        "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg",
    },
    {
      name: "NEXT",
      src:
        "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-next-gray.svg",
    },
    {
      name: "NEXT",
      src:
        "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-next-gray.svg",
    },
    {
      name: "NEXT",
      src:
        "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-next-gray.svg",
    },
    {
      name: "NEXT",
      src:
        "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-next-gray.svg",
    },
    {
      name: "NEXT",
      src:
        "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-next-gray.svg",
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

export default Main;
