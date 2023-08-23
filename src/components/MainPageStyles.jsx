import styled from 'styled-components';     
import { pointColor, 
    primaryColor, 
    secondaryColor, 
    whiteColor } from '../GlobalStyles';


// 창 전체 컨테이너
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: fit-content;
    height: 100%;

    margin: 0 auto;
`

// export const EditorTools = styled.div`
//     background-color : ${secondaryColor};
// `

// export const CanvasSpace = styled.div`
//     justify-content: center;
//     align-items: center;
//     height: 510px;
//     width: 425px;
//     border: 5px dashed #979797;
//     box-sizing: border-box;
// `

// export const EditorToolDetails = styled.div`
// `



// 푸터
export const Footer = styled.div`
    height: 8vh;
    width: 175vh;
    background-color: ${secondaryColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 3;

 `   
export const GitHub = styled.div`
    font-size: 2vh;
    font-align: center;
    color: #f5f5f5;
`


