import styled from 'styled-components';
import { colors } from '../global-variables/variables';
export const MainContainer = styled.main`
  width: 95%;
  padding: 1.5rem;
  margin: 0 auto;
  box-shadow: 0 0 50px ${colors.others.black};
  border-radius: 1.5rem;
  max-width: 1170px;
`;

export const H1 = styled.h1`
  width: fit-content;
  margin: 0 auto;
  font-size: 1.7rem;
  background: linear-gradient(to right, red, yellow, green, blue);
  background-clip: text;
  color: transparent;
  text-align: center;

  @media (min-width: 800px) {
    font-size: 2.2rem;
  }
`;
