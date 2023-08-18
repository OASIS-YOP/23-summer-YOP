import { styled } from 'styled-components';
import { pointColor, whiteColor } from '../../../../GlobalStyles';

export const Wrapper = styled.div`
  display: flex;
  font-size: 1.7vh;
  
`;

export const LeftContainer = styled.div`
  width: 50%;

  & > button {
    font-size: 1.7vh;
    margin: 0.3rem 0.3rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;

    &:hover {
      background-color: ${pointColor};
      cursor: pointer;
    }

    &:active {
      background-color: ${whiteColor};
    }

  }
`;
export const RightContainer = styled.div`
  width: 50%;
`;
