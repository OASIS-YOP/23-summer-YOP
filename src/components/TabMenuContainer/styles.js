import styled from 'styled-components';
// import {
//   pointColor,
//   primaryColor,
//   secondaryColor,
//   whiteColor,
// } from '../../GlobalStyles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 320px;
  margin: 10px 0;
`;

export const TabNavBar = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
`;

export const TabMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 70px;
  height: 100%;
  border-radius: 12px 12px 0 0;
  background-color: #d9d9d9;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);

  &:hover {
    cursor: pointer;
    background-color: white;
  }
  &.active {
    background-color: white;
  }
`;

export const ContentBox = styled.div`
  margin: 0px;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 0 0 15px 15px;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);
`;
