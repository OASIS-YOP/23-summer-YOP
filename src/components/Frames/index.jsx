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
        left: offsetX / img.width,
        top: offsetY / img.height,
      });
1
      const canvasWidth = canvas.getWidth();
      const canvasHeight = canvas.getHeight();
      img.scaleToWidth(canvasWidth);
      img.scaleToHeight(canvasHeight);
      
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