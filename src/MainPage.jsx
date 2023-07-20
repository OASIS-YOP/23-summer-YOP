import { useState, useEffect } from 'react';
import { fabric } from 'fabric';

import { 
  Container, 
  Footer, } from './components/MainPageStyles';
import { ButtonGroupContainer } from './components/ButtonGroupContainer';
import { NavigatorBar } from './components/NavigatorBar';

function App() {


  return (
    <>
    <Container>
      <NavigatorBar/>
      <Footer>
      </Footer>
    </Container>
    
    </>
  );
}

export default App;