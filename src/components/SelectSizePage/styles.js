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
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  height: 100%;
  width: auto;
  box-shadow: 3px 5px 20px 12px rgba(0, 0, 0, 13%);
  border-radius: 30px;
  min-width: 1200px;
  padding: 20px;
  overflow: auto;
  overflow-x: hidden;
`;

export const SelectSizeLabel = styled.p`
  font-size: 2rem;
  margin-top: 60px;
`;

export const SizeImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: fit-content;
  margin: 30px 0 0 0;
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
  width: 280px;
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
  width: 420px;
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
  font-size: 1.2rem;
`;

export const OkButton = styled.button`
  height: 35px;
  width: 70px;
  background-color: ${whiteColor};
  margin-top: 70px;
  margin-bottom: 50px;
  border: 1px solid #ccc;
  border-radius: 1.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background-color: ${primaryColor};
  }
`;
