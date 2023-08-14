import { useState } from 'react';
import { fabric } from 'fabric';

export const ImageTab = ({ canvas, image }) => {
  //좌우반전 part
  const [reverseXToggle, setReverseXToggle] = useState(true);
  const [reverseYToggle, setReverseYToggle] = useState(true);

  //filter part
  const applyFilter = (index, filter) => {
    console.log(index);
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

  canvas.on({
    'selection:created': () => {
      fabric.util
        .toArray(document.getElementsByTagName('input'))
        .forEach((el) => (el.disabled = false));

      let filters = ['grayscale', 'brightness', 'contrast', 'saturation'];

      for (let i = 0; i < filters.length; i++) {
        if (document.getElementById(filters[i])) {
          document.getElementById(filters[i]).checked = !image.filters[i];
        }
      }
    },
    'selection:cleared': () => {
      fabric.util
        .toArray(document.getElementsByTagName('input'))
        .forEach((el) => (el.disabled = true));
    },
  });

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
      <p>좌우반전</p>
      <button onClick={reverseX}>reverseX</button>
      <button onClick={reverseY}>reverseY</button>
      <p>
        <label>Gray</label>
        <input
          type='checkbox'
          id='grayscale'
          onClick={() => applyFilter(0, new fabric.Image.filters.Grayscale())}
        />
      </p>
      <p>
        <label>
          <span>명도:</span>
          <input
            type='checkbox'
            id='brightness'
            onClick={() =>
              applyFilter(
                1,
                new fabric.Image.filters.Brightness({
                  brightness: parseFloat(
                    document.getElementById('brightness-value').value / 100
                  ),
                })
              )
            }
          />
        </label>
        <input
          id='brightness-value'
          type='range'
          onInput={() => {
            applyFilterValue(
              1,
              'brightness',
              parseFloat(
                document.getElementById('brightness-value').value / 100
              )
            );
          }}
        />
      </p>
      <p>
        <span>채도:</span>
        <input
          type='checkbox'
          id='saturation'
          onClick={() =>
            applyFilter(
              2,
              new fabric.Image.filters.Saturation({
                saturation: parseFloat(
                  document.getElementById('saturation-value').value / 50
                ),
              })
            )
          }
        />
        <input
          id='saturation-value'
          type='range'
          onInput={() => {
            applyFilterValue(
              2,
              'saturation',
              parseFloat(document.getElementById('saturation-value').value / 50)
            );
          }}
        />
      </p>
      <span>대비:</span>
      <input
        type='checkbox'
        id='contrast'
        onClick={() =>
          applyFilter(
            3,
            new fabric.Image.filters.Contrast({
              contrast: parseFloat(
                document.getElementById('contrast-value').value / 50
              ),
            })
          )
        }
      />
      <input
        id='contrast-value'
        type='range'
        onInput={() => {
          applyFilterValue(
            3,
            'contrast',
            parseFloat(document.getElementById('contrast-value').value / 50)
          );
        }}
      />
    </>
  );
};
