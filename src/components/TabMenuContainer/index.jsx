import { useState } from 'react';
import * as s from './styles';

export const TabMenuContainer = () => {
  const [tabMenuList, setTabMenuList] = useState(['편집', '필터', '테스트']);
  const [onButtonClicked, setOnButtonClicked] = useState(999);

  const onClickButton = (index) => {
    setOnButtonClicked(index);
  };

  return (
    <>
      <s.TabNavBar>
        {tabMenuList.map((item, index) => (
          <s.TabMenu
            key={`list_${index}`}
            onClick={() => onClickButton(index)}
            className={onButtonClicked === index ? 'active' : ''}
          >
            {item}
          </s.TabMenu>
        ))}
      </s.TabNavBar>
      <s.Container />
    </>
  );
};
