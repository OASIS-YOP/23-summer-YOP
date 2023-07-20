import * as s from './styles';
// import * as s from '../MainPageStyles'
import "./NavigatorBar.css";
import { ButtonGroupContainer } from '../ButtonGroupContainer';
import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { TabMenuContainer } from '../TabMenuContainer';


export const NavigatorBar = () => {
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
          {/* <s.HeaderForeground> */}
            <s.NavigationBar className="bloc-nav-tabs">
                  <div
                    className={toggleState === 0 ? "nav-tabs active-nav-tabs" : "nav-tabs"}
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
                      Make your Polaroid
                    </div>
                    <div
                    className={toggleState === 1 ? "nav-tabs active-nav-tabs" : "nav-tabs"}
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
                      What is YOP?</div>
            </s.NavigationBar>
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
          {/* </s.HeaderForeground> */}
        </s.Header>
        <s.Body>
          <div className={toggleState === 0 ? "content active-content" : "content"}>
            <div className='content-wrapper'>
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

            </div>
          </div>
          <div className={toggleState === 1 ? "content active-content" : "content"}>
              <s.LeftContainer>
                  설명
              </s.LeftContainer>
          </div>
        </s.Body>  
      </>
    );
  };