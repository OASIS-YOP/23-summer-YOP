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
    // color: ${pointColor};
    
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

export const EditorSpace = styled.div`
    display: flex;
    flex-direction: row;
    justfy-content: center;
    align-items: center;
    background-color: ${whiteColor};
`

export const EditorTools = styled.div`
    background-color = ${secondaryColor};
`

export const CanvasSpace = styled.div`
    justfy-content: center;
    align-items: center;
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