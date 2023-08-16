import styled from 'styled-components';
import // pointColor,
//   primaryColor,
//   secondaryColor,
// whiteColor,
'../../../../GlobalStyles';

export const StickerList = styled.div`
  display: block;
  text-align: center;
  width: 100%;

  //스크롤바 커스텀 기능 조사중...

  & img {
    display: inline-block;
    margin: auto;
    height: auto;
    width: 130px;
    margin: 10px;
  }

  & img:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;
