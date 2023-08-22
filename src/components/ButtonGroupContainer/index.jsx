import * as s from './styles';
import 'fabric-history';
import { ReactComponent as ViewGallaryIcon } from '../../assets/Button/ViewGallaryIcon.svg';
import { ReactComponent as SaveIcon } from '../../assets/Button/SaveIcon.svg';
import { ReactComponent as HomeIcon } from '../../assets/Button/HomeIcon.svg';
import { ReactComponent as RedoIcon } from '../../assets/Button/RedoIcon.svg';
import { ReactComponent as UndoIcon } from '../../assets/Button/UndoIcon.svg';
import { ReactComponent as LoadImageIcon } from '../../assets/Button/LoadImageIcon.svg';
import { ReactComponent as ClearIcon } from '../../assets/Button/ClearIcon.svg';

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
      canvas.renderAll();
    }
  };

  const Redo = () => {
    if (canvas) {
      canvas.redo();
      canvas.renderAll();
    }
  };

  const RemoveAll = () => {
    if (canvas) {
      canvas.remove(...canvas.getObjects());
      canvas.backgroundImage = null;
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
    setIsSelectPage(true);
  };

  return (
    // <s.ButtonGroupWrapper>
    //   <s.Container>
    //     <s.ImageLoadButton htmlFor='file'>
    //       <s.ImageLoadButtonLabel htmlFor='file'>
    //         이미지 불러오기
    //       </s.ImageLoadButtonLabel>
    //       <s.Input
    //         type='file'
    //         id='file'
    //         onChange={handleChangedFile}
    //         ref={fileInputRef}
    //       />
    //     </s.ImageLoadButton>
    //     <s.Button>저장하기</s.Button>
    //     <s.Button>내 이미지 보기</s.Button>
    //     <s.Button onClick={Undo} canvas={canvas}>
    //       ←
    //     </s.Button>
    //     <s.Button onClick={Redo} canvas={canvas}>
    //       →
    //     </s.Button>
    //     <s.Button onClick={RemoveAll} canvas={canvas}>
    //       모두 지우기
    //     </s.Button>
    //   {/* <s.Button onClick={ReturnToSelect}>
    //     폴라로이드 크기 다시 선택하기
    //   </s.Button> */}
    // {/* </s.Container> */}
    <s.ButtonGroupWrapper>
      <s.Container>
        <s.Button onClick={onClickHome}>
          <HomeIcon className='icon' width='4vh' height='100%' />
        </s.Button>
        <s.Button>
          <s.ImageLoadButtonLabel htmlFor='file'>
            <LoadImageIcon className='icon' width='4vh' height='100%'/>
          </s.ImageLoadButtonLabel>
          <s.Input
            type='file'
            id='file'
            onChange={handleChangedFile}
            ref={fileInputRef}
          />
        </s.Button>
        <s.Button>
          <SaveIcon className='icon' width='4vh' height='100%'/>
        </s.Button>
        <s.Button>
          <ViewGallaryIcon className='icon' width='4vh' height='100%'/>
        </s.Button>
        <s.Button onClick={Undo} canvas={canvas}>
          <UndoIcon className='icon' width='4vh' height='100%'/>
        </s.Button>
        <s.Button onClick={Redo} canvas={canvas}>
          <RedoIcon className='icon' width='4vh' height='100%'/>
        </s.Button>
        <s.Button onClick={RemoveAll} canvas={canvas}>
          <ClearIcon className='icon' width='4vh' height='100%'/>
        </s.Button>
      </s.Container>
    </s.ButtonGroupWrapper>
  );
};
