import * as s from './styles';
import { fabric } from 'fabric';
import { useState, useEffect, useRef, createRef } from 'react';
import { ButtonGroupContainer } from '../ButtonGroupContainer';
import { TabMenuContainer } from '../TabMenuContainer';
import { SelectSizePage } from '../SelectSizePage';
import Stickers from '../Stickers';
import { TextTab } from '../TextTab';
import Frames from '../Frames';

//crop
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

export const HeaderNavContents = () => {
  const [canvas, setCanvas] = useState(null);
  const [toggleState, setToggleState] = useState(0);
  const [isSelectPage, setIsSelectPage] = useState(true);
  const [canvasSize, setCanvasSize] = useState([0, 0]);
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const [isCrop, setIsCrop] = useState(false);
  const [cropData, setCropData] = useState('#');
  const cropperRef = createRef(null);

  const [isReversed, setIsReversed] = useState(false);
  const [reverseXToggle, setReverseXToggle] = useState(true);
  const [reverseYToggle, setReverseYToggle] = useState(true);

  //좌우반전 part

  //filter part
  const applyFilter = (filter) => {
    image.filters.push(filter);
    image.applyFilters();
    canvas.renderAll();
  };

  const cropImage = () => {};

  //tabMenuDataList : tabMenuContainer의 props.
  const tabMenuDataList = [
    {
      id: 1,
      label: '이미지',
      function: [cropImage],
      level: 'top',
    },
    {
      id: 2,
      label: '그리기',
      function: [applyFilter],
      level: 'top',
    },
    {
      id: 3,
      label: '텍스트',
      function:  () => <TextTab canvas={canvas} />,
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
      function: () => <Frames canvas={canvas}/>,
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
      setImage(resultImage);
      const loadImage = () => {
        fabric.Image.fromURL(resultImage.toString(), (imgFile) => {
          setImage(imgFile);
          imgFile.scaleToHeight(canvasSize[1]);
          imgFile.scaleToWidth(canvasSize[0]);
          canvas.add(imgFile);
          canvas.renderAll();
        });
      };
      loadImage();
    };
  };

  const reverseX = () => {
    image.set('flipX', reverseXToggle);
    setReverseXToggle((prev) => !prev);
    canvas.renderAll();
    console.log('반전 성공');
  };
  const reverseY = () => {
    image.set('flipY', reverseYToggle);
    setReverseYToggle((prev) => !prev);
    canvas.renderAll();
    console.log('반전 성공');
  };

  //crop part

  // const getCropData = () => {
  //   if (typeof cropperRef.current?.cropper !== 'undefined') {
  //     setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
  //   }
  //   canvas.add(cropData);
  //   canvas.renderAll();
  // };

  // const handleChangedFile = (e) => {
  //   e.preventDefault();
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
  //         canvas.backgroundImage = imgFile;
  //         imgFile.scaleToHeight(canvasSize[1]);
  //         imgFile.scaleToWidth(canvasSize[0]);
  //         canvas.add(imgFile);
  //         canvas.renderAll();
  //       });
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

  const handleChangedFile = (e) => {
    const reader = new FileReader();
    if (e.target.files) {
      //선택한 img파일의 URL을 읽어옴
      reader.readAsDataURL(e.target.files[0]);
      console.log(reader);
    }
    reader.onloadend = () => {
      //선택한 img파일의 base64
      const resultImage = reader.result;
      const loadImage = () => {
        fabric.Image.fromURL(resultImage.toString(), (imgFile) => {
          imgFile.set ({ objectCaching: false, });
          imgFile.scaleToHeight(canvasSize[1]);
          imgFile.scaleToWidth(canvasSize[0]);
          // canvas.add(imgFile);
          canvas.backgroundImage = imgFile;
          canvas.renderAll();
        }, { crossOrigin: 'anonymous' }
        );
      };
      loadImage();
    };
  };

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
    if(activeObject) {
      activeObject.bringToFront();
    } else {
      console.log("no object selected");
    }
  };

  const sendToBack = () => {
    const activeObject = canvas.getActiveObject(); 
    if(activeObject) {
    activeObject.sendToBack();
    } else {
      console.log("no object selected");
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
                  <s.CanvasSpaceWrapper>
                    <s.CanvasSpace>
                      <>
                        <button onClick={() => setIsCrop(true)}>crop</button>
                        <button
                        // onClick={getCropData}
                        >
                          ok
                        </button>
                        <button onClick={reverseX}>reverseX</button>
                        <button onClick={reverseY}>reverseY</button>

                        <button
                          onClick={() =>
                            applyFilter(new fabric.Image.filters.Sepia())
                          }
                        >
                          sepia
                        </button>
                        <button
                          onClick={() =>
                            applyFilter(new fabric.Image.filters.Brownie())
                          }
                        >
                          Brownie
                        </button>
                        <button
                          onClick={() =>
                            applyFilter(new fabric.Image.filters.Grayscale())
                          }
                        >
                          Gray
                        </button>
                      </>

                      <canvas
                        id='canvas'
                        transform={isReversed ? 'scaleX(-1)' : ''}
                      />
                      {/* {isCrop && (
                        <>
                          <canvas id='canvas' ref={cropperRef} />
                          <Cropper
                            ref={cropperRef}
                            style={{ height: 400, width: '100%' }}
                            zoomTo={0.5}
                            initialAspectRatio={1}
                            src={image}
                            viewMode={1}
                            minCropBoxHeight={10}
                            minCropBoxWidth={10}
                            background={false}
                            responsive={true}
                            autoCropArea={1}
                            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                            guides={true}
                          />
                        </>
                      )} */}
                    </s.CanvasSpace>
                    <s.LayerBtnWrapper>
                      <s.BringTo onClick={sendToBack}>맨 뒤로</s.BringTo>
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
