import * as s from './styles';
import { fabric } from 'fabric';

export const Frames = ({ canvas }) => {
  const handleImageClick = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const url = e.target.src;
  //   fabric.Image.fromURL(imageUrl, function (img) {
  //     img.set({
  //       left: offsetX / img.width,
  //       top: offsetY / img.height,
  //     });
  //     ;
  //     const canvasWidth = canvas.getWidth();
  //     const canvasHeight = canvas.getHeight();
  //     img.scaleToWidth(canvasWidth);
  //     img.scaleToHeight(canvasHeight);

  //     canvas.add(img);
  //     img.sendToBack();
  //   });
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
  

  return (
    <>
      <s.FrameList>
        <img src='FrameWB3.svg' onClick={handleImageClick} />
      </s.FrameList>
    </>
  );
};
