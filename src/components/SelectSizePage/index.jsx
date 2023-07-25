import { useState } from 'react';
import * as s from './styles';

// eslint-disable-next-line react/prop-types
export const SelectSizePage = ({ isClickedOk }) => {
  const [selectSize, setSelectSize] = useState(999);

  // const sizeList = ['사진프레임1.png', '사진프레임2.png', '사진프레임3.png'];

  const onClickSize = (index) => {
    setSelectSize(index);
  };

  return (
    <s.ContentContainer>
      <s.SelectSizeLabel>폴라로이드의 크기를 선택 후 확인 버튼을 누르세요!</s.SelectSizeLabel>
      <s.SizeImageContainer>
        {/* {sizeList.map((item, index) => {
          return (
            <>
              <s.SizeImageWrapper onClick={onClickSize}>
                <img
                  src={item}
                  alt={`size${index + 1}`}
                  key={`sizeList_${index}`}
                />
              </s.SizeImageWrapper>
            </>
          );
        })} */}
        <s.SizeImageWrapper
          onClick={() => {
            onClickSize(1);
          }}
        >
          <s.Size1
            onClick={() => {
              onClickSize(1);
            }}
            className={selectSize == 1 ? 'active' : ''}
          />
          <s.SizeLabel>11:17</s.SizeLabel>
        </s.SizeImageWrapper>
        <s.SizeImageWrapper>
          <s.Size2
            onClick={() => {
              onClickSize(2);
            }}
            className={selectSize == 2 ? 'active' : ''}
          />
          <s.SizeLabel>14:17</s.SizeLabel>
        </s.SizeImageWrapper>
        <s.SizeImageWrapper>
          <s.Size3
            onClick={() => {
              onClickSize(3);
            }}
            className={selectSize == 3 ? 'active' : ''}
          />
          <s.SizeLabel>21:17</s.SizeLabel>
        </s.SizeImageWrapper>
      </s.SizeImageContainer>
      <s.OkButton onClick={isClickedOk}>확인</s.OkButton>
    </s.ContentContainer>
  );
};
