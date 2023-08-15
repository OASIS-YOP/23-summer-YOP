import * as s from './styles';
import { fabric } from 'fabric';
import { useState, useEffect } from 'react';

export const Frames = ({ canvas }) => {
  const frameData = [
    { id: 1, src: [''] },
    { id: 2, src: [''] },
    { id: 3, src: ['FrameWB3.svg',] },
  ];

  const handleImageClick = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const url = e.target.src;
   
      fabric.Image.fromURL(url, function (img) {
        //const scale = 50 / Math.max(img.width, img.height); // 원하는 크기에 맞도록 비율 계산
        const canvasWidth = canvas.getWidth();
        const canvasHeight = canvas.getHeight();
        img.set({
          left: offsetX / img.width - 4,
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
    // {tabMenuDataList.map((item, index) => (
    //   <s.TabMenu
    //     key={`tabMenuLabellist_${item.id}`}
    //     onClick={() => onClickButton(index)}
    //     className={onButtonClicked === index ? 'active' : ''}
    //   >
    //     {item.label}

    const renderFrameList = () => {
      if (canvas.width === 330 && canvas.height === 510 ) {
            return (
              <s.FrameList>
                <img src='' onClick={handleImageClick} />
              </s.FrameList>
            );
          } else if (canvas.width === 420 && canvas.height === 510 ) {
            return (
              <s.FrameList>
                <img src='' onClick={handleImageClick} />
              </s.FrameList>
            );
          } else {
            return (
              <s.FrameList>
                <img src='FrameWB3.svg' onClick={handleImageClick} />
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
