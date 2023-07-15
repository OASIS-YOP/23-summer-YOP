import styled from 'styled-components';
import { pointColor, primaryColor, secondaryColor, whiteColor } from '../GlobalStyles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justfy-content: center;
    align-items: center;

`
export const Header = styled.div`
    color: ${pointColor};
    width: 100%;
    height: 2vh;
`
export const HeaderBackground = styled.div`
    display: flex;
    flex-direction: column;
    justfy-content: center;
    align-items: center;
`

export const NavigationBar = styled.div`
    display: flex;
    flex-direction: row;
    justfy-content: flex-end;
    align-items: flex-end;
`

export const NavFirst = styled.button`
`

export const NavSecond = styled.button`

`

export const HeaderForeground = styled.div`
    color: ${whiteColor};
`

export const EditorSpace = styled.div`
    display: flex;
    flex-direction: row;
    justfy-content: center;
    align-items: center;
`

export const EditorTools = styled.div`
    color = ${secondaryColor};
`

export const CanvasSpace = styled.div`
    justfy-content: center;
    align-items: center;
`

export const EditorToolDetails = styled.div`
`

export const Footer = styled.div`
    color = ${primaryColor};
`
//--------여기까지 유림------------
//--------여기서부터 수정----------