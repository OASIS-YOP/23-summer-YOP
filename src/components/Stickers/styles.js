import styled from 'styled-components';
import {
  // pointColor,
  //   primaryColor,
  //   secondaryColor,
  // whiteColor,
} from '../../GlobalStyles';


export const StickerList = styled.div`
  display: block;
  text-align: center;
  width: 100%;

  //스크롤바 커스텀 기능 조사중...

  & img {
    display: inline-block;
    height='auto';
    width: 50%;
    margin: 10px;
  }
`