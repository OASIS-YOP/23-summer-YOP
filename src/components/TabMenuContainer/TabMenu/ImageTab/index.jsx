import { useState } from 'react';
import { fabric } from 'fabric';
import * as s from './styles';

export const ImageTab = ({ canvas, image }) => {
  const [reverseXToggle, setReverseXToggle] = useState(true);
  const [reverseYToggle, setReverseYToggle] = useState(true);
  const [applyGray, setApplyGray] = useState(false);

  //filter part

  canvas.on({
    'after:render': () => {
      fabric.util
        .toArray(document.getElementsByClassName('image-input'))
        .forEach((el) => (el.disabled = false));
    },
  });

  const applyFilter = (index, filter) => {
    image.filters[index] = filter;
    image.applyFilters();
    canvas.renderAll();
  };

  const applyGrayFilter = (filter) => {
    console.log('gray!');
    image.filters.push(filter);
    image.applyFilters();
    canvas.renderAll();
  };

  const removeGrayFilter = () => {
    image.filters.pop();
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
    image.set('angle', parseInt(angle.value)).setCoords();
    canvas.requestRenderAll();
  };

  const scaleControl = () => {
    const scale = document.getElementById('scale-control');
    image.scale(parseFloat(scale.value) / 50).setCoords();
    canvas.requestRenderAll();
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

  return (
    <s.Wrapper>
      <s.LeftContainer>
        <button onClick={reverseX}>reverseX</button>
        <button onClick={reverseY}>reverseY</button>
        <p>
          <button
            className='image-input'
            id='grayscale'
            onClick={() =>
              applyGrayFilter(new fabric.Image.filters.Grayscale())
            }
            // disabled={applyGray === false ? true : ''}
          >
            Gray
          </button>
          <button onClick={() => removeGrayFilter()}>x</button>
        </p>
        <p>
          <label>
            <span>명도:</span>
          </label>
          <input
            className='image-input'
            id='brightness-value'
            type='range'
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
            disabled={true}
          />
        </p>
        <p>
          <span>채도:</span>
          <input
            className='image-input'
            id='saturation-value'
            type='range'
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
            disabled={true}
          />
        </p>
        <span>대비:</span>
        <input
          className='image-input'
          id='contrast-value'
          type='range'
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
          disabled={true}
        />
      </s.LeftContainer>

      {/* crop */}
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
            disabled={true}
          />
        </p>
        <p>
          size:
          <input
            className='image-input'
            id='scale-control'
            type='range'
            onInput={scaleControl}
            disabled={true}
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
            disabled={true}
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
            disabled={true}
          />
        </p>
      </s.RightContainer>
    </s.Wrapper>
  );
};
