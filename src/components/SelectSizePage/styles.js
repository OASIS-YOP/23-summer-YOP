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
  width: fit-content;
  height: fit-content;
  text-align: center;
  margin: 0 15px 0 15px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    border: 2px solid ${pointColor};
  }
  &.active {
    border: 2px solid ${pointColor};
  }
`;

export const SizeImage = styled.img`
  -webkit-user-drag: none;
`;

export const OkButton = styled.button`
  height: 50px;
  width: 100px;
  background-color: ${whiteColor};
  border-style: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 40px;
  font-size: 1rem;

  &:hover {
    background-color: ${pointColor};
  }
`;
