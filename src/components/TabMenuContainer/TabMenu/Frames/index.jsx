import * as s from './styles';
import { fabric } from 'fabric';

export const Frames = ({ canvas }) => {

  /////// 프레임 이미지 리스트 데이타셋 ///////
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


 /////// 프레임 리스트에 프레임 이미지 불러오는 함수 ///////
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


  /////// 프레임 이미지 클릭했을 때 발생 이벤트 ///////
  const handleImageClick = (e) => {
    // 프레임 이미지 클릭 시 캔버스에 추가되는 함수
    const { offsetX, offsetY } = e.nativeEvent;
    const url = e.target.src;
   
      fabric.Image.fromURL(url, function (img) {
        const canvasWidth = canvas.getWidth();
        const canvasHeight = canvas.getHeight();
        img.set({
          left: offsetX / img.width,
          top: offsetY / img.height,
          class: 'frame', // 이미지에 프레임 클래스 부여
        });
  
        img.hasControls = false;
        img.hasBorders = false;
        img.lockMovementX = true;
        img.selectable = false;
        img.evented = false;
        
        img.scaleToWidth(canvasWidth);
        img.scaleToHeight(canvasHeight);

        removeFrames(); // 프레임 이미지 추가 전에 기존 프레임 이미지 삭제(프레임이 중복으로 쌓이는 버그 방지)

        canvas.add(img);
        img.sendToBack(); // 항상 다른 오브젝트 뒤로 추가되게
      });
      canvas.renderAll();
    }


    /////// 프레임 이미지 삭제하는 함수 ///////
    const removeFrames = () => {
      const objects = canvas.getObjects();
      const objectsToRemove = []; // 삭제할 오브젝트들을 담을 배열

      objects.forEach((object) => {
        if (object.type === 'image' && object.class === 'frame') {
          objectsToRemove.push(object);
        }
      }); // 프레임 클래스를 가진 오브젝트들을 찾아서 배열에 담음
    
      objectsToRemove.forEach((object) => {
        canvas.remove(object);
      }); // 배열에 담긴 오브젝트들을 삭제
      canvas.renderAll();
    }


  /////// 캔버스 크기에 따라 프레임 리스트 렌더링하는 함수 ///////
  const renderFrameList = () => {
    if (canvas.width === 330 && canvas.height === 510 ) {
          return (
            <s.FrameList>
              <img
                className='noneFrame'
                src='NoneFrame1.svg'
                onClick={() => removeFrames() } 
              />
              { frameList1() }
            </s.FrameList>
          );
        } else if (canvas.width === 420 && canvas.height === 510 ) {
          return (
            <s.FrameList>
              <img
                className='noneFrame'
                src='NoneFrame2.svg'
                onClick={() => removeFrames() } 
              />
              { frameList2() }
            </s.FrameList>
          );
        } else {
          return (
            <s.FrameList>
              <img
                className='noneFrame'
                src='NoneFrame3.svg'
                onClick={() => removeFrames() } 
              />
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
