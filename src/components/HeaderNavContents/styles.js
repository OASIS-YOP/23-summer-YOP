import styled from 'styled-components';
import {
  pointColor,
  primaryColor,
  secondaryColor,
  whiteColor,
} from '../../GlobalStyles';

//--------------Header--------------
export const Header = styled.div`
  width: 100%;
  height: 13vh;
  background: linear-gradient(to bottom, ${pointColor}, ${whiteColor});
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

// 안 쓰임
// export const HeaderForeground = styled.div`
//     width: 100%;
//     height: 100%;
//     margin: -15px;
//     display: flex;
//     align-items: bottom;
// `

//--------------NavBar--------------
export const NavigationBar = styled.div`
  width: 100%;
  height: 10.2vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 2%;
  align-items: end;
`;

export const NavTabs = styled.div`
  cursor: pointer;
  width: 25vh;
  height: 7vh;
  border-color: #ffffff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 5px 3px 2px 0.1px rgb(0, 0, 0, 0.1);
  flex-flow: column;
  overflow: hidden;
  font-size: 2.5vh;

  &.active {
    height: 10vh;
    background-color: #ffffff;
    display: flex;
    text-align: center;
    box-shadow: 5px 3px 2px 0.1px rgb(0, 0, 0, 0.1);
    z-index: 1;
  }

  &:hover {
    background-color: #7198ff;
  }

  &.active:hover {
    background-color: #ffffff;
  }
`;
// 어떤 기능인지 모르겠어서 빼놓음
// &.active-nav-tabs::before {
//     width: auto;
//     height: auto;
//     border-color: #FFFFFF;
//     border-top-left-radius: 15px;
//     border-top-right-radius: 15px;
//     background-color: #FFFFFF;
//     display: flex;
//     align-items: start;
//     text-align: center;
//     box-shadow: 5px 2px 2px 1px rgb(0, 0, 0, 0.2);

//--------------Body--------------
export const Body = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: fit-content;
  z-index: 99;
`;

export const Content = styled.div`
  display: none;

  background-color: #ffffff;
  height: 100%;
  width: 160vh;
  padding-top: 2%;
  padding-bottom: 2%;

  &.active {
    display: block;
    height: 100%;
    width: 160vh;
    background-color: #ffffff;
    padding-top: 2%;
    padding-bottom: 2%;
  }

`;

// 플렉스 설정 위해 편집 페이지 좌우 컨테이너 한번 더 감싸줌
export const ContentWrapper = styled.div`
  display: flex;
  height: 90%;
  justify-content:center;
  width: 100%;

`;

export const LeftContainer = styled.section`
  display: flex;
  object-fit: contain;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  height: 75vh;
  width: 125vh;
  box-shadow: 10px 10px 20px 10px rgba(0, 0, 0, 18%);
  border-radius: 2vh;
  margin: 0 2.5vh;
`;

export const CanvasSpaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   
  width: 100%;
  height: fit-content;
`;

export const CanvasSpace = styled.div`
  width: fit-content;
  height: fit-content;
  justify-content: center;
  margin: 25px auto;
  align-items: center;
  border: 5px dashed #979797;
  // export const CanvasSpace = styled.div
`;
//     justify-content: center;
//     align-items: center;
//     height: 510px;
//     width: 425px;
//     border: 5px dashed #979797;
//     box-sizing: border-box;
// `
// -> 이전 버전 설정

export const LayerBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;

`

export const BringTo = styled.button`
  width: 20%;
  margin: 0.3rem 0.3rem;
  border-radius: 1.3vh;
  border: 1px solid #ccc;
  width: 10vh;
  height: 3.5vh;
  font-size: 1.5vh;
  cursor: pointer;

  &:hover {
    background-color: ${pointColor};
  }

  &:active {
    background-color: ${whiteColor};
  }
`

// export const ButtonGroupWrapper = styled.div`
//   text-align: center;
//   width:30%;
// `;



export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  height: 75vh;
  width: fit-content;
  border-radius: 2vh;
  box-shadow: 10px 10px 20px 10px rgba(0, 0, 0, 18%);
  margin: 0 2.5vh;
  padding: 0 2vh;
`;

// 소개페이지 콘텐츠 컨테이너 따로 만들어줌
export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #ededed;
  height: 70vh;
  width: 130vh;
  box-shadow: 10px 10px 20px 10px rgba(0, 0, 0, 18%);
  border-radius: 1.5rem;
  margin: 0 auto;
  
`;
