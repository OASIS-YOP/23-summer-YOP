import * as s from './styles';
import { fabric } from 'fabric';
import { useState, useEffect, useRef } from 'react';
import { ButtonGroupContainer } from '../ButtonGroupContainer';
import { TabMenuContainer } from '../TabMenuContainer';
import { SelectSizePage } from '../SelectSizePage';
import { Stickers } from '../TabMenuContainer/TabMenu/Stickers';
import { TextTab } from '../TabMenuContainer/TabMenu/TextTab';
// import { ImageTab } from '../TabMenuContainer/TabMenu/ImageTab';
import { Frames } from '../TabMenuContainer/TabMenu/Frames';
import { ContextMenu } from '../ContextMenu';
import '@fontsource/kaushan-script';

//crop
// import Cropper from 'react-cropper';
// import 'cropperjs/dist/cropper.css';

export const HeaderNavContents = () => {
  const [canvas, setCanvas] = useState(null);
  const [toggleState, setToggleState] = useState(0);
  const [isSelectPage, setIsSelectPage] = useState(true);
  const [canvasSize, setCanvasSize] = useState([0, 0]);
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);

  //tabMenuDataList : tabMenuContainer의 props.
  const tabMenuDataList = [
    {
      id: 1,
      label: '이미지',
      // function: () => <ImageTab canvas={canvas} image={image} />,
      level: 'top',
    },
    {
      id: 2,
      label: '그리기',
      function: [],
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
        });
      };
      loadImage();
    };
  };

  // const deleteIcon =
  //   "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

  // const deleteImg = document.createElement('img');
  // deleteImg.src = deleteIcon;

  // fabric.Object.prototype.transparentCorners = false;
  // fabric.Object.prototype.cornerColor = 'blue';
  // fabric.Object.prototype.cornerStyle = 'circle';

  // const deleteObject = (eventData, transform) => {
  //   const target = transform.target;
  //   const canvas = target.canvas;
  //   canvas.remove(target);
  //   canvas.requestRenderAll();
  // };
  // const renderIcon = (icon) => {
  //   return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  //     const size = renderIcon.cornerSize;
  //     ctx.save();
  //     ctx.translate(left, top);
  //     ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  //     ctx.drawImage(img, -size / 2, -size / 2, size, size);
  //     ctx.restore();
  //   };
  // };
  // fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  //   x: 0.5,
  //   y: -0.5,
  //   offsetY: 16,
  //   cursorStyle: 'pointer',
  //   mouseUpHandler: deleteObject,
  //   render: renderIcon(deleteImg),
  //   cornerSize: 24,
  // });

  const removeItem = () => {
    canvas.remove(canvas.getActiveObject());
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

  // const handleChangedFile = (e) => {
  //   const reader = new FileReader();
  //   if (e.target.files) {
  //     //선택한 img파일의 URL을 읽어옴
  //     reader.readAsDataURL(e.target.files[0]);
  //     console.log(reader);
  //   }
  //   reader.onloadend = () => {
  //     //선택한 img파일의 base64
  //     const resultImage = reader.result;
  //     const loadImage = () => {
  //       fabric.Image.fromURL(
  //         resultImage.toString(),
  //         (imgFile) => {
  //           imgFile.set({ objectCaching: false });
  //           imgFile.scaleToHeight(canvasSize[1]);
  //           imgFile.scaleToWidth(canvasSize[0]);
  //           // canvas.add(imgFile);
  //           canvas.backgroundImage = imgFile;
  //           canvas.renderAll();
  //         },
  //         { crossOrigin: 'anonymous' }
  //       );
  //     };
  //     loadImage();
  //   };
  // };

  useEffect(() => {
    const initCanvas = () =>
      new fabric.Canvas('canvas', {
        preserveObjectStacking: true,
        height: canvasSize[1],
        width: canvasSize[0],
        backgroundColor: 'white',
      });

    setCanvas(initCanvas());
  }, [isSelectPage]);

  useEffect(() => {
    if (canvas) {
      // 생성한 Canvas 인스턴스를 DOM에 추가
      canvas.initialize('canvas');
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
  console.log(copiedObject);
  console.log('copiedObject');

  // 복사한 객체를 저장하는 함수
  const handleCopyObject = (object) => {
    setCopiedObject(object);
  };

  // 붙여넣기 함수
  const handlePasteObject = (x, y) => {
    if (copiedObject !== null) {
      if (copiedObject.type === 'image') {
        // 선택된 객체가 단일 객체인 경우
        fabric.Image.fromObject(copiedObject, function (img) {
          img.set({
            left: x / 2,
            top: y / 2,
            evented: true,
            svgViewportTransformation: true,
          });
          canvas.add(img);
          canvas.renderAll();
        });
      } else if (copiedObject.type === 'activeSelection') {
        // 선택된 객체가 다중 객체인 경우
        for (let i = 0; i < copiedObject.objects.length; i++) {
          {
            fabric.Image.fromObject(copiedObject.objects[i], function (img) {
              img.set({
                left: x / 2,
                top: y / 2,
                evented: true,
                svgViewportTransformation: true,
              });
              canvas.add(img);
              canvas.renderAll();
            });
          }
        }
      }
    } else {
      console.log('no object is coppied');
    }
  };

  // 삭제 함수 1
  const removeObjects = (object) => {
    if (object) {
      if (object.type === 'image') {
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
    console.log(object);
    removeObjects(object);
    canvas.renderAll();
  };

  // 잘라내기 함수
  const handleCutObject = (object) => {
    setCopiedObject(object);
    removeObjects(object);
    canvas.renderAll();
  };

  ///////////////////////////////////////////////

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
                <img src='폴라로이드.jpg' height='53em' width='53em' />
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
                <img src='하트 보석.png' height='50em' width='50em' />
              </>
            )}
            What is YOP?
          </s.NavTabs>
        </s.NavigationBar>
      </s.Header>

      <s.Body
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
        <s.Content className={toggleState === 0 ? 'active' : ''}>
          <s.ContentWrapper>
            {isSelectPage ? (
              <SelectSizePage
                isClickedOk={isClickedOk}
                selectCanvasSize={selectCanvasSize}
              />
            ) : (
              <>
                <s.LeftContainer>
                  <s.ButtonGroupWrapper>
                    <ButtonGroupContainer
                      handleChangedFile={handleChangedFile}
                      fileInputRef={fileInputRef}
                      canvas={canvas}
                    />
                  </s.ButtonGroupWrapper>
                  <s.CanvasSpaceWrapper onContextMenu={ContextMenu}>
                    <s.CanvasSpace>
                      <canvas id='canvas' />
                      <>
                        <button onClick={removeItem}>delete</button>
                      </>
                    </s.CanvasSpace>
                    <s.LayerBtnWrapper>
                      <s.BringTo onClick={sendToBack}>맨 뒤로</s.BringTo>
                      <s.BringTo onClick={sendBackwards}>뒤로</s.BringTo>
                      <s.BringTo onClick={bringForward}>앞으로</s.BringTo>
                      <s.BringTo onClick={bringToFront}>맨 앞으로</s.BringTo>
                    </s.LayerBtnWrapper>
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
        <s.Content className={toggleState === 1 ? 'active' : ''}>
          <s.LeftContainer>설명</s.LeftContainer>
        </s.Content>
      </s.Body>
    </>
  );
};
