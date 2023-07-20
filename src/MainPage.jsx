import { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import { fabric } from 'fabric';

import { 
  // Header,
  // Body,
  Container, 
  // LeftContainer, 
  Footer, 
  // HeaderForeground,
  // NavigationBar, 
  // Nav1,
  // Nav2,
  // CanvasSpace,
} from './components/MainPageStyles';
import { NavigatorBar } from './components/NavigatorBar';

function App() {

  return (
    <>
    <Container>
      <NavigatorBar/>
      {/* <Header>
        <NavigatorBar/>
      {/*         
        <NavigationBar className='nav-menu'>
          <Nav1>
            Make Own Polaroid!
          </Nav1>
          <Nav2>
            What is Y.O.P?
          </Nav2>
        </NavigationBar>
           */}
        
        {/* <HeaderForeground>
        </HeaderForeground> */}
      {/* </Header> */}
      <Footer>
        
      </Footer>
    </Container>
    
    </>
  );
}

export default App;