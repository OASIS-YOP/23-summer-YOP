import { useState } from 'react';
import * as s from './styles';


export const ContextMenu = () => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault(); // 기본 컨텍스트 메뉴 표시 방지
    setPosition({ top: e.clientY, left: e.clientX });
    setContextMenuVisible(true);
  };

  const hideContextMenu = () => {
    setContextMenuVisible(false);
  };

  return (
    <s.ContextMenuContainer onContextMenu={handleContextMenu}>
      {contextMenuVisible && (
        <s.ContextMenu style={{ top: position.top, left: position.left }}>
          <div onClick={hideContextMenu}>Option 1</div>
          <div onClick={hideContextMenu}>Option 2</div>
          <div onClick={hideContextMenu}>Option 3</div>
        </s.ContextMenu>
      )}
    </s.ContextMenuContainer>
  );
};