import * as s from './styles';

export const ButtonGroupContainer = () => {
  return (
    <>
      <s.Container>
        <s.Button>이미지 불러오기</s.Button>
        <s.Button>저장하기</s.Button>
        <s.Button>내 이미지 보기</s.Button>
        <s.Button>실행 취소</s.Button>
        <s.Button>되돌리기</s.Button>
        <s.Button>초기화</s.Button>
      </s.Container>
    </>
  );
};
