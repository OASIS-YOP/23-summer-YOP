import styled from 'styled-components';     
import { pointColor, 
    primaryColor, 
    secondaryColor, 
    whiteColor } from '../GlobalStyles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

`
export const Header = styled.div`
    
    width: 100%;
    height: 12vh;
    background-color: ${pointColor};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    `

export const NavigationBar = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: ${pointColor};
    
`

export const Nav1 = styled.button`
    width: 10%;
    height: 100%;
    border-color: ${whiteColor};
    border-radius: 15px;
    background-color: ${whiteColor};
    

`
export const Nav2 = styled.button`
    width: 10%;
    height: 100%;
    border-color: ${whiteColor};
    border-radius: 15px;
    background-color: ${whiteColor};
    margin-right: 20px;

`
export const HeaderForeground = styled.div`
    width: 100%;
    height: 25%;
    background-color: ${whiteColor};
    margin: -15px;
`
export const Body = styled.div`
    height: 78vh;
    width: 100%;
`

export const LeftContainer = styled.div`
    display: flex;
    justfy-content: center;
    align-items: center;
    background-color: #EDEDED;
    height: 760px;
    width: 1010px;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);
    border-radius: 15px;
`

export const EditorTools = styled.div`
    background-color = ${secondaryColor};
`

export const CanvasSpace = styled.div`
    justfy-content: center;
    align-items: center;
    height: 590px;
    width: 425px;
    border: 5px dashed #979797;
`

export const EditorToolDetails = styled.div`
`

export const Footer = styled.div`
    height: 10vh;
    width: 100%;
    background-color: ${secondaryColor};
`
//--------여기까지 유림------------
//--------여기서부터 수정----------