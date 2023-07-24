import styled from 'styled-components';
import {
  pointColor,
  //   primaryColor,
  //   secondaryColor,
  whiteColor,
} from '../../GlobalStyles';

//--------------Header--------------
export const Header = styled.div`
  width: 100%;
  height: 130px;
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
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 2%;
  align-items: end;
`;

export const NavTabs = styled.div`
  cursor: pointer;
  width: 12em;
  height: 50%;
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

  &.active {
    height: 100%;
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
  height: calc(1024-250) px;
  width: 100%;
  z-index: 99;
`;

export const Content = styled.div`
  display: none;

  background-color: #ffffff;
  padding-top: 2%;
  padding-bottom: 2%;

  &.active {
    display: block;
    background-color: #ffffff;
    padding-top: 2%;
    padding-bottom: 2%;
  }
`;

// 플렉스 설정 위해 편집 페이지 좌우 컨테이너 한번 더 감싸줌
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0;
`;

export const LeftContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ededed;
  height: 700px;
  width: 1010px;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);
  border-radius: 15px;
  margin: 5px 20px 25px 20px;
`;

export const CanvasSpace = styled.div`
  justify-content: center;
  align-items: center;
  height: 510px;
  width: 425px;
  border: 5px dashed #979797;
;
// export const CanvasSpace = styled.div`
//     justify-content: center;
//     align-items: center;
//     height: 510px;
//     width: 425px;
//     border: 5px dashed #979797;
//     box-sizing: border-box;
// `
// -> 이전 버전 설정

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  height: 700px;
  min-width: 350px;
  border-radius: 15px;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);
  margin: 5px 20px 25px 0px;
`;

// 소개페이지 콘텐츠 컨테이너 따로 만들어줌
export const InfoContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ededed;
  height: 700px;
  width: 1010px;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);
  border-radius: 15px;
  margin: 5px 20px 25px 20px;
`;
