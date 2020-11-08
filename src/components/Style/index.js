import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

export const Colors = {
  bambu: '#0c3c4a',
  black: '#3a3a3a',
  light: '#999999',
  darkgray: '#636262',
  white: '#f6f6fb',
  shadow: '3px 4px 9px 0px rgba(0, 0, 0, 0.15)',
};

export const GlobalStyle = createGlobalStyle`
  
  html {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 10px;
    background-color: ${Colors.white};
  }

  a {
    color: inherit;
    text-decoration:none;
  }

  body{
    margin:0;
  }

  h1, h2, h3, h4, h5, h6 {
  
    margin:0;
  }

  h1 {
    font-size: 30px;
    font-family: 'Avenir', 'Source Sans Pro', sans-serif;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  h5 {
    font-family: 'Avenir', 'Source Sans Pro', sans-serif;
  font-size: 18px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${Colors.black}

  }

  h6 {
    font-family: 'OpenSans', 'Source Sans Pro', sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${Colors.black}
  }

  p {
    font-family: OpenSans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${Colors.light}
  }
`;


export const LoginButton = styled.button`
border-radius: 4px;
  border: solid 1px ${Colors.light};
  background: ${Colors.white};
  color: ${Colors.black};
  &:active {
    background: ${Colors.bambu};
  }
`;