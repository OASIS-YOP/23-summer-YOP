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

      img.scaleToWidth(100);
      // img.scaleToHeight();
      canvas.add(img);
      //ghost문제때문에 주석처리했습니다.
      // canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
    });
  };

  return (
    <s.StickerList>
      <img src='GoodVibesST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='HelloST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='BFF_ST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='Love_ST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='SprinkleYellow_ST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='FlowerYellow_ST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='Love_ST2.svg' onClick={(e) => handleImageClick(e)} />
      <img src='LYS_ST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='New_ST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='MonitorCRT_ST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='MonitorCRTPac-Man_ST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='MonitorCRTFigma_ST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='MonitorFlatscreen_ST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='MonitorFlatscreenFigma_ST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='MonitorFlatscreenPac-Man_ST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='PropertyBeige_ST.svg' onClick={(e) => handleImageClick(e)} />
      <img src='PropertyGray_ST.svg' onClick={(e) => handleImageClick(e)} />
    </s.StickerList>
  );
};
