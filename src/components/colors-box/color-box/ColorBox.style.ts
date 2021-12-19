import styled from 'styled-components';

interface IndexProp {
  index: number;
}

export const ColorBoxWrapper = styled.div<IndexProp>`
  padding: 0.5rem 1rem;
  min-height: 140px;
  color: ${(props) => (props.index <= 5 ? 'grey' : 'white')};

  p{
    line-height: 2.2;
  }

  .last{
    text-transform: uppercase;
    font-size: 1.1rem;
  }
`;
