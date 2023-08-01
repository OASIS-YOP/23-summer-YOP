import * as s from './styles';

export const TextTab = (canvas) => {
  const AddText = () => {
    if (canvas) {
      // eslint-disable-next-line no-undef
      let text = new fabric.IText('text', {
        fill: 'green',
        editable: true,
        hasControls: true,
      });
      text.set('selectable', true);
      canvas.add(text);
    }
  };

  return (
    <>
      <s.BtnAddText onClick={AddText}>TEXT</s.BtnAddText>
    </>
  );
};
