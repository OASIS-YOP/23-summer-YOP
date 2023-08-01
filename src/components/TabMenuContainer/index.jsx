/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import * as s from './styles';
import { fabric } from 'fabric';

export const TabMenuContainer = ({ tabMenuDataList }) => {
  const [onButtonClicked, setOnButtonClicked] = useState(0);

  const tabLabel = tabMenuDataList.map((item) => item.id);

  const tabContent = tabMenuDataList.map((item) => item.function);

  const onClickButton = (index) => {
    setOnButtonClicked(index);
  };

  useEffect(() => {
    console.log(tabLabel);
    console.log(tabContent);
  });

  return (
    <>
      <s.Wrapper>
        <s.TabNavBar>
          {tabMenuDataList.map((item, index) => (
            <s.TabMenu
              key={`tabMenuLabellist_${item.id}`}
              onClick={() => onClickButton(index)}
              className={onButtonClicked === index ? 'active' : ''}
            >
              {item.label}
            </s.TabMenu>
          ))}
        </s.TabNavBar>

        {tabMenuDataList.map((item, index) => (
          <s.ContentBox
            key={`tabMenuContentlist_${item.id}`}
            className={onButtonClicked === index ? 'active' : ''}
          >
            {item.function}
          </s.ContentBox>
        ))}
      </s.Wrapper>
    </>
  );
};
