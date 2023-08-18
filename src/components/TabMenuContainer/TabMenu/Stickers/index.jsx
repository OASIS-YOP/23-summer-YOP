import * as s from './styles';
import { fabric } from 'fabric';
import { useState } from 'react';


export const Stickers = ({ canvas }) => {

  //////////////////////// 스티커 이미지 데이타셋 ////////////////////////

  ////1번째 스티커 리스트
  const [stickerData1, setStickerData1 ] = useState([
    { src: 'GoodVibesST.svg', spec:'', class: 'ST1' },
    { src:'HelloST.svg', spec:'', class: 'ST1' },
    { src:'BFF_ST.svg', spec:'', class: 'ST1' },
    { src: 'Love_ST.svg' , spec: '', class: 'ST1' },
    { src: 'SprinkleYellow_ST.svg', spec: 'particles', class: 'ST1' },
    { src: 'FlowerYellow_ST.svg', spec: '', class: 'ST1' },
    { src: 'Love_ST2.svg',spec: '', class: 'ST1' },
    { src: 'LYS_ST.svg',spec: '', class: 'ST1' },
    { src: 'New_ST.svg',spec: '', class: 'ST1' },
  ]);


  ////2번째 스티커 리스트
    // m : monitor
    // p : property
  const [stickerData2, setStickerData2 ] = useState([
    { src: 'MonitorCRT_ST.svg', spec:'m' },
    { src:'MonitorCRTPac-Man_ST.svg', spec:'m', },
    { src:'MonitorCRTFigma_ST.svg', spec: 'm', },
    { src: 'MonitorFlatscreen_ST.svg' , spec: 'm', },
    { src: 'MonitorFlatscreenFigma_ST.svg', spec: 'm', },
    { src: 'MonitorFlatscreenPac-Man_ST.svg',spec: 'm', },
    { src: 'PropertyBeige_ST.svg',spec: 'p', },
    { src: 'PropertyGray_ST.svg',spec: 'p', },
  ]);


  //////////////////////// 스티커 이미지 클릭시 캔버스에 추가하는 함수 ////////////////////////

  const handleImageClick = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const imageUrl = e.target.src;
    const spec = e.target.dataset.spec;

    const isParticles = spec === "particles";
    const isP = spec === "p";
    const frame = canvas.getObjects().find((object) => object.class === 'frame');
    // frame이라는 class를 가진 객체를 찾아서 frame에 할당

      fabric.Image.fromURL(imageUrl, function (img) {
        img.set({
          left: offsetX - img.width / 1000,
          top: offsetY - img.height / 1000,
          evented: true,
          class: 'sticker', // sticker라는 class를 추가
          svgViewportTransformation: true,
        });

        if (isParticles) {
          img.scaleToWidth(30);
        } else if(isP) {
          img.scaleToWidth(50);
        } else {
          img.scaleToWidth(100);
        }

        canvas.add(img);

        if (frame) {
          frame.sendToBack();
        } // frame이 존재하면 frame을 뒤로 보냄
        
        canvas.renderAll();
      });
    };

  return (
    <s.StickerList>
      {stickerData1.map( (stickerData1, index) => (
        ( stickerData1.spec === 'particles' ? (          
          <img
            key={index}
            src={stickerData1.src} onClick={(e) => handleImageClick(e)}
            data-spec={stickerData1.spec} 
            width='50px'
            height='auto'
          />
          ):( <img
                key={index}
                src={stickerData1.src} onClick={(e) => handleImageClick(e)}
                data-spec={stickerData1.spec}
                height='auto'
                width='130px'
              />
          ))
        )
      )}
      {stickerData2.map( (stickerData2, index) => (
        ( stickerData2.spec === 'm' ? (
          <img
            key={index}
            src={stickerData2.src} onClick={(e) => handleImageClick(e)}
            data-spec={stickerData2.spec}
            width='100px'
            height='auto'
          />
          ):( <img
                key={index}
                src={stickerData2.src} onClick={(e) => handleImageClick(e)}
                data-spec={stickerData2.spec}
                width='50px'
              />
          ))
        )
      )}
    </s.StickerList>
  );
};
