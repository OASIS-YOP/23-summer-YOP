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
    &:disabled {
      pointer-events: none;
    }
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

// range바 커스텀

// export const RangeInput = styled.input`
//   appearance: none;
//   accent-color: ${pointColor};
//   &:focus {
//     outline: none;
//   }
//   &::-webkit-slider-runnable-track {
//     height: 9px;
//     -webkit-appearance: none;
//     border: 1px solid ${pointColor};
//   }
//   &::-webkit-slider-thumb {
//     -webkit-appearance: none;
//     background: ${pointColor};
//     background-color: ${pointColor};
//     width: 1rem;
//     height: 1rem;
//     border-radius: 10px;
//     cursor: pointer;
//   }
// `;
