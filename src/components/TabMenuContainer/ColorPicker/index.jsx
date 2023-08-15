import Chrome from '@uiw/react-color-chrome';
import { GithubPlacement } from '@uiw/react-color-github';

export const Demo = ({ textColor, setTextColor }) => {
  return (
    <>
      <Chrome
        color={textColor}
        style={{ float: 'left' }}
        placement={GithubPlacement.Right}
        onChange={(color) => {
          // Update the color value using the setTextColor setter function.
          setTextColor(color.hexa);
        }}
      />

      <div style={{ background: textColor, marginTop: 30, padding: 10 }}>
        {textColor}
      </div>
    </>
  );
};
