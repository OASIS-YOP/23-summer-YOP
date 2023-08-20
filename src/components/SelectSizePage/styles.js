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
  width: auto; min-width: 130vh;
  height: 70vh;

  background-color: #ededed;
  box-shadow: 3px 5px 20px 12px rgba(0, 0, 0, 13%);
  border-radius: 30px;
  
  padding: 20px;
`;

export const SelectSizeLabel = styled.p`
  margin-top: 5%;
  
  font-size: 3vh;
`;

export const SizeImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: fit-content;
  margin: 2vh 0 0 0;
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
  width: 25.31645569620253vh;
  height: 39.12543153049482vh;

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
export const Size2 = styled.div`
  width: 31.567080045095828vh;
  height: 38.331454340473506vh;

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
  width: 44.164037854889585vh;
  height: 35.75184016824395vh;

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
  font-size: 2vh;
`;

export const OkButton = styled.button`
  width: 9.5vh;
  height: 3.2vh;

  background-color: ${whiteColor};

  border: 1px solid #ccc;
  border-radius: 1.5rem;

  margin-top: 2%;
  margin-bottom: 5%;
  
  cursor: pointer;

  font-size: 2vh;

    &:hover {
      background-color: ${primaryColor};
    }
`;
