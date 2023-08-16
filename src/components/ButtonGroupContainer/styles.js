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
  width: 90px;
  height: 580px;
  border-radius: 23px;
  border: 14px solid #d9d9d9;
  background-color: ${whiteColor};
  margin: 0 180px 0 70px;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);

  font-size: 18px;
`;

export const Button = styled.button`
  height: 50px;
  width: 70px;
  background-color: ${whiteColor};
  border-style: none;
  border-radius: 23px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    color: ${pointColor};
    cursor: pointer;
  }
`;

export const ImageLoadButton = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${whiteColor};
`;

export const ImageLoadButtonLabel = styled.label`
  height: 50px;
  width: 50px;
  &:hover {
    opacity: 0.3;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  visibility: hidden;
`;
