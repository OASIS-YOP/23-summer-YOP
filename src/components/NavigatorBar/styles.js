import styled from 'styled-components';
import {
  pointColor,
  primaryColor,
  secondaryColor,
  whiteColor,
} from '../../GlobalStyles';

export const NavigationBar = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 2%;
    align-items: bottom;   
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

export const CanvasSpace = styled.div`
    justify-content: center;
    align-items: center;
    height: 508px;
    width: 423px;
    border: 5px dashed #979797;
`

export const Header = styled.div`
    
    width: 100%;
    height: 130px;
    background-color: ${pointColor};
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
export const Body = styled.div`
    height: calc(1024-250)px;
    width: 100%;
    z-index: 99;
`