import styled from 'styled-components';
import {
  pointColor,
  primaryColor,
  secondaryColor,
  whiteColor,
} from '../../GlobalStyles';


// 헤더
export const Header = styled.div`
    
    width: 100%;
    height: 130px;
    background: linear-gradient(to bottom, ${pointColor}, ${whiteColor});
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

// export const HeaderForeground = styled.div`
//     width: 100%;
//     height: 100%;
//     margin: -15px;
//     display: flex;
//     align-items: bottom;   
// `


export const NavigationBar = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 2%;
    align-items: end;
`

export const NavTabs = styled.div`
    cursor: pointer;
    width: 12em;
    height: 50%;
    border-color: #FFFFFF;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #E0E0E0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 5px 3px 2px 0.1px rgb(0, 0, 0, 0.1);
    flex-flow: column;
    overflow: hidden;

    &.active {
        height: 100%;
        background-color: #FFFFFF;
        display: flex;
        text-align: center;
        box-shadow: 5px 3px 2px 0.1px rgb(0, 0, 0, 0.1);
        z-index: 1;
    }

    &:hover {
        background-color: #7198FF;
    }

    &.active:hover {
        background-color: #FFFFFF
    }
`

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
    // 어떤 기능인지 모르겠어서 빼놓음


// body
export const Body = styled.div`
    height: calc(1024-250)px;
    width: 100%;
    z-index: 99;
`

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 0;
`

export const Content = styled.div`
    display: none;

    background-color: #FFFFFF;
    padding-top: 2%;
    padding-bottom: 2%;

    &.active {
        display:block;
        background-color: #FFFFFF;
        padding-top: 2%;
        padding-bottom: 2%;
    }
`

export const LeftContainer = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #EDEDED;
    height: 700px;
    width: 1010px;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);
    border-radius: 15px;
    margin: 5px 20px 25px 20px;
`
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


export const CanvasSpace = styled.div`
    justify-content: center;
    align-items: center;
    height: 510px;
    width: 425px;
    border: 5px dashed #979797;
    z-index: 10;
`

