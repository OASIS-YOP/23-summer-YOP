import * as s from './styles';


export const Stickers = ({canvas}) => {

  const addSticker = () =>{

    let url = 'GoodVibesST.svg';
    fabric.Image.fromURL(url, function (img) {
      const scale = 50 / Math.max(img.width, img.height); // 원하는 크기에 맞도록 비율 계산

      img.set({
        left: 90,
        top: 90,
        originX: 'center',
        originY: 'center',
        scaleX: scale,
        scaleY: scale,
      });

      canvas.add(img);
      canvas.renderAll();
    });

  };
  return (
    <>
      <s.StickerList>
        <img onClick = {addSticker} src='GoodVibesST.svg' />
        <img src='HelloST.svg' />
      </s.StickerList>
    </>


  )
 
}