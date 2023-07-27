import * as s from './styles';

export const TextTab = (canvas, imgFile) =>{
  
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
    if(canvas.getActiveObject){
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
        // canvas.renderAll();
    
  });
    }
    
};

  return (
    <>
    <s.ContainerText>
      <s.BtnAddText onClick = {AddText}>TEXT</s.BtnAddText>
      <s.BtnImageFix onClick = {FixImage}>이미지 고정</s.BtnImageFix>
    </s.ContainerText>
    
    </>
  )
};
