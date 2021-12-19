import {useContext} from 'react'
import { Button, FormContainer, Input, InputContainer } from './Form.style';
import { ColorsContext } from '../../store/ColorGeneratorContext';


const Form = () => {
    const form = useContext(ColorsContext);

  return (
    <FormContainer onSubmit={form.onFormSubmit} >
      <InputContainer>
        <label htmlFor='color'>color</label>
        <Input type='text' name='color' id='color' placeholder='add color' value={form.color} onChange={form.onInputTextChange}/>
        
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
          value={form.number}
          onChange={form.onInputNumberChange}
        />
      </InputContainer>
      <Button type='submit'>generate</Button>
    </FormContainer>
  );
};

export default Form;
