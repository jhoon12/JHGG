import * as S from "../Style/SearchBoxStyle";
import HeaderGG from "./HeaderGG";
import React, { useState } from "react";




const SearchBox = () => {
const [inputName, SetInputName] = useState(""); //다른 유저 검색
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
return (
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
  );
};
export default SearchBox;
