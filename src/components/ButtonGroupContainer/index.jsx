import * as s from './styles';
import 'fabric-history';
// import { ReactComponent as ViewGallaryIcon } from '../../assets/Button/ViewGallaryIcon.svg';
import { ReactComponent as SaveIcon } from '../../assets/Button/SaveIcon.svg';
import { ReactComponent as HomeIcon } from '../../assets/Button/HomeIcon.svg';
import { ReactComponent as RedoIcon } from '../../assets/Button/RedoIcon.svg';
import { ReactComponent as UndoIcon } from '../../assets/Button/UndoIcon.svg';
import { ReactComponent as LoadImageIcon } from '../../assets/Button/LoadImageIcon.svg';
import { ReactComponent as ClearIcon } from '../../assets/Button/ClearIcon.svg';
import { Tooltip } from 'react-tooltip';
import { saveAs } from 'file-saver';

// eslint-disable-next-line react/prop-types
export const ButtonGroupContainer = ({
  handleChangedFile,
  setIsSelectPage,
  fileInputRef,
  canvas,
}) => {
  // canvas.on("object:added", function (e) {
  //     var object = e.target;
  //     // console.log('object:modified');

  //     if (action === true) {
  //         state = [state[index2]];
  //         list = [list[index2]];

  //         action = false;
  //         // console.log(state);
  //         index = 1;
  //     }
  //     object.saveState();

  //     // console.log(object.originalState);
  //     state[index] = JSON.stringify(object.originalState);
  //     list[index] = object;
  //     index++;
  //     index2 = index - 1;

  //     refresh = true;
  // });

  // canvas.on("object:modified", function (e) {
  //     var object = e.target;
  //     // console.log('object:modified');

  //     if (action === true) {
  //         state = [state[index2]];
  //         list = [list[index2]];

  //         action = false;
  //         // console.log(state);
  //         index = 1;
  //     }

  //     object.saveState();

  //     state[index] = JSON.stringify(object.originalState);
  //     list[index] = object;
  //     index++;
  //     index2 = index - 1;

  //     // console.log(state);
  //     refresh = true;
  // });

  // function undo() {

  //     if (index <= 0) {
  //         index = 0;
  //         return;
  //     }

  //     if (refresh === true) {
  //         index--;
  //         refresh = false;
  //     }

  //     console.log('undo');

  //     index2 = index - 1;
  //     100% = list[index2];
  //     console.log("index2",index2);
  //     console.log("state", state)
  //     100%.setOptions(JSON.parse(state[index2]));

  //     index--;
  //     100%.setCoords();
  //     canvas.renderAll();
  //     action = true;
  // }

  // function redo() {

  //     action = true;
  //     if (index >= state.length - 1) {
  //         return;
  //     }

  //     console.log('redo');

  //     index2 = index + 1;
  //     100% = list[index2];
  //     100%.setOptions(JSON.parse(state[index2]));

  //     index++;
  //     100%.setCoords();
  //     canvas.renderAll();
  // }

  const Undo = () => {
    if (canvas) {
      canvas.undo();
      console.log('undo');

      canvas.renderAll();
    }
  };

  const Redo = () => {
    if (canvas) {
      canvas.redo();
      console.log('redo');

      canvas.renderAll();
    }
  };

  const RemoveAll = () => {
    if (canvas) {
      if (
        confirm(
          '이미지를 포함한 모든 요소가 초기화됩니다. 정말 삭제하시겠습니까?'
        )
      ) {
        canvas.backgroundImage = null;
        // canvas.remove(...canvas.getObjects());
        // canvas.renderAll();
        canvas.clear();
      }
    }
  };

  // const ReturnToSelect = () => {
  //   return(
  //     <>
  //       <SelectSizePage
  //         isClickedOk={isClickedOk}
  //         selectCanvasSize={selectCanvasSize}
  //       />
  //     </>

  //   )
  // };

  const onClickHome = () => {
    if (confirm('캔버스가 초기화됩니다. 선택페이지로 이동하시겠습니까?')) {
      setIsSelectPage(true);
    }
  };

  //이미지 저장
  const onClickSave = () => {
    if (confirm('편집한 이미지를 저장하시겠습니까?')) {
      const imageData = canvas.toDataURL({
        format: 'png',
        quality: 1,
      });

      const img = new Image();
      img.src = imageData;
      saveAs(imageData, 'YOP.png');
    }
  };

  const tooltipStyle = {
    backgroundColor: 'white',
    color: 'gray',
    zIndex: '999',
  };

  return (
    <s.ButtonGroupWrapper>
      <s.Container>
        <s.Button>
          <s.ImageLoadButtonLabel htmlFor='file'>
            <LoadImageIcon
              id='loadImage_icon'
              className='icon'
              width='4vh'
              height='100%'
            />
          </s.ImageLoadButtonLabel>
          <s.Input
            type='file'
            id='file'
            onChange={handleChangedFile}
            ref={fileInputRef}
          />
        </s.Button>
        <Tooltip
          anchorSelect='#loadImage_icon'
          key={`tooltip_loadImage_icon`}
          content={'이미지 불러오기'}
          place='right-start'
          border='1px solid gray'
          style={tooltipStyle}
        />
        <s.Button onClick={onClickSave}>
          <SaveIcon id='save_icon' className='icon' width='4vh' height='100%' />
        </s.Button>
        <Tooltip
          anchorSelect='#save_icon'
          key={`tooltip_save_icon`}
          content={'이미지 저장하기'}
          place='right-start'
          border='1px solid gray'
          style={tooltipStyle}
        />
        {/* <s.Button>
          <ViewGallaryIcon
            id='viewGallary_icon'
            className='icon'
            width='4vh'
            height='100%'
            />
            </s.Button>
            <Tooltip
            anchorSelect='#viewGallary_icon'
            key={`tooltip_viewGallary_icon`}
            content={'내 이미지 보기'}
            place='right-start'
            style={{ backgroundColor: 'white', color: 'gray' }}
          /> */}
        <s.Button onClick={Undo} canvas={canvas}>
          <UndoIcon id='undo_icon' className='icon' width='4vh' height='100%' />
        </s.Button>
        <Tooltip
          anchorSelect='#undo_icon'
          key={`tooltip_undo_icon`}
          content={'실행취소'}
          place='right-start'
          border='1px solid gray'
          style={tooltipStyle}
        />
        <s.Button onClick={Redo} canvas={canvas}>
          <RedoIcon id='redo_icon' className='icon' width='4vh' height='100%' />
        </s.Button>
        <Tooltip
          anchorSelect='#redo_icon'
          key={`tooltip_redo_icon`}
          content={'되돌리기'}
          place='right-start'
          border='1px solid gray'
          style={tooltipStyle}
        />
        <s.Button onClick={RemoveAll} canvas={canvas}>
          <ClearIcon
            id='removeAll_icon'
            className='icon'
            width='4vh'
            height='100%'
          />
        </s.Button>
        <Tooltip
          anchorSelect='#removeAll_icon'
          key={`tooltip_removeAll_icon`}
          content={'모두 지우기'}
          place='right-start'
          border='1px solid gray'
          style={tooltipStyle}
        />
        <s.Button onClick={onClickHome}>
          <HomeIcon id='home_icon' className='icon' width='4vh' height='100%' />
        </s.Button>
        <Tooltip
          anchorSelect='#home_icon'
          key={`tooltip_home_icon`}
          content={'사이즈 다시 선택'}
          place='right-start'
          border='1px solid gray'
          style={tooltipStyle}
        />
      </s.Container>
    </s.ButtonGroupWrapper>
  );
};
