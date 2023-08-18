import styled from 'styled-components';
import {
  pointColor,
  primaryColor,
  secondaryColor,
  whiteColor,
} from '../../GlobalStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 13vh;
  height: 55vh;
  border-radius: 3vh;
  border: 1.5vh solid #d9d9d9;
  background-color: ${whiteColor};
  margin-left: 25%;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);

`;

export const ButtonGroupWrapper = styled.div`
  display: flex;
  text-align: center;
  width:fit-content;
`;

export const Button = styled.button`
  height: 7vh;
  width: 4vh;
  background-color: ${whiteColor};
  border-style: none;
  border-radius: 23px;
  cursor: pointer;
  font-size: 1.4vh;

  &:hover {
    color: ${pointColor};
    cursor: pointer;
  }
`;

export const ImageLoadButton = styled.div`
  align-items: center;
  justify-content: center;
  padding-top: 1vh;
  height: 4vh;
  width: 4vh;
  font-size: 1.4vh;
  background-color: ${whiteColor};
`;

export const ImageLoadButtonLabel = styled.label`
  
  &:hover {
    color: ${pointColor};
    cursor: pointer;
  }
`;

export const Input = styled.input`
  visibility: hidden;
`;
