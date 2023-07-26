/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import * as s from './styles';
import {fabric} from 'fabric';


export const TabMenuContainer = ({ tabMenuDataList }) => {
  const [onButtonClicked, setOnButtonClicked] = useState(0);

  const onClickButton = (index) => {
    setOnButtonClicked(index);
  };

  const [canvasTemp, setCanvasTemp] = useState(null);
  useEffect(() => {
    const initCanvas = () =>
      new fabric.Canvas('canvasTemp', {
        height: 200,
        width: 300,
        backgroundColor: 'gray',
      });

    setCanvasTemp(initCanvas());
  }, []);

  useEffect(() => {
    if (canvasTemp) {
      // 생성한 Canvas 인스턴스를 DOM에 추가
      canvasTemp.initialize('canvasTemp');
    }
  }, [canvasTemp]);

  
  

  return (
    <>
      <s.Wrapper>
        <s.TabNavBar>
          {tabMenuDataList.map((item, index) => (
            <s.TabMenu
              key={`tabMenuLabellist_${index}`}
              onClick={() => onClickButton(index)}
              className={onButtonClicked === index ? 'active' : ''}
            >
              {item.label}
            </s.TabMenu>
          ))}
        </s.TabNavBar>
        <s.ContentBox >
          {/* <canvas id='canvasTemp' /> 
          <TabText 
            InsertText = {InsertText}/> */}
        </s.ContentBox>
      </s.Wrapper>
    </>
  );
};
