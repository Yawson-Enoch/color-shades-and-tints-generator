import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  font-size: 62.5%;
  scroll-behavior: smooth;
  scroll-padding-top: 2rem;
}

*,
before,
after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: none;
}

:focus-visible {
  outline: 2px solid ${({ theme }) => theme.blue};
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  overflow-x: hidden;
  opacity: 0.85;
  min-height: 100vh;
}

#root{
  width: 100%;
  min-height: 100vh;
  padding: 3rem;
}

p {
  line-height: 1.7;
}

h1, h2, h3, h4, h5, h6{
  line-height: 1.3;
  text-transform: capitalize;
  font-weight: 700;
}

input, textarea, select, button, label {
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  display: block;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  display: block;
}
`;
