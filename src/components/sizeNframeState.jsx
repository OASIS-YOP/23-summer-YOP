import { useState } from 'react';
import { SelectSizePage } from '../SelectSizePage';
import Frames from '../Frames'; // Frames 컴포넌트 파일 경로

export const SFParentComponent = () => {
  const [selectSize, setSelectSize] = useState(null); // 선택된 사이즈 상태를 관리

  const handleSizeSelection = (size) => {
    setSelectSize(size); // 선택된 사이즈를 변경하는 함수
  };

  return (
    <>
      {/* SelectSizePage 컴포넌트에 선택된 사이즈와 사이즈 변경 함수를 전달 */}
      <SelectSizePage isClickedOk={selectSize} selectCanvasSize={handleSizeSelection} />

      {/* Frames 컴포넌트에 선택된 사이즈를 전달하여 다른 프레임 리스트를 보여줌 */}
      <Frames selectedSize={selectSize} />
    </>
  );
};