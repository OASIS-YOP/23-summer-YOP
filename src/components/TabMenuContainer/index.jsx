/* eslint-disable react/prop-types */
import { useState } from 'react';
import * as s from './styles';

export const TabMenuContainer = ({ tabMenuLabelList }) => {
  const [onButtonClicked, setOnButtonClicked] = useState(999);

  const onClickButton = (index) => {
    setOnButtonClicked(index);
  };

  return (
    <>
      <s.Wrapper>
        <s.TabNavBar>
          {tabMenuLabelList.map((item, index) => (
            <s.TabMenu
              key={`tabMenuLabellist_${index}`}
              onClick={() => onClickButton(index)}
              className={onButtonClicked === index ? 'active' : ''}
            >
              {item}
            </s.TabMenu>
          ))}
        </s.TabNavBar>
        <s.ContentBox />
      </s.Wrapper>
    </>
  );
};
