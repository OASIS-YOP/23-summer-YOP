import { useEffect, useState } from 'react';
import * as s from './styles';
import {Demo} from '../ColorPicker';


export const TextTab = ({canvas}) =>{

  const [textColor, setTextColor] = useState('#4b5c7053');
  
  const AddText = () =>{
    if(canvas){
      let text = new fabric.IText('text',
      {
        fill: textColor,
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
    const textSelectedText = textSelected.text;
    console.log(canvas.getActiveObject());
    textSelected.hasControls = false;
    textSelected.hasBorders = false;
    textSelected.lockMovementX = true;
    textSelected.lockMovementY = true;
    textSelected.selectable = false;
    textSelected.editable = false;
  }
};

const ChangeTextColor = () => {
  if(canvas.getActiveObject() && (canvas.getActiveObject() instanceof fabric.Text || canvas.getActiveObject() instanceof fabric.IText)){
    let cValue = 'black';

    console.log(canvas.getActiveObject());
    let text = canvas.getActiveObject();
    text.fill = textColor;
    canvas.renderAll();
  }
};

const RGBtoCMYK = () => {
  const cmykHtml = document.querySelector('.cmyk_value');
  
  let b = 1;
  let cmyk = [] ;
  for (var i = 0; i < rgb.length; i++) {
    let color =  1 - ( rgb[i] / 255 );
    if	( color < b ) b = color;
    if ( b === 1 ) color = 1
    else color = ( ( color - b ) / ( 1 - b ) ) * 100 
    cmyk[i] = Math.round(color)
  }
  const k = Math.round(b * 100);
  cmyk.push(k)
  cmykHtml.innerHTML = cmyk.join( ' ' )
  //from:
//https://codepen.io/AudreyRBC/pen/MzmLYx
}


  return (
    <>
    <s.ContainerText>
      <s.BtnAddText onClick = {AddText}>TEXT</s.BtnAddText>
      <Demo textColor={textColor} setTextColor={setTextColor} />
      <s.BtnChangeColor onClick = {ChangeTextColor}> 색 바꾸기</s.BtnChangeColor>
      <s.BtnFixText onClick = {FixText}>텍스트 고정</s.BtnFixText>
      <s.BtnFixImage onClick = {FixImage}>이미지 고정</s.BtnFixImage>
    </s.ContainerText>
    
    </>
  )
};
