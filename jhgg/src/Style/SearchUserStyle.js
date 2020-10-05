import React from "react";
import styled, { css, createGlobalStyle } from "styled-components";


export const SearchBox = styled.div`
  background-color: white;
  width: 340px;
  display: flex;
  height: 4.5vh;
  margin-top: 1.2vh;
  margin-left: 300px;
`;
export const country = styled.div`
  background-color: #ecf2ff;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 32px;
  color: #4171d6;
`;
export const Search = styled.input`
  background-color: white;
  width: 60%;
  border: none;
  &:focus {
    outline: none;
  }
  font-size: 12px;
  padding: 9px 0px 8px 14px;
  line-height: 15px;
`;
export const SearchBtn = styled.button`
  flex: 1;
  background-color: white;
  border: none;
  &:focus {
    outline: none;
  }
  color: #5383e8;
  font-weight: 900;
  font-size: 18px;
  cursor: pointer;
`;
export const profileImg = styled.img`
  width: 100px;
  height: 100px;
`;
export const MainViewBox = styled.div`
  flex: 1;
  margin: 0 auto;
  width: 1000px;

  min-height:100vh;
`;
export const ProfileBox = styled.div`
  display: flex;
  padding-left: 30px;
  margin-top: 15px;
`;

export const ImgBackGround = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;
  background: url(${({ src }) => src});
  background-size: cover;
`;
export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
`;
export const InfoBox = styled.div`
  margin-left: 20px;
`;
export const UserName = styled.div`
  color: #242929;
  font-size: 20px;
  font-weight: bold;
  margin-right: 4px;
`;

export const toolBox = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
`;
export const reload = styled.button`
  cursor: pointer;
  padding: 10px 0px;
  background-color: #1f8ecd;
  width: 100px;
  height: 40px;
  border: none;
  outline: none;
  color: #f2f2f2;
  border: 1px solid #1a78ae;
  font-size: 14px;
`;
export const howMuchImg = styled.img`
  margin-top: -8px;
  padding-left: 35px;
  width: 50px;
  height: 35px;
`;
export const howMuchTime = styled.a`
  display: flex;
  justify-content: center;
  background-color: #955dff;
  border: solid 1px #6833d5;
  color: #f2f2f2;
  margin-left: 5px;
  width: 260px;
  cursor: pointer;
  font-size: 14px;
  outline: none;
  padding-left: 24px;
  padding-top: 10px;
  text-decoration: none;
`;
export const line = styled.div`
  border-bottom: 1px solid #c6cbcb;
  width: 155%;
  margin-left: calc(-50vw + 50%);
  padding: 0;
`;

export const soloRankBox = styled.div`
  color: #879292;
  background-color: #f2f2f2;
  padding: 30px 0;
  width: 300px;

  display: flex;
`;
export const SoloRankImg = styled.img`
  padding-left: 15px;
  width: 104px;
  height: 104px;
  margin: -5px 0 -10px 0;
`;
export const SolorRankInfo = styled.div`
  flex-direction: column;
  font-size: 12px;
  line-height: 1.5;
  padding-left: 1px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;
export const RankType = styled.div`
  font-size: 11px;
  color: #879292;
`;
export const soloTier = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #1f8ecd;
`;
export const LPBox = styled.div`
  display: flex;
`;
export const LP = styled.div`
  color: #555e5e;
  font-weight: bold;
`;
export const FreeRankBox = styled.div`
  margin-top: 15px;
  color: #879292;
  background-color: #f2f2f2;
  padding: 10px 0;
  width: 300px;
  display: flex;
`;
export const RankInfoBox = styled.div``;
export const MainContainer = styled.div`
  display: flex;
`;
export const PvPListBox = styled.div`
  flex: 1;
  margin-left: 15px;
`;
export const Container = styled.div`
  background-color: #eaeaea;
`;
export const matchInfoBox = styled.div`
  flex: 1;
  height: 96px;

  border-radius: 3px;
  margin-top: 8px;
  ${props=>{if(props.winData === 0){return(`background-color:#a3cfec;`)}}}
  /* ${props => props.winData && `background-color: blue`}; */
`;
