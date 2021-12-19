import { ColorSectionWrapper } from './ColorSection.style';
import { ColorsContext } from '../../store/ColorGeneratorContext';
import { useContext } from 'react';
import ColorBox from './color-box/ColorBox';

const ColorSection = () => {
  const mapList = useContext(ColorsContext);
  return (
    <ColorSectionWrapper>
      {mapList.list.map((color: any, index: number) => {
        return <ColorBox index = {index} color={color} key={index} />;
      })}
    </ColorSectionWrapper>
  );
};

export default ColorSection;
