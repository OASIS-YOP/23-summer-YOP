
import { useEffect, useState } from 'react';
import * as s from './styles';
import { fabric } from 'fabric';
import { Demo } from '../../ColorPicker';

export const PaintTab = ({ canvas }) => {

  const [color, setColor] = useState('#6979ffff');

  const AddObjCircle = () =>{
    if (canvas) {
      let circle = new fabric.Circle({
        radius: 25, fill: color, left: 100, top: 100
      });
      circle.set('selectable', true);
      canvas.add(circle);
    }

  };

  const AddObjRect = () =>{
    if (canvas) {
      let rect = new fabric.Rect({
        width: 40, height: 40, fill: color, left: 100, top: 100
      });
      rect.set('selectable', true);
      canvas.add(rect);
    }

  };

  const AddObjTri = () =>{
    if (canvas) {
      let tri = new fabric.Triangle({
        width:40, height: 40, fill: color, left: 100, top: 100
      });
      tri.set('selectable', true);
      canvas.add(tri);
    }

  };

  const ChangeObjColor = () => {
    if (
      canvas.getActiveObject() &&
      (canvas.getActiveObject() instanceof fabric.Object)
    ) {
      console.log(canvas.getActiveObject());
      let Obj = canvas.getActiveObject();
      Obj.set('fill', color); // Update the fill property directly
      Obj.setCoords(); // Update the object's coordinates
      canvas.renderAll(); // Render the canvas
      console.log(Obj);

      canvas.requestRenderAll();
      console.log('rendered');
    }
  };


  return (
    <>
    <s.PaintContainer>
    <s.BtnAddObj onClick={AddObjCircle}>동그라미 추가</s.BtnAddObj>
    <s.BtnAddObj onClick={AddObjRect}>네모 추가</s.BtnAddObj>
    <s.BtnAddObj onClick={AddObjTri}>세모 추가</s.BtnAddObj>
      <Demo color={color} setColor={setColor} />
        <s.BtnChangeColor onClick={ChangeObjColor}>
          색깔 적용하기
        </s.BtnChangeColor>
    </s.PaintContainer>
    </>
  )

};

