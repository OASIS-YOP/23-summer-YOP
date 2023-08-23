import styled from 'styled-components';
import {
  pointColor,
  primaryColor,
  secondaryColor,
  whiteColor,
} from '../../GlobalStyles';


//--------------Header--------------

  export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    width: 180vh;
    height: 11vh;

    z-index: 0;
    
    background: linear-gradient(to bottom, ${pointColor}, white );


  `;

  // 안 쓰임
  // export const HeaderForeground = styled.div`
  //     width: 100%;
  //     height: 100%;
  //     margin: -15px;
  //     display: flex;
  //     align-items: bottom;
  // `

  // 페이지 상단 네브바
  export const NavigationBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: end;

    width: 100%;
    height: 10vh;

    margin-right: 5%;
    margin-bottom: 0;

      
  `;

  export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    margin-right: 59%;
    margin-bottom: 1.2vh;
    padding: 0 1vh;
    // background: linear-gradient(to top, ${pointColor}, white 50% );
    // box-shadow: 0px 10px 10px 3px rgb(0, 0, 0, 0.1);
    // border-radius: 2vh;

    font-family: 'NeoDunggeunmoPro-Regular';

    > p {
      color: ${pointColor};
      align-self: end;
      margin: 0;
      font-size: 3vh;
      
    }

    .logo {
      path {
        fill: navy;
      }
      width: 5.3vh;
      height: auto;
      margin-right: 0.8vh;
    }

    &:hover {
      > p {
        color: navy;
      }

      .logo {
        path {
          fill: ${pointColor};
        }

    }
  
  
  `

  export const NavTabs = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    row-wrap: wrap;

    padding: 0.1vh;

    text-align: center;
    
    width: 21vh;
    height: 4vh;

    border-color: #ffffff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #e0e0e0;
    box-shadow: 5px 3px 2px 0.1px rgb(0, 0, 0, 0.1);
  
    overflow: hidden;

    font-size: 2vh;

    cursor: pointer;

    &.active {
      display: flex;
      text-align: center;

      height: 8vh;

      background-color: #ffffff;
      box-shadow: 5px 3px 2px 0.1px rgb(0, 0, 0, 0.1);

      padding: 0.1vh;
      
      z-index: 99;
    }

    &:hover {
      background-color: #7198ff;
    }

    &.active:hover {
      background-color: #ffffff;
    }
  `;

//--------------Body--------------

// 바디 전체 컨테이너
export const Body = styled.div`
  display: flex;
  justify-content: center;

  width: 180vh;
  height: 100%;

  z-index: 2;
  
`;

// 바디 전체 컨테이너 안에 들어가는 컨테이너
export const Content = styled.div`
  display: none;

  height: 100%;
  width: 180vh;

  background-color: #ffffff;


  padding-top: 2%;
  padding-bottom: 2%;

    &.active {
      display: block;
      height: 100%;
      width: 180vh;
      background-color: #ffffff;
    }

`;

// 플렉스 설정 위해 편집 페이지 좌우 컨테이너 한번 더 감싸줌 (인포 페이지는 해당 없음)
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 180vh;
  height: 90%;
`;

//// 편집 페이지 좌우 컨테이너
  // 좌측 컨테이너 (캔버스)
  export const LeftContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    // 이미지가 컨테이너 안에 꽉 차게

    width: 104vh;
    height: 85vh;

    background-color: #ededed;
    box-shadow: 10px 10px 20px 10px rgba(0, 0, 0, 18%);
    border-radius: 2hv;

    margin: 0 2.5vh;

      // 오브젝트수 카운트 문구 
      & h2 {
        font-size: 1.5vh;
        margin: 2.5vh;
        font-weight: normal;
      }
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
    display: flex;
    justify-content: center;
    align-items: center;

    width: fit-content;
    height: fit-content;
    //문제의 구간 : 반응형이 안됨

    border: 5px dashed #ccc;

    margin: 1.3vh auto;
  `;
  // export const CanvasSpace = styled.div
  //     justify-content: center;
  //     align-items: center;
  //     height: 510px;
  //     width: 425px;
  //     border: 5px dashed #979797;
  //     box-sizing: border-box;
  // `
  // -> 이전 버전 설정

  // 오브젝트 z-index 순서 조절 버튼 컨테이너 & 버튼
    export const LayerBtnWrapper = styled.div`
      display: flex;
      justify-content: center;

      width: 60%;
    `

    export const BringTo = styled.button`
      width: 8vh;
      height: 2.5vh;

      border: 1px solid #ccc;
      border-radius: 1.3vh;

      margin: 0.3rem 0.3rem;

      cursor: pointer;
      font-size: 1.4vh;

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

  // 우측 컨테이너 (편집툴 & 오브젝트 리스트 : 탭 메뉴 컨테이너 포함)
  export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: fit-content;
    height: 85vh;

    background-color: #ededed;
    box-shadow: 10px 10px 20px 10px rgba(0, 0, 0, 18%);
    border-radius: 2vh;

    margine: 0 2.5vh;
    padding: 0 2.5vh;
  `;

// 소개페이지 콘텐츠 컨테이너
// export const InfoContentWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: row;
// `


export const InfoContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110vh;
  height: 70vh;

  background-color: #ededed;
  // box-shadow: 10px 10px 20px 10px rgba(0, 0, 0, 18%);
  border-radius: 1.5rem;
  border: 7px dashed #ccc;

  margin: 0 auto; 
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110vh;
  height: 70vh;

  background-color: #ededed;
  // box-shadow: 10px 10px 20px 10px rgba(0, 0, 0, 18%);
  border-radius: 1.5rem;
  border: 7px dashed #ccc;

  margin: 0 auto; 
`;

export const Title = styled.div`
  white-space: pre-line;
  line-height: 1.5;
  font-size: 3.6vh;
  text-align: center;
  font-weight: bold;
`
export const Info = styled.div`
  white-space: pre-line;
  line-height: 1.5;
  text-align: center;
  font-size: 2.1vh;
`

// export const InfoCanvas = styled.div`

//   display: flex;
//   justify-content: center;
  

// `
