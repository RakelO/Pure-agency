import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    overflow-y: scroll;
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    height: 100%;
    font-size: 16px;
  }
`;

export const theme = {
  colors: {
    background: '#fbfbfd',
    green: '#61AD15',
    darkGreen: '#518B18',
    lightGrey: '#E7E9F0',
    lightGrey2: '#A8ACBC',
    grey: '#5D606B',
    darkGrey: '#333848',
    white: '#fff',
    purple: '#6E5BE2',
    darkPurple: '#5141B3',
    disabled: '#F4F6F9',
  }
};
