import { useState, useEffect } from 'react';
import { fabric } from 'fabric';

import { 
  Header,
  Container, 
  EditorSpace, 
  EditorTools, 
  Footer, 
  HeaderBackground, 
  HeaderForeground,
  NavigationBar, 
  NavFirst,
  NavSecond,
  CanvasSpace,
  EditorToolDetails} from './components/MainPageStyles';

function App() {
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const initCanvas = () =>
      new fabric.Canvas('canvas', {
        height: 700,
        width: 700,
        backgroundColor: 'gray',
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
        <HeaderBackground>
          <NavigationBar>
            <NavFirst>
              Make your Folaroid!
            </NavFirst>
            <NavSecond>
              What is Y.O.P?
            </NavSecond>
          </NavigationBar>
          <HeaderForeground>
          </HeaderForeground>
        </HeaderBackground>
      </Header>
      <EditorSpace>
        <EditorTools>

        </EditorTools>
        <CanvasSpace>
          <canvas id="canvas" />
        </CanvasSpace>
        <EditorToolDetails>

        </EditorToolDetails>
      </EditorSpace>
      <Footer>
        
      </Footer>
    </Container>
    </>
  );
}

export default App;