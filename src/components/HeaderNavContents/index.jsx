import * as s from './styles';
import { fabric } from 'fabric';
import { useState, useEffect } from 'react';
import { ButtonGroupContainer } from '../ButtonGroupContainer';
import { TabMenuContainer } from '../TabMenuContainer';


export const HeaderNavContents = () => {
    const [canvas, setCanvas] = useState(null);

    const tabMenuLabelList = ['편집', '필터', '테스트'];
    const tabMenuLabelList2 = ['스티커', '프레임'];

    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
      setToggleState(index);
    }

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
        <s.Header>
          <s.NavigationBar>
            <s.NavTabs
              className={toggleState === 0 ? 'active' : ''}
              onClick={() => toggleTab(0)}
              >
              {toggleState === 0 && (
                <>
                  <img
                  src='폴라로이드.jpg'
                  height='53em'
                  width='53em'  
                  />
                </>
              )}
              Make Your Polaroid
            </s.NavTabs>
            <s.NavTabs
            className={toggleState === 1 ? 'active' : ''}
            onClick={() => toggleTab(1)}
            >
              {toggleState === 1 && (
                <>
                  <img
                  src='하트 보석.png'
                  height='50em'
                  width='50em'
                  />
                </>
              )}
              What is YOP?
            </s.NavTabs>
          </s.NavigationBar>
        </s.Header>

        <s.Body>
          <s.Content className={toggleState === 0 ? 'active' : ''}>
            <s.ContentWrapper>
              <s.LeftContainer>
                  <ButtonGroupContainer />
                  <s.CanvasSpace>
                    <canvas id="canvas" />
                  </s.CanvasSpace>
              </s.LeftContainer>
              <s.RightContainer>
                <TabMenuContainer tabMenuLabelList={tabMenuLabelList} />
                <TabMenuContainer tabMenuLabelList={tabMenuLabelList2} />
              </s.RightContainer>
            </s.ContentWrapper>
          </s.Content>
          <s.Content className={toggleState === 1 ? 'active' : ''}>
              <s.LeftContainer>
                  설명
              </s.LeftContainer>
          </s.Content>
        </s.Body>  
      </>
    );
  };