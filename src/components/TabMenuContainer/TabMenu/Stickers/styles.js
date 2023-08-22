import styled from 'styled-components';
import // pointColor,
//   primaryColor,
//   secondaryColor,
// whiteColor,
'../../../../GlobalStyles';



export const StickerList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; ;
  justify-content: space-evenly;
  
  width: 100%;
  height: 100%;

  //스크롤바 커스텀 기능 조사중...

    & img {
      vertical-align: middle;
      align-self: center;
      margin: 1vh; /* 각 요소 사이에 간격 */
      padding: 0.6vh;
      
      &:hover {
        cursor: pointer;
        opacity: 0.85;
      }

    }

`;
