import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import * as s from './styles';

export const ImageTab = ({ canvas, image }) => {
  const [reverseXToggle, setReverseXToggle] = useState(true);
  const [reverseYToggle, setReverseYToggle] = useState(true);
  const [applyGray, setApplyGray] = useState(false);
  const [isDisableButton, setIsDisableButton] = useState(true);

  //filter part

  canvas.on({
    'after:render': () => {
      setIsDisableButton(false);
      // fabric.util
      //   .toArray(document.getElementsByClassName('image-input'))
      //   .forEach((el) => (el.disabled = false));
    },
  });

  const applyFilter = (index, filter) => {
    image.filters[index] = filter;
    image.applyFilters();
    canvas.renderAll();
  };

  const applyFilterValue = (index, prop, value) => {
    if (image.filters[index]) {
      image.filters[index][prop] = value;
      image.applyFilters();
      canvas.renderAll();
    }
  };

  const onClickGray = () => {
    console.log('gray!');
    setApplyGray((prev) => !prev);
  };

  const applyGrayFilter = (index, filter) => {
    image.filters[index] = filter;
    console.log(image.filters);
    image.applyFilters();
    canvas.renderAll();
  };

  const removeGrayFilter = () => {
    image.filters.splice(0);
    image.applyFilters();
    canvas.renderAll();
  };

  //좌우반전 part
  const reverseX = () => {
    image.set('flipX', reverseXToggle);
    setReverseXToggle((prev) => !prev);
    canvas.renderAll();
  };
  const reverseY = () => {
    image.set('flipY', reverseYToggle);
    setReverseYToggle((prev) => !prev);
    canvas.renderAll();
  };

  //자르기 대체 part
  const angleControl = () => {
    const angle = document.getElementById('angle-control');
    const newAngle = parseInt(angle.value);

    if (image) {
      const currentCenter = image.getCenterPoint();
      // 이미지의 회전 중심 변경
      image.set({
        originX: 'center',
        originY: 'center',
        angle: newAngle,
      });
      //변한 이미지의 회전중심 얻기
      const newCenter = image.getCenterPoint();

      //회전 중심 조정
      const deltaX = currentCenter.x - newCenter.x;
      const deltaY = currentCenter.y - newCenter.y;
      image.set({
        left: image.left + deltaX,
        top: image.top + deltaY,
      });
      image.set('angle', newAngle).setCoords();

      canvas.requestRenderAll();
    }
  };

  const scaleControl = () => {
    const scale = document.getElementById('scale-control');
    if (image) {
      const currentCenter = image.getCenterPoint();

      // 이미지의 회전 중심 변경
      image.set({
        originX: 'center',
        originY: 'center',
      });

      //변한 이미지의 회전중심 얻기
      const newCenter = image.getCenterPoint();
      //회전 중심 조정
      const deltaX = currentCenter.x - newCenter.x;
      const deltaY = currentCenter.y - newCenter.y;

      image.set({
        left: image.left + deltaX,
        top: image.top + deltaY,
      });

      image.scale(parseFloat(scale.value) / 50).setCoords();
      canvas.requestRenderAll();
    }
  };

  const topControl = () => {
    const top = document.getElementById('top-control');
    image.set('top', parseInt(top.value, 10)).setCoords();
    canvas.requestRenderAll();
  };

  const leftControl = () => {
    const left = document.getElementById('left-control');
    image.set('left', parseInt(left.value, 10)).setCoords();
    canvas.requestRenderAll();
  };

  //gray toggle
  useEffect(() => {
    if (!image) return;
    applyGray
      ? applyGrayFilter(0, new fabric.Image.filters.Grayscale())
      : removeGrayFilter();
  }, [applyGray]);

  return (
    <s.Wrapper>
      <s.LeftContainer>
        <button
          className='image-input'
          onClick={reverseX}
          disabled={isDisableButton}
        >
          reverseX
        </button>
        <button
          className='image-input'
          onClick={reverseY}
          disabled={isDisableButton}
        >
          reverseY
        </button>
        <p>
          <button
            className='image-input'
            id='grayscale'
            onClick={onClickGray}
            disabled={isDisableButton}
          >
            gray
          </button>
        </p>
        <p>
          <label>
            <span>명도:</span>
          </label>
          <input
            className='image-input'
            id='brightness-value'
            type='range'
            min={-100}
            max={100}
            defaultValue={0}
            onInput={() => {
              applyFilter(
                1,
                new fabric.Image.filters.Brightness({
                  brightness: parseFloat(
                    document.getElementById('brightness-value').value / 100
                  ),
                })
              );
              applyFilterValue(
                1,
                'brightness',
                parseFloat(
                  document.getElementById('brightness-value').value / 100
                )
              );
            }}
            disabled={isDisableButton}
          />
        </p>
        <p>
          <span>채도:</span>
          <input
            className='image-input'
            id='saturation-value'
            type='range'
            min={-100}
            max={100}
            defaultValue={0}
            onInput={() => {
              applyFilter(
                2,
                new fabric.Image.filters.Saturation({
                  saturation: parseFloat(
                    document.getElementById('saturation-value').value / 50
                  ),
                })
              );
              applyFilterValue(
                2,
                'saturation',
                parseFloat(
                  document.getElementById('saturation-value').value / 50
                )
              );
            }}
            disabled={isDisableButton}
          />
        </p>
        <span>대비:</span>
        <input
          className='image-input'
          id='contrast-value'
          type='range'
          min={-100}
          max={100}
          defaultValue={0}
          onInput={() => {
            applyFilter(
              3,
              new fabric.Image.filters.Contrast({
                contrast: parseFloat(
                  document.getElementById('contrast-value').value / 50
                ),
              })
            );
            applyFilterValue(
              3,
              'contrast',
              parseFloat(document.getElementById('contrast-value').value / 50)
            );
          }}
          disabled={isDisableButton}
        />
      </s.LeftContainer>

      <s.RightContainer>
        <p>
          ang:
          <input
            className='image-input'
            id='angle-control'
            type='range'
            defaultValue={0}
            min={-100}
            max={100}
            onInput={angleControl}
            disabled={isDisableButton}
          />
        </p>
        <p>
          size:
          <input
            className='image-input'
            id='scale-control'
            type='range'
            onInput={scaleControl}
            disabled={isDisableButton}
          />
        </p>
        <p>
          Y:
          <input
            className='image-input'
            id='top-control'
            type='range'
            defaultValue={-50}
            min={-200}
            max={100}
            onInput={topControl}
            disabled={isDisableButton}
          />
        </p>
        <p>
          X:
          <input
            className='image-input'
            id='left-control'
            type='range'
            defaultValue={0}
            min={-100}
            max={100}
            onInput={leftControl}
            disabled={isDisableButton}
          />
        </p>
      </s.RightContainer>
    </s.Wrapper>
  );
};
