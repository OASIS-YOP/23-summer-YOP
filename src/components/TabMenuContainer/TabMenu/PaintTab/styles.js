import styled from 'styled-components';
import { pointColor, whiteColor } from '../../../../GlobalStyles';

export const PaintContainer = styled.div`

& > button {
  font-size: 1.7vh;
  margin: 0.4rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  height: 1.6rem;

  &:hover {
    background-color: ${pointColor};
    cursor: pointer;
  }

  &:active {
    background-color: ${whiteColor};
  }
}
`
export const BtnChangeColor = styled.button`

`

export const BtnAddObj = styled.button`
`