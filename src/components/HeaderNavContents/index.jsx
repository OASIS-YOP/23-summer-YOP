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

  //tabMenuDataList : tabMenuContainer의 props.
  const tabMenuDataList = [
    {
      id: 1,
      label: '이미지',
      function: () => <ImageTab canvas={canvas} image={image} />,
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
          canvas.add(imgFile);
          imgFile.sendToBack();
          canvas.renderAll();
        });
      };
      loadImage();
    };
  };
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

  // useEffect(() => {
  //   loadImage();
  // }, [image]);

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
  //       fabric.Image.fromURL(resultImage.toString(), (imgFile) => {
  //         imgFile.set ({ objectCaching: false, });
  //         imgFile.scaleToHeight(canvasSize[1]);
  //         imgFile.scaleToWidth(canvasSize[0]);
  //         // canvas.add(imgFile);
  //         canvas.backgroundImage = imgFile;
  //         canvas.renderAll();
  //       }, { crossOrigin: 'anonymous' }
  //       );
  //     };
  //     loadImage();
  //   };
  // };

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

  const bringToFront = () => {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.bringToFront();
    } else {
      console.log('no object selected');
    }
  };

  const sendToBack = () => {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.sendToBack();
    } else {
      console.log('no object selected');
    }
  };

  const bringForward = () => {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.bringForward();
    } else {
      console.log('no object selected');
    }
  };

  const sendBackwards = () => {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.sendBackwards();
    } else {
      console.log('no object selected');
    }
  };


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
                <s.LeftContainer>
                  <s.ButtonGroupWrapper>
                    <ButtonGroupContainer
                      handleChangedFile={handleChangedFile}
                      fileInputRef={fileInputRef}
                    />
                  </s.ButtonGroupWrapper>
                  <s.CanvasSpaceWrapper onContextMenu={ContextMenu}>
                    <s.CanvasSpace>
                      <canvas id='canvas'/>
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
