import styled, { css, createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    body {
        margin:0;
        padding:0;
        overflow-x:hidden;
    }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const head = styled.div`
  background-color: #5383e8;
  display: flex;
  height: 6vh;
`;
export const headTitle = styled.div`
  width: 17%;
  display: flex;
  > div:nth-child(2) {
    color: white;
  }
`;

export const smallTitle = styled.div`
  padding: 5px 20px;
  font-size: 25px;
  font-weight: bolder;
  color: white;
  letter-spacing: -1px;
  cursor: pointer;
`;

export const SelectGame = styled.div`
  background-color: #232f46;
  display: flex;
  width: 72%;
  & > div {
    padding-right: 2vw;
  }
`;

export const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  text-decoration: none;

  color: #c3cbd1;
  &:hover {
    background-color: #2f436e;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
  }
  & > div {
    margin-left: 0.5vw;
  }
`;

export const loginSet = styled.div`
  display: flex;
  flex: 1;
  background-color: #232f46;
  align-items: center;
  justify-content: center;
`;

export const login = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 40%;
  background-color: #5383e8;
  border: solid none;
  font-size: 12px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  text-decoration:none;
`;

export const Background = styled.div`
  background-color: #5383e8;
  width: 100%;
`;

export const SelectMenu = styled.div`
  background-color: #5383e8;
  width: 100%;
  display: flex;
  height: 7vh;
  margin: 0 auto;
  max-width: 1300px;
`;

export const MenuItem = styled.a`
  color: #c3cbd1;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  position: relative;

  border-bottom: 3px solid transparent;

  ${(props) =>
    props.isActive &&
    css`
      color: #fff;
      border-bottom-color: #fff;
    `}
  &:hover {
    color: #fff;
    border-bottom-color: #fff;
    cursor: pointer;
  }
`;
