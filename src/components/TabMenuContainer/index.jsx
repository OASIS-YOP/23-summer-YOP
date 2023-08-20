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

  // useEffect(() => {
  //   console.log(tabLabel);
  //   console.log(tabContent);
  // });

  return (
    <>
      <s.Wrapper>
        <s.TabNavBar id={'tab-nav-bar'}>
          {tabMenuDataList.map((item, index) => (
            <s.TabMenu
              id={'tab-menu' + item.id }
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
            id={'content-box' + item.id}
            key={`tabMenuContentlist_${item.id}`}
            className={onButtonClicked === index ? 'active' : ''}
          >
            {typeof item.function === 'function' ? item.function() : null}
          </s.ContentBox>
        ))}
      </s.Wrapper>
    </>
  );
};
