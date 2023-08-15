import styled from 'styled-components';
import // pointColor,
//   primaryColor,
//   secondaryColor,
// whiteColor,
'../../../../GlobalStyles';

export const FrameList = styled.div`
  display: block;
  text-align: center;
  width: 100%;

  & img {
    display: inline-block;
    height: 'auto';
    width: 30%;
    margin: 10px;
    background-color: #d9d9d9;
  }

  & img:hover {
    cursor: pointer;
    border: 4px solid #7198FF;
  }

`;

