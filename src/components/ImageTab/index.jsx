import { useState } from 'react';
import { fabric } from 'fabric';

export const ImageTab = ({ canvas, image }) => {
  //좌우반전 part
  const [reverseXToggle, setReverseXToggle] = useState(true);
  const [reverseYToggle, setReverseYToggle] = useState(true);

  //filter part
  const applyGrayFilter = () => {
    image.filters.push(new fabric.Image.filters.Grayscale());
    image.applyFilters();
    canvas.renderAll();
  };

  const reverseX = () => {
    image.set('flipX', reverseXToggle);
    setReverseXToggle((prev) => !prev);
    canvas.renderAll();
    console.log('반전 성공');
  };
  const reverseY = () => {
    image.set('flipY', reverseYToggle);
    setReverseYToggle((prev) => !prev);
    canvas.renderAll();
    console.log('반전 성공');
  };

  return (
    <>
      <button onClick={reverseX}>reverseX</button>
      <button onClick={reverseY}>reverseY</button>
      {/* <button onClick={() => applyFilter(new fabric.Image.filters.Sepia())}>
        sepia
      </button>
      <button onClick={() => applyFilter(new fabric.Image.filters.Brownie())}>
        Brownie
      </button> */}
      <button onClick={() => applyGrayFilter()}>Gray</button>
    </>
  );
};
