import * as s from './styles';
import { fabric } from 'fabric';

// export const Stickers = ({canvas}) => {

//   const addSticker = () =>{

//     let url = 'GoodVibesST.svg';
//     fabric.Image.fromURL(url, function (img) {
//       const scale = 50 / Math.max(img.width, img.height); // 원하는 크기에 맞도록 비율 계산

//       img.set({
//         left: 90,
//         top: 90,
//         originX: 'center',
//         originY: 'center',
//         scaleX: scale,
//         scaleY: scale,
//       });

//       canvas.add(img);
//       canvas.renderAll();
//     });

//   };
//   return (
//     <>
//       <s.StickerList>
//         <img onClick = {addSticker} src='GoodVibesST.svg' />
//         <img src='HelloST.svg' />
//       </s.StickerList>
//     </>

export const Stickers = ({ canvas }) => {
  const handleImageClick = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const imageUrl = e.target.src;

    fabric.Image.fromURL(imageUrl, function (img) {
      img.set({
        left: offsetX - img.width / 1000,
        top: offsetY - img.height / 1000,
        evented: true,
        svgViewportTransformation: true,
      });

      const canvasWidth = canvas.getWidth();
      const canvasHeight = canvas.getHeight();
      const scaleRatio = 0.25; // 이미지 크기를 조절할 비율
      img.scaleToWidth(canvasWidth * scaleRatio);
      img.scaleToHeight(canvasHeight * scaleRatio);
      canvas.add(img);
      //ghost문제때문에 주석처리했습니다.
      // canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
    });
  };

  return (
    <s.StickerList>
      <img src='GoodVibesST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='HelloST.svg' onClick={(e) => handleImageClick(e)} />
    </s.StickerList>
  );
};
