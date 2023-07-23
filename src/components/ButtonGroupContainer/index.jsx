import * as s from './styles';

// eslint-disable-next-line react/prop-types
export const ButtonGroupContainer = ({ handleChangedFile, fileInputRef }) => {
  return (
    <>
      <s.Container>
        <s.ImageLoadButton htmlFor='file'>
          <s.ImageLoadButtonLabel htmlFor='file'>
            이미지 불러오기
          </s.ImageLoadButtonLabel>
          <s.Input
            type='file'
            id='file'
            onChange={handleChangedFile}
            ref={fileInputRef}
          />
        </s.ImageLoadButton>
        <s.Button>저장하기</s.Button>
        <s.Button>내 이미지 보기</s.Button>
        <s.Button>실행 취소</s.Button>
        <s.Button>되돌리기</s.Button>
        <s.Button>초기화</s.Button>
      </s.Container>
    </>
  );
};
