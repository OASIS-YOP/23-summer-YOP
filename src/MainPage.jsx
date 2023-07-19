import { useState, useEffect } from 'react';
import { fabric } from 'fabric';

import {
  Header,
  Body,
  Container,
  LeftContainer,
  RightContainer,
  Footer,
  HeaderForeground,
  NavigationBar,
  Nav1,
  Nav2,
  CanvasSpace,
} from './components/MainPageStyles';
import { ButtonGroupContainer } from './components/ButtonGroupContainer';
import { TabMenuContainer } from './components/TabMenuContainer';

function App() {
  const [canvas, setCanvas] = useState(null);

  const tabMenuLabelList = ['편집', '필터', '테스트'];
  const tabMenuLabelList2 = ['스티커', '프레임'];

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
            <Nav1>Make your Polaroid!</Nav1>
            <Nav2>What is Y.O.P?</Nav2>
          </NavigationBar>

          <HeaderForeground></HeaderForeground>
        </Header>
        <Body>
          <LeftContainer>
            <ButtonGroupContainer />
            <CanvasSpace>
              <canvas id='canvas' />
            </CanvasSpace>
          </LeftContainer>
          <RightContainer>
            <TabMenuContainer tabMenuLabelList={tabMenuLabelList} />
            <TabMenuContainer tabMenuLabelList={tabMenuLabelList2} />
          </RightContainer>
        </Body>

        <Footer></Footer>
      </Container>
    </>
  );
}

export default App;
