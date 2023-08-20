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

  //스크롤바 커스텀 기능 조사중...

    & img {
      vertical-align: middle;
      margin: 1vh; /* 각 요소 사이에 10px 간격 */

      &:hover {
        cursor: pointer;
        opacity: 0.85;
      }

    }

`;
