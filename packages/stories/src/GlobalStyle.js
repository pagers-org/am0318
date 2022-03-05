import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import './assets/css/font.css';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  h1{
    font-family:'UhBeeSe_hyun';
  }
`;

export default GlobalStyle;
