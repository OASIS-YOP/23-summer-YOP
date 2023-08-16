import * as s from './styles';
import { fabric } from 'fabric';

export const Frames = ({ canvas }) => {
  const frameData = [
    { id: 1,
      src: [
        'FrameBL1.svg', 
        'FrameWH1.svg', 
        'FramePointColor1.svg',
        'FrameLP1.svg',
        ] 
    },
    { id: 2,
      src: [
        'FrameBL2.svg',
        'FrameWH2.svg',
        'FramePointColor2.svg',
        'FrameLP2.svg',
      ] 
    },
    { id: 3,
      src: [
        'FrameBL3.svg', 
        'FrameWH3.svg', 
        'FramePointColor3.svg',
        'FrameLP3.svg',
      ] 
    },
  ];

  const frameList1 = () => {
    return frameData[0].src.map((src, index) => (
      <img
        key={index}
        src={src}
        onClick={(e) => handleImageClick(e, 0, index)} // handleImageClick에 프레임 인덱스도 전달
      />
    ));
  };

  const frameList2 = () => {
    return frameData[1].src.map((src, index) => (
      <img
        key={index}
        src={src}
        onClick={(e) => handleImageClick(e, 1, index)} // handleImageClick에 프레임 인덱스도 전달
      />
    ));
  };

  const frameList3 = () => {
    return frameData[2].src.map((src, index) => (
      <img
        key={index}
        src={src}
        onClick={(e) => handleImageClick(e, 2, index)} // handleImageClick에 프레임 인덱스도 전달
      />
    ));
  };

  const handleImageClick = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const url = e.target.src;
   
      fabric.Image.fromURL(url, function (img) {
        //const scale = 50 / Math.max(img.width, img.height); // 원하는 크기에 맞도록 비율 계산
        const canvasWidth = canvas.getWidth();
        const canvasHeight = canvas.getHeight();
        img.set({
          left: offsetX / img.width,
          top: offsetY / img.height,
        });
  
        img.hasControls = false;
        img.hasBorders = false;
        img.lockMovementX = true;
        img.selectable = false;
        img.evented = false;
        
        img.scaleToWidth(canvasWidth);
        img.scaleToHeight(canvasHeight);
        canvas.add(img);
        canvas.renderAll();
      });
    }

    const renderFrameList = () => {
      if (canvas.width === 330 && canvas.height === 510 ) {
            return (
              <s.FrameList>
                { frameList1() }
              </s.FrameList>
            );
          } else if (canvas.width === 420 && canvas.height === 510 ) {
            return (
              <s.FrameList>
                { frameList2() }
              </s.FrameList>
            );
          } else {
            return (
              <s.FrameList>
                { frameList3() }
              </s.FrameList>
            );
          }
    };

  return (
    <div>
        {renderFrameList()}
    </div>
  );
};
