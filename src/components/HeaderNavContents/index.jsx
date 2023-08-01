import * as s from './styles';
import { fabric } from 'fabric';
import { useState, useEffect, useRef } from 'react';
import { ButtonGroupContainer } from '../ButtonGroupContainer';
import { TabMenuContainer } from '../TabMenuContainer';
import { SelectSizePage } from '../SelectSizePage';
import { Stickers } from '../Stickers';
import { TextTab } from '../TextTab';

export const HeaderNavContents = () => {
  const [canvas, setCanvas] = useState(null);
  const [toggleState, setToggleState] = useState(0);
  const [isSelectPage, setIsSelectPage] = useState(true);
  const [canvasSize, setCanvasSize] = useState([0, 0]);
  const fileInputRef = useRef(null);

  //crop part

  //좌우반전 part

  //filter part
  const filterImage = () => {};

  const applyFilter = (filter) => {
    const obj = canvas.getActiveObject();
    obj.filters.push(filter);
    obj.applyFilters();
    canvas.renderAll();
  };

  const cropImage = () => {
    canvas.set({
      left: 80,
      top: 80,
      clipPath: new fabric.Rect({
        originX: 'center',
        originY: 'center',
      }),
    });
  };

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
      function: [TextTab(canvas)],
      level: 'top',
    },
    {
      id: 4,
      label: '스티커',
      function: [Stickers()],
      level: 'bottom',
    },
    {
      id: 5,
      label: '프레임',
      function: [],
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
          canvas.backgroundImage = imgFile;
          imgFile.scaleToHeight(canvasSize[1]);
          imgFile.scaleToWidth(canvasSize[0]);
          canvas.add(imgFile);
          canvas.renderAll();
        });
      };
      loadImage();
    };
  };

  useEffect(() => {
    console.log(canvasSize);
    const initCanvas = () =>
      new fabric.Canvas('canvas', {
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
                        <button onClick={cropImage}>crop</button>
                        <button onClick={filterImage}>filter</button>{' '}
                        <>
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
                      </>
                      <canvas id='canvas' />
                    </s.CanvasSpace>
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
