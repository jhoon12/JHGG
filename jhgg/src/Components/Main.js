import React, { useState, useCallback } from "react";
import * as S from "../Style/MainStyle";
import { Route } from "react-router-dom";
import HeaderGG from "./HeaderGG";
import SearchUser from "./SearchUser";
const Main = ({ history }) => {
  const [text, EditText] = useState("");
  const GoToTotal = () => {
    if (text === "") {
      alert("소환사를 입력하세요");
      return;
    }
    history.push(`/search/${text}`);
    
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
      <HeaderGG></HeaderGG>
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


export default Main;
