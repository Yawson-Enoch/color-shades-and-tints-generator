import {
  FC,
  createContext,
  ChangeEvent,
  FormEvent,
  useContext,
  useState,
} from 'react';
import Values from 'values.js';

const ColorsContext = createContext<any>({
  list: [],
  onInputTextChange: (e: ChangeEvent<HTMLInputElement>) => {},
  onInputNumberChange: (e: ChangeEvent<HTMLInputElement>) => {},
  onFormSubmit: (e: FormEvent) => {},
});

const ColorContextProvider: FC = ({ children }) => {
  const [color, setColor] = useState('blue');
  const [number, setNumber] = useState(10);
  const [list, setList] = useState<any>(new Values('blue').all(10));

  const onInputTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setColor(value);
  };

  const onInputNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNumber(+value);
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(number);
      setList(colors);
    } catch (error) {
      console.log(error);
    }
  };

  const contextValues: any = {
    color,
    number,
    list,
    onFormSubmit,
    onInputNumberChange,
    onInputTextChange,
  };

  return (
    <ColorsContext.Provider value={contextValues}>
      {children}
    </ColorsContext.Provider>
  );
};

const useColorsContext = () => useContext(ColorsContext);

export { ColorContextProvider, useColorsContext };
