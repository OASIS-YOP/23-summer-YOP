import styled from 'styled-components';
// import {
//   pointColor,
//   //   primaryColor,
//   //   secondaryColor,
//   whiteColor,
// } from '../../GlobalStyles';

export const ContextMenuContainer = styled.div`
  position: relative;
`;

export const ContextMenu = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 5px;
  z-index: 1;

  & div {
    padding: 8px;
    cursor: pointer;
  }

  & div:hover {
    background-color: #f0f0f0;
  }

`;



