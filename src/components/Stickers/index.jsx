import * as s from './styles';
import { fabric } from 'fabric';
import {Component} from 'react';


export const Stickers = ({canvas}) => {

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

class Stickers extends Component {

  handleImageClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const imageUrl = event.target.src;
    const { canvas } = this.props;

    fabric.Image.fromURL(imageUrl, function (img) {
      img.set({
        left: offsetX - img.width / 1000,
        top: offsetY - img.height / 1000,
        evented: true,
      });

      const canvasWidth = canvas.getWidth();
      const canvasHeight = canvas.getHeight();
      const scaleRatio = 0.25; // 이미지 크기를 조절할 비율
      img.scaleToWidth(canvasWidth * scaleRatio);
      img.scaleToHeight(canvasHeight * scaleRatio);
      canvas.add(img);
    });
  };
  
  render() {
    return (
      <>
        <s.StickerList>
          <img src='GoodVibesST.svg' onClick={this.handleImageClick} />
          <img src='HelloST.svg' onClick={this.handleImageClick} />
        </s.StickerList>
      </>
    );
  }
}

export default Stickers;