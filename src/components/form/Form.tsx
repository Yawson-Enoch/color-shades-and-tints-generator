import { Button, FormContainer, Input, InputContainer } from './Form.styles';
import { useColorsContext } from '../../store/ColorGeneratorContext';

const Form = () => {
  const {
    onFormSubmit,
    color,
    number,
    onInputNumberChange,
    onInputTextChange,
  } = useColorsContext();

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <InputContainer>
        <label htmlFor='color'>color</label>
        <Input
          type='text'
          name='color'
          id='color'
          placeholder='add color'
          value={color}
          onChange={onInputTextChange}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor='number'>division</label>
        <Input
          type='number'
          name='number'
          id='number'
          step='10'
          min='10'
          max='100'
          value={number}
          onChange={onInputNumberChange}
        />
      </InputContainer>
      <Button type='submit'>generate</Button>
    </FormContainer>
  );
};

export default Form;
