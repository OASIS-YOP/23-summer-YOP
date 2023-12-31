import styled from 'styled-components';
import {
  pointColor,
  primaryColor,
  secondaryColor,
  whiteColor,
} from '../../GlobalStyles';

export const TooltipContent = styled.div`
  display: none;
  position: absolute;
  z-index: 200;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 7vh;
  height: 55vh;
  border-radius: 3vh;
  border: 1.5vh solid #d9d9d9;
  background-color: ${whiteColor};
  margin-left: 48%;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);
`;

export const ButtonGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4vh;
  height: 7vh;
  background-color: ${whiteColor};
  border-style: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  
  /* 클릭 시 생기는 테두리 없애기 */
  &:active,
  :focus {
    border: none;
    outline: none;
  }

  .icon {
    path {
      fill: black;
    }
  }

  &:hover {
    path {
      fill: ${pointColor};
    }
    fill: ${pointColor};
  }

`;

export const ImageLoadButtonLabel = styled.label`
  cursor: pointer;
  height: fit-content;
  .icon {
    path {
      fill: black;
    }
  }
`;

export const Input = styled.input`
  visibility: hidden;
`;
