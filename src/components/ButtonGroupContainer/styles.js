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
  width: 60px;
  height: 450px;
  border-radius: 23px;
  border: 7px solid #d9d9d9;
  background-color: ${whiteColor};
  margin: 0 180px 0 30px;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);
`;

export const Button = styled.button`
  height: 50px;
  width: 50px;
  background-color: ${whiteColor};
  border-style: none;
  border-radius: 23px;
  cursor: pointer;
`;

export const ImageLoadButton = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${whiteColor};
`;

export const ImageLoadButtonLabel = styled.label`
  height: 50px;
  width: 50px;
  font-size: 13px;
  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  visibility: hidden;
`;
