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

  width: fit-content;
  height: 34vh;
  
  margin: 10px 0;
`;

  export const TabNavBar = styled.div`
    display: flex;
    
    width: 25vh;
    height: 5vh;
  `;

    export const TabMenu = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;

      width: 10vh;
      height: 100%;

      margin: 0;
      padding: 0;

      background-color: #d9d9d9;
      box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);
      border-radius: 2vh 2vh 0 0;
      
      font-size: 2vh;

        &:hover {
          background-color: white;
          cursor: pointer;
        }
        &.active {
          background-color: white;
        }
    `;

  export const ContentBox = styled.div`
    display: none;
    overflow-y: auto;
    overflow-x: hidden;

    width: 90%;
    height: 100%;

    margin: 0px;
    padding: 15px;

    background-color: white;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);
    border-radius: 0 0 2vh 2vh;
    
    font-size: 2vh;
      
    &.active{
      display: block;
      align-items: center;
      justify-content: center;

      overflow-y: auto;
      overflow-x: hidden;

      margin: 0px;
      padding: 15px;

      width: 40vh;
      height: 100%;

      background-color: white;
      border-radius: 0 0 2vh 2vh;
      box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 25%);
    }
  `;
