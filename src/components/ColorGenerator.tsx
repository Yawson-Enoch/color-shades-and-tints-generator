import { H1, MainContainer } from './ColorGenerator.style';
import ColorSection from './colors-box/ColorSection';
import Form from './form/Form';
const ColorGenerator = () => {
  return (
      <MainContainer>
        <H1>Color Tints & Shades Generator</H1>
        <Form />
        <ColorSection />
      </MainContainer>
  );
};

export default ColorGenerator;
