import * as s from './styles';
import { fabric } from 'fabric';

export const Frames = ({ canvas }) => {
  const handleImageClick = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const imageUrl = e.target.src;

    fabric.Image.fromURL(imageUrl, function (img) {
      img.set({
        left: offsetX / img.width,
        top: offsetY / img.height,
      });
      1;
      const canvasWidth = canvas.getWidth();
      const canvasHeight = canvas.getHeight();
      img.scaleToWidth(canvasWidth);
      img.scaleToHeight(canvasHeight);

      canvas.add(img);
      img.sendToBack();
    });
  };

  return (
    <>
      <s.FrameList>
        <img src='FrameWB3.svg' onClick={handleImageClick} />
      </s.FrameList>
    </>
  );
};
