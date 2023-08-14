import * as s from './styles';


// eslint-disable-next-line react/prop-types
export const ButtonGroupContainer = ({ handleChangedFile, fileInputRef, canvas }) => {

  const Undo = () =>{
    if(canvas){

      

    }

  };

  const Redo = ()=>{
    if(canvas){


    }
  };

  const RemoveAll = () => {
    if(canvas){
      canvas.remove(...canvas.getObjects());
    }
  };


  return (
    <>
      <s.Container>
        <s.ImageLoadButton htmlFor='file'>
          <s.ImageLoadButtonLabel htmlFor='file'>
            이미지 불러오기
          </s.ImageLoadButtonLabel>
          <s.Input
            type='file'
            id='file'
            onChange={handleChangedFile}
            ref={fileInputRef}
          />
        </s.ImageLoadButton>
        <s.Button>저장하기</s.Button>
        <s.Button>내 이미지 보기</s.Button>
        <s.Button onClick = {Undo} canvas={canvas}>←</s.Button>
        <s.Button onClick = {Redo} canvas={canvas}>→</s.Button>
        <s.Button onClick = {RemoveAll} canvas={canvas}>모두 지우기</s.Button>
      </s.Container>
    </>
  );
};
