/* eslint-disable react/prop-types */
import { useState } from 'react';
import * as s from './styles';

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
        <s.ContentBox />
      </s.Wrapper>
    </>
  );
};
