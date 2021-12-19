import { GlobalStyles } from './global-styles/styles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './global-variables/variables';
import ColorContextProvider from './store/ColorGeneratorContext';
import ColorGenerator from './components/ColorGenerator';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <ColorContextProvider>
        <>
          <GlobalStyles />
          <ColorGenerator />
        </>
      </ColorContextProvider>
    </ThemeProvider>
  );
};

export default App;
