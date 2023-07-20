import styled from 'styled-components';
import {
  pointColor,
  primaryColor,
  secondaryColor,
  whiteColor,
} from '../../GlobalStyles';

export const TabNavBar = styled.div`
  display: flex;
  width: 350px;
  height: 40px;
`;

export const TabMenu = styled.div`
  margin: 0;
  padding: 0;
  width: 70px;
  height: 100%;
  border-radius: 10px 10px 0 0;
  background-color: #d9d9d9;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);

  &:hover {
    background-color: white;
  }
`;

export const Container = styled.div`
  margin: 0px;
  width: 350px;
  height: 350px;
  background-color: white;
  border-radius: 0 0 15px 15px;

  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);
`;
