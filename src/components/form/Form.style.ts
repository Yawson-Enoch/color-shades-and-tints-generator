import styled from 'styled-components';
import { colors } from '../../global-variables/variables';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    margin-top: 1.5rem;

    @media (min-width: 800px) {
      flex-direction: row;
    }
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.3rem;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
export const Input = styled.input`
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  border: 2px solid ${colors.grey.grey700};
  border-radius: 0.5rem;
  width: 10rem;
  padding: 0.5rem 1rem;
`;

export const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${colors.blue.blue400};
  align-self: center;
  color: ${colors.others.white};
  text-transform: uppercase;
  font-weight: bolder;
  transition: background 0.3s ease-ease-in-out;

  &:hover {
    background: ${colors.blue.blue300};
  }
`;
