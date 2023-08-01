import * as s from './styles';

export const CropImage = (cropImage) => {
  return <s.Button onClick={cropImage}>이미지자르기</s.Button>;
};
