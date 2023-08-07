import { useEffect, useState } from 'react';
import * as s from './styles';
import { fabric } from 'fabric';
import { Demo } from '../ColorPicker';

export const TextTab = ({ canvas }) => {
  const [textColor, setTextColor] = useState('#6979ffff');

  //전역함수로 바꾸겠습니다.
  // const removeText = () => {
  //   if (canvas.getActiveObject()) {
  //     console.log(canvas.getActiveObject());
  //     canvas.remove(canvas.getActiveObject());
  //     canvas.renderAll();
  //   }
  // };

  const AddText = () => {
    if (canvas) {
      let text = new fabric.IText('text', {
        fill: textColor,
        editable: true,
        hasControls: true,
      });
      text.set('selectable', true);
      canvas.add(text);
    }
  };

  const FixImage = () => {
    if (
      canvas.getActiveObject() &&
      canvas.getActiveObject() instanceof fabric.Image
    ) {
      // console.log(canvas.getActiveObject()._element.currentSrc);
      console.log(canvas.getActiveObject());
      let imag = canvas.getActiveObject()._element.currentSrc;
      // let imagAngle = canvas.getActiveObject.angle;
      let imagACoords = canvas.getActiveObject().oCoords;
      let imagWidth = canvas.getActiveObject().width;
      let imagHeight = canvas.getActiveObject().height;
      let imagScaleX = canvas.getActiveObject().scaleX;
      let imagScaleY = canvas.getActiveObject().scaleY;
      let imagLeft = canvas.getActiveObject().left;
      let imagTop = canvas.getActiveObject().top;
      fabric.Image.fromURL(imag, (imgFile) => {
        imgFile.aCoords = imagACoords;
        imgFile.scaleToWidth(imagWidth * imagScaleX);
        imgFile.scaleToHeight(imagHeight * imagScaleY);
        imgFile.left = imagLeft;
        imgFile.top = imagTop;
        //imgFile.angle = 0;
        imgFile.hasControls = false;
        imgFile.hasBorders = false;
        imgFile.lockMovementX = true;
        imgFile.selectable = false;
        imgFile.evented = false;

        canvas.add(imgFile);
        canvas.renderAll();
      });
    }
  };

  const FixText = () => {
    if (
      canvas.getActiveObject() &&
      (canvas.getActiveObject() instanceof fabric.Text ||
        canvas.getActiveObject() instanceof fabric.IText)
    ) {
      let textSelected = canvas.getActiveObject();
      // const textSelectedText = textSelected.text;
      console.log(canvas.getActiveObject());
      textSelected.hasControls = false;
      textSelected.hasBorders = false;
      textSelected.lockMovementX = true;
      textSelected.lockMovementY = true;
      textSelected.selectable = false;
      textSelected.editable = false;
      textSelected.evented = false;
    }
  };

  const ChangeTextColor = () => {
    if (
      canvas.getActiveObject() &&
      (canvas.getActiveObject() instanceof fabric.Text ||
        canvas.getActiveObject() instanceof fabric.IText)
    ) {
      console.log(canvas.getActiveObject());
      let text = canvas.getActiveObject();
      text.set('fill', textColor); // Update the fill property directly
      text.setCoords(); // Update the object's coordinates
      canvas.renderAll(); // Render the canvas
      console.log(text);

      canvas.requestRenderAll();
      console.log('rendered');
    }
  };

  // Add event listener for 'delete' key press
  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.key === 'Delete') {
  //       removeText();
  //     }
  //   };

  //   document.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [canvas]); // Reattach the event listener when the canvas changes

  return (
    <>
      <s.ContainerText>
        <s.BtnAddText onClick={AddText}>TEXT</s.BtnAddText>
        <Demo textColor={textColor} setTextColor={setTextColor} />
        <s.BtnChangeColor onClick={ChangeTextColor}>
          {' '}
          색 바꾸기
        </s.BtnChangeColor>
        <s.BtnFixText onClick={FixText}>텍스트 고정</s.BtnFixText>
        <s.BtnFixImage onClick={FixImage}>이미지 고정</s.BtnFixImage>
      </s.ContainerText>
    </>
  );
};
