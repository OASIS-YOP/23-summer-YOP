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
//--------여기까지 유림------------
//--------여기서부터 수정----------








//-----------사용하지 않음(중복)-----------
//-----------NavBarWithContents폴더 styles.js 안에 있으니 스타일 변경시 해당 경로에서 수정해주세요!-----------
//-----------  => 유림님께서 확인 후 이하 내용 삭제하셔도 됩니다-----------
// export const Header = styled.div`   
//     width: 100%;
//     height: 130px;
//     background-color: ${pointColor};
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     align-items: center;
//     `

// export const HeaderForeground = styled.div`
//     width: 100%;
//     height: 25%;
//     background-color: ${whiteColor};
//     margin: -15px;
// `

// export const Body = styled.div`
//     height: calc(1024-250)px;
//     width: 100%;
// `

// export const LeftContainer = styled.div`
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     background-color: #EDEDED;
//     height: 700px;
//     width: 1010px;
//     box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);
//     border-radius: 15px;
//     margin: 5px 20px 25px 20px;
// `

// export const CanvasSpace = styled.div`
//     justify-content: center;
//     align-items: center;
//     height: 510px;
//     width: 425px;
//     border: 5px dashed #979797;
//     box-sizing: border-box;
// `
