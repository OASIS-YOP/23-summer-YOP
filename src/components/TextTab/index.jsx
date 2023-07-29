import { useEffect, useState } from 'react';
import * as s from './styles';

export const TextTab = ({canvas}) =>{
  
  const AddText = () =>{
    if(canvas){
      let text = new fabric.IText('text',
      {
        fill: 'green',
        editable: true,
        hasControls: true,
      });
      text.set('selectable' ,true);
      canvas.add(text);
    }
  };

  const FixImage = () =>{
    if(canvas.getActiveObject() && canvas.getActiveObject() instanceof fabric.Image){
      // console.log(canvas.getActiveObject()._element.currentSrc);
      console.log(canvas.getActiveObject());
      let imag = canvas.getActiveObject()._element.currentSrc;
      let imagAngle = canvas.getActiveObject.angle;
      let imagACoords = canvas.getActiveObject().oCoords;
      let imagWidth = canvas.getActiveObject().width;
      let imagHeight = canvas.getActiveObject().height;
      let imagScaleX = canvas.getActiveObject().scaleX;
      let imagScaleY = canvas.getActiveObject().scaleY;
      let imagLeft = canvas.getActiveObject().left;
      let imagTop = canvas.getActiveObject().top;
      fabric.Image.fromURL(imag, (imgFile) => {
        imgFile.aCoords = imagACoords;
        imgFile.scaleToWidth(imagWidth*imagScaleX);
        imgFile.scaleToHeight(imagHeight*imagScaleY);
        imgFile.left = imagLeft;
        imgFile.top = imagTop;
        imgFile.angle = 0;
        imgFile.hasControls = false;
        imgFile.hasBorders = false;
        imgFile.lockMovementX = true;
        imgFile.selectable = false;
        
        canvas.add(imgFile);
      });
    }
    
};

const FixText = () =>{
  if(canvas.getActiveObject() && (canvas.getActiveObject() instanceof fabric.Text || canvas.getActiveObject() instanceof fabric.IText)){
    let textSelected = canvas.getActiveObject();
    textSelected.hasControls = false;
    textSelected.hasBorders = false;
    textSelected.lockMovementX = true;
    textSelected.lockMovementY = true;
    textSelected.selectable = false;

    //canvas.add(textSelected);
  }
};


  return (
    <>
    <s.ContainerText>
      <s.BtnAddText onClick = {AddText}>TEXT</s.BtnAddText>
      <s.BtnFixText onClick = {FixText}>텍스트 고정</s.BtnFixText>
      <s.BtnFixImage onClick = {FixImage}>이미지 고정</s.BtnFixImage>
    </s.ContainerText>
    
    </>
  )
};
