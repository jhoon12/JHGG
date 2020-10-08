import styled, { css, createGlobalStyle } from "styled-components";

export const profileImg = styled.img`
width: 100px;
height: 100px;
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
