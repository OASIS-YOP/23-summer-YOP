import { useState } from 'react';
import * as s from './styles';

// eslint-disable-next-line react/prop-types
export const SelectSizePage = ({ isClickedOk, selectCanvasSize }) => {
  const [selectSize, setSelectSize] = useState(-1);

  const onClickSize = (index) => {
    setSelectSize(index);
  };

  return (
    <s.ContentContainer>
      <s.SelectSizeLabel>
        폴라로이드의 크기를 선택 후 확인 버튼을 누르세요!
      </s.SelectSizeLabel>
      <s.SizeImageContainer className='upper'>
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
          <s.SizeImageWrapper>
            <s.Size1
              onClick={() => {
                onClickSize(1);
                selectCanvasSize([330, 510]);
              }}
              className={selectSize == 1 ? 'active' : ''}
            />
            <s.SizeLabel>11:17</s.SizeLabel>
          </s.SizeImageWrapper>
          <s.SizeImageWrapper>
            <s.Size2
              onClick={() => {
                onClickSize(2);
                selectCanvasSize([420, 510]);
              }}
              className={selectSize == 2 ? 'active' : ''}
            />
            <s.SizeLabel>14:17</s.SizeLabel>
          </s.SizeImageWrapper>
          <s.SizeImageWrapper>
            <s.Size3
              onClick={() => {
                onClickSize(3);
                selectCanvasSize([630, 510]);
              }}
              className={selectSize == 3 ? 'active' : ''}
            />
            <s.SizeLabel>21:17</s.SizeLabel>
          </s.SizeImageWrapper>
        </s.SizeImageContainer>
      </s.SizeImageContainer>
      <s.OkButton
        onClick={isClickedOk}
        disabled={selectSize === -1 ? true : false}
      >
        확인
      </s.OkButton>
    </s.ContentContainer>
  );
};
