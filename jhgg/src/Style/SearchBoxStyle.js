import styled,{css,createGlobalStyle } from "styled-components"


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