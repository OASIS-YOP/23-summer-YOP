import * as s from './styles';
import { fabric } from 'fabric';
import {Component} from 'react';



class Frames extends Component {

  handleImageClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const imageUrl = event.target.src;
    const { canvas } = this.props;

    fabric.Image.fromURL(imageUrl, function (img) {
      img.set({
        left: offsetX - img.width / 1000,
        top: offsetY - img.height / 1000,
      });

      const canvasWidth = canvas.getWidth();
      const canvasHeight = canvas.getHeight();
      const scaleRatio = 0.25; // 이미지 크기를 조절할 비율
      img.scaleToWidth(canvasWidth * scaleRatio);
      img.scaleToHeight(canvasHeight * scaleRatio);
      
      canvas.add(img);
      img.sendToBack();
    });
  };
  
  render() {
    return (
      <>
        <s.FrameList>
          <img src='FrameWB3.svg' onClick={this.handleImageClick} />
        </s.FrameList>
      </>
    );
  }
}

export default Frames;