import { ColorSectionWrapper } from './ColorSection.styles';
import ColorBox from './color-box/ColorBox';
import { useColorsContext } from '../../store/ColorGeneratorContext';

const ColorSection = () => {
  const { list } = useColorsContext();
  return (
    <ColorSectionWrapper>
      {list.map((color: any, index: number) => {
        return <ColorBox index={index} color={color} key={index} />;
      })}
    </ColorSectionWrapper>
  );
};

export default ColorSection;
