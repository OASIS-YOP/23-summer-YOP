// import { useEffect } from 'react';
// // import { fabric } from 'fabric';
// // import * as s from './styles';


// export const CtrlKeyDown = () => {


// const handleCtrlKeyDown = (e, onCopy, onPaste, onCut, canvas ) => {

//   if (e.ctrlKey) {
//     if (e.key === 'c') {
//       // 복사
//       if (canvas.getActiveObject() !== null && canvas.getActiveObject() !== undefined) {
//         // 선택된 객체가 있는지 확인
//         const activeObject = canvas.getActiveObject().toObject();
//         // console.log(typeof activeObject);
//         onCopy(activeObject);
//         } else {
//           console.log('no object is selected');
//         }
//     } else if (e.key === 'v') {
//       // 붙여넣기
//       onPaste();
//       // 마우스 좌클릭 위치를 onPaste 함수로 전달
//     } else if (e.key === 'x') {
//       // 잘라내기
//       if (canvas.getActiveObject() !== null || undefined) {
//         // 선택된 객체가 있는지 확인
//         const activeObject = canvas.getActiveObject().toObject();
//         // console.log(typeof activeObject);
//         onCut(activeObject);
//         } else {
//           console.log('no object is selected');
//         }}
//     //  else if (e.key === '') {
//     //   // 삭제
//     //   if (canvas.getActiveObject() !== null || undefined) {
//     //     // 선택된 객체가 있는지 확인
//     //     const activeObject = canvas.getActiveObject().toObject();
//     //     // console.log(typeof activeObject);
//     //     onDelete(activeObject);    
//     //     } else {
//     //       console.log('no object is selected');
//     //     }
//     // }
//   }}

// useEffect(() => {
//   window.addEventListener('keydown', handleCtrlKeyDown);
//   return () => {
//     window.removeEventListener('keydown', handleCtrlKeyDown);
//   };
// }, []);
// }