import { useEffect, useState } from 'react';
import * as s from './styles';
import { fabric } from 'fabric';
import { Demo } from '../../ColorPicker';
import FontFaceObserver from 'fontfaceobserver';


export const TextTab = ({ canvas }) => {
  const [textColor, setTextColor] = useState('#6979ffff');
  const [view, setView] = useState(false);

  // 폰트 변경
  const fonts = ["Black Han Sans", "Noto Sans Korean", "Orbit"];
  fonts.unshift("(default)Times New Roman");

    useEffect(() => {
        const select = document.getElementById("font-family");
        select.innerHTML = '';

        fonts.forEach(font => {
            const option = document.createElement('option');
            option.innerHTML = font;
            option.value = font;
            select.appendChild(option);
        });

    }, []);
  
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

  // const FixImage = () => {
  //   if (
  //     canvas.getActiveObject() &&
  //     canvas.getActiveObject() instanceof fabric.Image
  //   ) {
  //     // console.log(canvas.getActiveObject()._element.currentSrc);
  //     console.log(canvas.getActiveObject());
  //     let imag = canvas.getActiveObject()._element.currentSrc;
  //     // let imagAngle = canvas.getActiveObject.angle;
  //     let imagACoords = canvas.getActiveObject().oCoords;
  //     let imagWidth = canvas.getActiveObject().width;
  //     let imagHeight = canvas.getActiveObject().height;
  //     let imagScaleX = canvas.getActiveObject().scaleX;
  //     let imagScaleY = canvas.getActiveObject().scaleY;
  //     let imagLeft = canvas.getActiveObject().left;
  //     let imagTop = canvas.getActiveObject().top;
  //     fabric.Image.fromURL(imag, (imgFile) => {
  //       imgFile.aCoords = imagACoords;
  //       imgFile.scaleToWidth(imagWidth * imagScaleX);
  //       imgFile.scaleToHeight(imagHeight * imagScaleY);
  //       imgFile.left = imagLeft;
  //       imgFile.top = imagTop;
  //       //imgFile.angle = 0;
  //       imgFile.hasControls = false;
  //       imgFile.hasBorders = false;
  //       imgFile.lockMovementX = true;
  //       imgFile.selectable = false;
  //       imgFile.evented = false;
  //       imgFile.sendToBack();

  //       canvas.add(imgFile);
  //       canvas.renderAll();
  //     });
  //   }
  // };

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

  const TextBrush = () => {
    if(canvas){
    
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush = new fabric.PencilBrush({ decimate: 8 });

      canvas.on('path:created', function (opt) {
        if (canvas.isDrawingMode) {
          let path = opt.path;
          let pathInfo = fabric.util.getPathSegmentsInfo(path.path);
          path.segmentsInfo = pathInfo;
  
          let pathLength = pathInfo[pathInfo.length - 1].length;
          let text =
            'this is a demo of text on a path. This text should be small enough to fit in what you have drawn';
          let fontSize = (2.5 * pathLength) / text.length;
          text = new fabric.Text(text, {
            fontSize,
            path,
            top: path.top,
            left: path.left,
          });
  
          canvas.add(text);
          canvas.remove(path);
          canvas.isDrawingMode = false;
        }
      });
    }
    
  };

  const TextFonts = () => {

    if (canvas.getActiveObject() instanceof fabric.Text ||
        canvas.getActiveObject() instanceof fabric.IText) {
      const font = selectedFont;

      // Load and apply the selected font
      const fontObserver = new FontFaceObserver(font);
      fontObserver.load()
        .then(() => {
          canvas.getActiveObject().set("fontFamily", font);
          canvas.requestRenderAll();
        })
        .catch((error) => {
          console.log(error);
          alert('Font loading failed: ' + font);
        });
    }
    
  };

  return (
    <>
      <s.ContainerText>
        <s.BtnAddText onClick={AddText}>TEXT</s.BtnAddText>
        <Demo textColor={textColor} setTextColor={setTextColor} />
        <s.BtnChangeColor onClick={ChangeTextColor}>
          색 바꾸기
        </s.BtnChangeColor>
        <s.BtnFixText onClick={FixText}>선택한 텍스트 고정</s.BtnFixText>
        {/* <s.BtnFixImage onClick={FixImage}>선택한 이미지 고정</s.BtnFixImage> */}
        <s.BtnDrawText onClick={TextBrush}>텍스트 그리기</s.BtnDrawText>
        <select id="font-family">
            {/* Options will be added dynamically through the useEffect */}
        </select>
        <s.BtnFontChange onClick={TextFonts}>apply</s.BtnFontChange>
      </s.ContainerText>
    </>
  );
};
