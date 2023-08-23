import * as s from './styles';
import { fabric } from 'fabric';
import { useState, useEffect, useRef } from 'react';
import { ButtonGroupContainer } from '../ButtonGroupContainer';
import { TabMenuContainer } from '../TabMenuContainer';
import { SelectSizePage } from '../SelectSizePage';
import { Stickers } from '../TabMenuContainer/TabMenu/Stickers';
import { TextTab } from '../TabMenuContainer/TabMenu/TextTab';
import { ImageTab } from '../TabMenuContainer/TabMenu/ImageTab';
import { Frames } from '../TabMenuContainer/TabMenu/Frames';
import { ContextMenu } from '../ContextMenu';
import { PaintTab } from '../TabMenuContainer/TabMenu/PaintTab';
import { ReactComponent as Logo1 } from '../../assets/Logo/Logo1.svg';
import { ReactComponent as Logo2 } from '../../assets/Logo/Logo2.svg';
import Typewriter from 'typewriter-effect';
// import { jsPDF } from 'jspdf';
// import { CtrlKeyDown } from '../ContextMenu/CtrlKeyDown';
//import 'fabric-history';

export const HeaderNavContents = () => {
  const [canvas, setCanvas] = useState(null);
  const [toggleState, setToggleState] = useState(0);
  const [isSelectPage, setIsSelectPage] = useState(true);
  const [canvasSize, setCanvasSize] = useState([0, 0]);
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);

  const [isDisableButton, setIsDisableButton] = useState(true);

  //tabMenuDataList : tabMenuContainer의 props.
  const tabMenuDataList = [
    {
      id: 1,
      label: '이미지',
      function: () => (
        <ImageTab
          canvas={canvas}
          image={image}
          isDisableButton={isDisableButton}
        />
      ),
      level: 'top',
    },
    {
      id: 2,
      label: '그리기',
      function: () => <PaintTab canvas={canvas} />,
      level: 'top',
    },
    {
      id: 3,
      label: '텍스트',
      function: () => <TextTab canvas={canvas} />,
      level: 'top',
    },
    {
      id: 4,
      label: '스티커',
      function: () => <Stickers canvas={canvas} />,
      level: 'bottom',
    },
    {
      id: 5,
      label: '프레임',
      function: () => <Frames canvas={canvas} />,
      level: 'bottom',
    },
  ];

  fabric.Object.prototype.set({
    transparentCorners: 'false',
    borderColor: 'lightgrey', //컨트롤 박스 색깔
    cornerColor: 'grey',
    cornerStyle: 'circle',
    cornerSize: 9.3,
  });

  const topData = tabMenuDataList.filter((data) => data.level === 'top'); //위의 tabMenucontainer
  const bottomData = tabMenuDataList.filter((data) => data.level === 'bottom'); //아래 tabMenucontainer

  const isClickedOk = () => {
    setIsSelectPage(false);
  };

  const selectCanvasSize = (size) => {
    setCanvasSize(size);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  //handleChangedFile 함수 수정
  const handleChangedFile = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      const resultImage = reader.result;

      const loadImage = () => {
        fabric.Image.fromURL(resultImage.toString(), (imgFile) => {
          setImage(imgFile);
          imgFile.scaleToHeight(canvasSize[1]);
          imgFile.scaleToWidth(canvasSize[0]);
          canvas.backgroundImage = imgFile;
          canvas.renderAll();
          setIsDisableButton(false);
        });
      };
      loadImage();
    };
    console.log(canvas.getActiveObject());
  };

  const removeItem = () => {
    if (canvas.getActiveObject() !== null || undefined) {
      if (canvas.getActiveObject().type === 'activeSelection') {
        canvas.getActiveObject().forEachObject(function (o) {
          canvas.remove(o);
        });
        canvas.discardActiveObject().renderAll();
      } else {
        canvas.remove(canvas.getActiveObject());
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Delete') {
        removeItem();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [canvas]);

  useEffect(() => {
    const initCanvas = () =>
      new fabric.Canvas('canvas', {
        preserveObjectStacking: true,
        height: canvasSize[1],
        width: canvasSize[0],
        backgroundColor: 'white',
      });

    setCanvas(initCanvas());
    setIsDisableButton(true);
  }, [isSelectPage]);

  useEffect(() => {
    if (canvas) {
      // 생성한 Canvas 인스턴스를 DOM에 추가
      canvas.initialize('canvas');
      //canvas.historyInit();
    }
  }, [canvas]);

  //불러올때마다 이미지 대체
  useEffect(() => {
    handleChangedFile;
  }, [image]);

  // const moveBackgroundImage = (leftOffset, topOffset) => {
  //   if (canvas.backgroundImage) {
  //     // 현재 배경 이미지의 위치 가져오기
  //     const currentLeft = canvas.backgroundImage.left;
  //     const currentTop = canvas.backgroundImage.top;

  //     // 새로운 위치로 배경 이미지 이동
  //     canvas.backgroundImage.set({
  //       left: currentLeft + leftOffset,
  //       top: currentTop + topOffset,
  //     });

  //     canvas.renderAll();
  //   }
  // };

  // useEffect(() => {
  //   console.log(canvasSize);
  //   const initCanvas = () =>
  //     new fabric.Canvas('canvas', {
  //       height: canvasSize[1],
  //       width: canvasSize[0],
  //       backgroundColor: 'white',
  //     });
  //   });

  const bringToFront = () => {
    // 선택된 객체를 맨 앞으로 가져옴
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.bringToFront();
    } else {
      console.log('no object is selected');
    }
  };

  const sendToBack = () => {
    // 선택된 객체를 맨 뒤로 보냄
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.sendToBack();
    } else {
      console.log('no object is selected');
    }
  };

  const bringForward = () => {
    // 선택된 객체를 한 단계 앞으로 가져옴
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.bringForward();
    } else {
      console.log('no object is selected');
    }
  };

  const sendBackwards = () => {
    // 선택된 객체를 한 단계 뒤로 보냄
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.sendBackwards();
    } else {
      console.log('no object is selected');
    }
  };

  ////////////////컨텍스트 메뉴 ////////////////////

  const handleContextMenu = (e) => {
    e.preventDefault();
    // 마우스 우클릭 시 마우스 위치에 컨텍스트 메뉴를 표시하기 위한 정보 설정
    setContextMenuPos({ x: e.clientX, y: e.clientY });
    // 컨텍스트 메뉴를 표시
    setContextMenuVisible(true);
  };

  // 컨텍스트 메뉴를 닫는 함수
  const closeContextMenu = () => {
    setContextMenuVisible(false);
  };

  // 복사한 객체를 저장하는 state
  const [copiedObject, setCopiedObject] = useState(null); // 부모 컴포넌트에서 관리
  // console.log(copiedObject);
  // console.log('copiedObject');

  // 복사한 객체를 저장하는 함수
  const handleCopyObject = (object) => {
    setCopiedObject(object);
    console.log('object is copied', object);
  };

  // 붙여넣기 함수
  const handlePasteObject = (x, y) => {
    if (copiedObject !== null) {
      if (copiedObject.type !== 'activeSelection') {
        // 선택된 객체가 단일 객체인 경우
        if (copiedObject.type === 'image') {
          fabric.Image.fromObject(copiedObject, function (img) {
            img.set({
              left: x / 3 ,
              top: y / 3 ,

              evented: true,
              svgViewportTransformation: true,
            });
            canvas.add(img);
            canvas.renderAll();
          });
        } else if (copiedObject.type === 'i-text') {
          fabric.IText.fromObject(copiedObject, function (text) {
            text.set({
              left: x / 3,
              top: y / 3,
              evented: true,
              svgViewportTransformation: true,
            });
            canvas.add(text);
            canvas.renderAll();
          });
        }
        console.log('object is pasted', copiedObject);
      } else if (copiedObject.type === 'activeSelection') {
        // 선택된 객체가 다중 객체인 경우
        for (let i = 0; i < copiedObject.objects.length; i++) {
          {
            if (copiedObject.objects[i].type === 'image') {
              fabric.Image.fromObject(copiedObject.objects[i], function (img) {
                img.set({
                  left: x / 3,
                  top: y / 3 ,
                  evented: true,
                  svgViewportTransformation: true,
                });
                canvas.add(img);
                canvas.renderAll();
              });
            } else if (copiedObject.objects[i].type === 'i-text') {
              fabric.IText.fromObject(copiedObject.objects[i], function (text) {
                text.set({
                  left: x / 3,
                  top: y / 3,
                  evented: true,
                  svgViewportTransformation: true,
                });
                canvas.add(text);
                canvas.renderAll();
              });
            }
          }
        }
      }
      console.log('objects is pasted', copiedObject);
    } else {
      console.log('no object is copied');
    }
  };

  // 삭제 함수 1
  const removeObjects = (object) => {
    if (object) {
      if (object.type === 'image' || object.type === 'i-text') {
        // 선택된 객체가 단일 객체인 경우
        canvas.remove(canvas.getActiveObject());
        canvas.renderAll();
      } else if (object.type === 'activeSelection') {
        // 선택된 객체가 다중 객체인 경우
        canvas.remove(canvas.getActiveObject().toGroup());
        canvas.renderAll();
      }
    }
  };

  // 삭제 함수 2
  const handleDeleteObject = (object) => {
    // console.log(object);
    removeObjects(object);

    console.log('object is deleted', object);
    canvas.renderAll();
  };

  // 잘라내기 함수
  const handleCutObject = (object) => {
    setCopiedObject(object);
    removeObjects(object);
    console.log('object is cut', object);
    canvas.renderAll();
  };

  ///////////////////////////////////////////////

  ///////////////선택된 객체수/모든 객체수/////////

  // 선택된 객체 수를 저장하는 state
  const [selectedObjectCount, setSelectedObjectCount] = useState(0);
  // 캔버스에 추가된 객체 수를 저장하는 state
  const [numOfObjects, setNumOfObjectsCount] = useState(0);

  useEffect(() => {
    if (canvas) {
      // canvas에 객체 선택 변경 시 호출되는 이벤트 핸들러 등록
      const handleObjectSelectionChange = () => {
        const activeObjects = canvas.getActiveObjects();
        setSelectedObjectCount(activeObjects.length);
      };

      // canvas에 객체 추가/삭제 시 호출되는 이벤트 핸들러 등록
      const handleNumOfObjectsChange = () => {
        const getFrameObjects = () => {
          // canvas에 추가된 프레임 객체들
          if (canvas) {
            const frameObjects = canvas.getObjects().filter((object) => {
              return object.type === 'image' && object.class === 'frame';
              // 타입이 이미지고 클래스가 frame인 객체들만 가져옴
            });
            return frameObjects;
          }
          return [];
          // 프레임 객체를 배열로 반환
        };
        const objects = canvas.getObjects(); // canvas에 추가된 모든 객체들
        setNumOfObjectsCount(objects.length - getFrameObjects().length);
        // 프레임 객체를 제외한 객체 수를 state에 저장
      };

      // const onClickSave = () => {
      //   let imageData = canvas.toDataURL({
      //     format: 'png',
      //     quality: 1,
      //   });

      //   let img = new Image();
      //   img.src = imageData;

      //   document.body.appendChild(img);

      //   let doc = new jsPDF();
      // };

      canvas.on('selection:created', handleObjectSelectionChange);
      canvas.on('selection:updated', handleObjectSelectionChange);
      canvas.on('selection:cleared', () => setSelectedObjectCount(0));
      canvas.on('object:added', handleNumOfObjectsChange);
      canvas.on('object:removed', handleNumOfObjectsChange);
      canvas.on('object:cleared', () => setNumOfObjectsCount(0));

      return () => {
        canvas.off('selection:created', handleObjectSelectionChange);
        canvas.off('selection:updated', handleObjectSelectionChange);
        canvas.off('selection:cleared', () => setSelectedObjectCount(0));
        canvas.off('object:added', handleNumOfObjectsChange);
        canvas.off('object:removed', handleNumOfObjectsChange);
        canvas.off('object:cleared', () => setNumOfObjectsCount(0));
      };
    }
  }, [canvas]);

  ///////////////////////////////////////////////

  return (
    <>
      <s.Header>
        <s.NavigationBar>
          <s.LogoContainer>
            <Logo2 className='logo' />
            <p>YOP</p>
          </s.LogoContainer>
          <s.NavTabs
            className={toggleState === 0 ? 'active' : ''}
            onClick={() => toggleTab(0)}
          >
            {toggleState === 0 && (
              <>
                <img src='폴라로이드.jpg' height='60%' width='auto' />
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
                <img src='하트 보석.png' height='50%' width='auto' />
              </>
            )}
            What is YOP?
          </s.NavTabs>
        </s.NavigationBar>
      </s.Header>

      <s.Body>
        <s.Content className={toggleState === 0 ? 'active' : ''}>
          <s.ContentWrapper>
            {isSelectPage ? (
              <SelectSizePage
                isClickedOk={isClickedOk}
                selectCanvasSize={selectCanvasSize}
              />
            ) : (
              <>
                <s.LeftContainer
                  onContextMenu={handleContextMenu} // 컨텍스트 메뉴 표시 이벤트
                  onClick={closeContextMenu} // 컨텍스트 메뉴 영역 외 클릭 시 컨텍스트 메뉴 닫기
                >
                  {isContextMenuVisible && (
                  <ContextMenu
                    canvas={canvas}
                    x={contextMenuPos.x} // 컨텍스트 메뉴 표시 위치 x
                    y={contextMenuPos.y} // 컨텍스트 메뉴 표시 위치 y
                    onClose={closeContextMenu} // 컨텍스트 메뉴 닫기 이벤트
                    onCopy={handleCopyObject} // 복사 이벤트
                    onPaste={handlePasteObject} // 붙여넣기 이벤트
                    onCut={handleCutObject} // 잘라내기 이벤트
                    onDelete={handleDeleteObject} // 삭제 이벤트
                  />
                )}
                  {/* <s.ButtonGroupWrapper> */}
                  <ButtonGroupContainer
                    handleChangedFile={handleChangedFile}
                    setIsSelectPage={setIsSelectPage}
                    fileInputRef={fileInputRef}
                    canvas={canvas}
                  />
                  {/* </s.ButtonGroupWrapper> */}
                  <s.CanvasSpaceWrapper onContextMenu={ContextMenu}>
                    <s.CanvasSpace>
                      <canvas id='canvas' />
                      <>{/* <button onClick={removeItem}>delete</button> */}</>
                    </s.CanvasSpace>
                    <s.LayerBtnWrapper>
                      <>{/* <button onClick={onClickSave}>save</button> */}</>
                      <s.BringTo onClick={sendToBack}>맨 뒤로</s.BringTo>
                      <s.BringTo onClick={sendBackwards}>뒤로</s.BringTo>
                      <s.BringTo onClick={bringForward}>앞으로</s.BringTo>
                      <s.BringTo onClick={bringToFront}>맨 앞으로</s.BringTo>
                    </s.LayerBtnWrapper>
                    <h2>
                      선택된 오브젝트 : {selectedObjectCount}/{numOfObjects}
                    </h2>
                  </s.CanvasSpaceWrapper>
                </s.LeftContainer>
                <s.RightContainer>
                  <TabMenuContainer tabMenuDataList={topData} />

                  <TabMenuContainer tabMenuDataList={bottomData} />
                </s.RightContainer>
              </>
            )}
          </s.ContentWrapper>
        </s.Content>
        <s.Content className={toggleState === 1 ? 'active' : ''} id='info'>
        <s.ContentWrapper>
          <s.InfoContainer>
            <s.Title>온폴(Y.O.P) 프로젝트란?</s.Title>
              <s.Info>
                <Typewriter
                  // options={{ autoStart: true, loop: false }}
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("<br/>온폴(Your Own Polaroid)은 팀 오아시스의 온라인 폴라로이드 꾸미기 솔루션입니다. <br/> 온폴을 통해서, 인터넷과 브라우저만 있으면 온라인 상에서 폴라로이드 꾸미기가 가능합니다.<br/><br/> 회원가입도 비용 지불도 없이 온폴에서 제공하는 무궁무진한 오픈소스를 사용해보세요.<br/> 이미지를 규격에 맞춰 자르고 자유롭게 편집하여 당신만의 폴라로이드 사진을 직접 제작해보세요!")

                      .pauseFor(100)

                      .start();
                  }}
                  />
                </s.Info>
            </s.InfoContainer>
          </s.ContentWrapper>
        </s.Content>
      </s.Body>
    </>
  );
};