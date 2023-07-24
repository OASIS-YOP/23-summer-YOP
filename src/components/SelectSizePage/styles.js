import { styled } from 'styled-components';
import {
  pointColor,
  primaryColor,
  secondaryColor,
  whiteColor,
} from '../../GlobalStyles';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ededed;
  height: 700px;
  width: 1350px;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);
  border-radius: 15px;
  padding: 20px;
`;

export const SelectSizeLabel = styled.p`
  font-size: 1.5rem;
  margin-top: 60px;
`;

export const SizeImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: fit-content;
  margin: 40px 0 40px 0;
`;

export const SizeImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 0 15px 0 15px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Size1 = styled.div`
  width: 220px;
  height: 340px;
  background-color: ${whiteColor};

  border: 2px dotted #979797;
  &:hover {
    background-color: ${primaryColor};
    border: 2px dotted black;
  }
  &.active {
    background-color: ${primaryColor};
    border: 2px dotted black;
  }
`;
export const Size2 = styled.div`
  width: 340px;
  height: 340px;
  border: 2px dotted #979797;
  background-color: ${whiteColor};
  &:hover {
    background-color: ${primaryColor};
    border: 2px dotted black;
  }
  &.active {
    background-color: ${primaryColor};
    border: 2px dotted black;
  }
`;
export const Size3 = styled.div`
  width: 400px;
  height: 340px;
  border: 2px dotted #979797;
  background-color: ${whiteColor};
  &:hover {
    background-color: ${primaryColor};
    border: 2px dotted black;
  }
  &.active {
    background-color: ${primaryColor};
    border: 2px dotted black;
  }
`;

export const SizeLabel = styled.p`
  font-size: 1rem;
`;

export const OkButton = styled.button`
  height: 50px;
  width: 100px;
  background-color: ${whiteColor};
  border-style: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: ${primaryColor};
  }
`;
