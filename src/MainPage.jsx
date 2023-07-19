import { useState, useEffect } from 'react';
import { fabric } from 'fabric';

import { 
  Header,
  Body,
  Container, 
  LeftContainer, 
  Footer, 
  HeaderForeground,
  NavigationBar, 
  Nav1,
  Nav2,
  CanvasSpace,} from './components/MainPageStyles';
import { ButtonGroupContainer } from './components/ButtonGroupContainer';

function App() {
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const initCanvas = () =>
      new fabric.Canvas('canvas', {
        height: 500,
        width: 415,
        backgroundColor: 'white',
      });

    setCanvas(initCanvas());
  }, []);

  useEffect(() => {
    if (canvas) {
      // 생성한 Canvas 인스턴스를 DOM에 추가
      canvas.initialize('canvas');
    }
  }, [canvas]);

  

  return (
    <>
    <Container>
      <Header>
        
        <NavigationBar>
          <Nav1>
            Make your Polaroid!
          </Nav1>
          <Nav2>
            What is Y.O.P?
          </Nav2>
        </NavigationBar>
          
        
        <HeaderForeground>
        </HeaderForeground>
      </Header>
      <Body>
        <LeftContainer>
          <ButtonGroupContainer />
          <CanvasSpace>
            <canvas id="canvas" />
          </CanvasSpace>
        </LeftContainer>
      </Body>
      <Footer>
        
      </Footer>
    </Container>
    
    </>
  );
}

export default App;