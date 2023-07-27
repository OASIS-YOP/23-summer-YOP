/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import * as s from './styles';
import {fabric} from 'fabric';


export const TabMenuContainer = ({ tabMenuDataList }) => {
  const [onButtonClicked, setOnButtonClicked] = useState(0);

  const onClickButton = (index) => {
    setOnButtonClicked(index);
  };



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

        {tabMenuDataList.map((item, index) => (
          <s.ContentBox
            key={`tabMenuContentlist_${index}`}
            className={onButtonClicked === index ? 'active' : ''}
          >
            {item.function}
          </s.ContentBox>
        ))}

      </s.Wrapper>
    </>
  );
};
