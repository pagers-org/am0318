import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import './assets/css/font.css';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  h1{
    font-family:'UhBeeSe_hyun';
  }
`;
