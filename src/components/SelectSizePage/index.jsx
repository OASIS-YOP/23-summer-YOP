import { useState } from 'react';
import * as s from './styles';

export const SelectSizePage = () => {
  const [selectSize, setSelectSize] = useState(999);

  const sizeList = ['사진프레임1.png', '사진프레임2.png', '사진프레임3.png'];

  const onClickSize = (index) => {
    setSelectSize(index);
  };

  return (
    <s.ContentContainer>
      <s.SelectSizeLabel>원하는 사진의 사이즈를 선택하세요!</s.SelectSizeLabel>
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
          className={selectSize == 1 ? 'active' : ''}
        >
          <s.SizeImage
            src='사진프레임1.png'
            alt='size1'
            width={220}
            height={340}
          />
        </s.SizeImageWrapper>
        <s.SizeImageWrapper
          onClick={() => {
            onClickSize(2);
          }}
          className={selectSize == 2 ? 'active' : ''}
        >
          <s.SizeImage
            src='사진프레임2.png'
            alt='size2'
            width={280}
            height={340}
          />
        </s.SizeImageWrapper>
        <s.SizeImageWrapper
          onClick={() => {
            onClickSize(3);
          }}
          className={selectSize == 3 ? 'active' : ''}
        >
          <s.SizeImage
            src='사진프레임3.png'
            alt='size3'
            width={400}
            height={340}
          />
        </s.SizeImageWrapper>
      </s.SizeImageContainer>
      <s.OkButton>확인</s.OkButton>
    </s.ContentContainer>
  );
};
