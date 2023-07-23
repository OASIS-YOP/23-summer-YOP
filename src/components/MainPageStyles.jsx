import styled from 'styled-components';     
import { pointColor, 
    primaryColor, 
    secondaryColor, 
    whiteColor } from '../GlobalStyles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

`

export const EditorTools = styled.div`
    background-color : ${secondaryColor};
`

export const CanvasSpace = styled.div`
    justify-content: center;
    align-items: center;
    height: 510px;
    width: 425px;
    border: 5px dashed #979797;
    box-sizing: border-box;
`

export const EditorToolDetails = styled.div`
`

export const Footer = styled.div`
    height: 120px;
    width: 100%;
    background-color: ${secondaryColor};
`


