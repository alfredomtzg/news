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
    color: ${Colors.bambu}
  }

  h5 {
    font-family: 'Avenir', 'Source Sans Pro', sans-serif;
  font-size: 18px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: .5rem 0;
  color: ${Colors.black};

  }

  h6 {
    font-family: 'OpenSans', 'Source Sans Pro', sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: .5rem 0;
  color: ${Colors.black};
  }

  p {
    font-family: OpenSans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${Colors.light};
  margin: .5rem 0;
  }
`;


export const LoginButton = styled.button`
border-radius: 4px;
  border: solid 1px ${Colors.light};
  background: ${Colors.white};
  color: ${Colors.black};
  &:active {
    background: ${Colors.bambu};
  };
`;

// Header style
export const HeaderContainer = styled.header`
width:100%;
box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
background-color:${Colors.white};
`;

export const HeaderCenter = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
max-width: 136rem;
max-height: 8rem;
margin: 0 auto;
padding: 0 3.2rem;
`;

export const ImgContainer = styled.img`
  width: 167px;
  height: 80px;
`;

export const ImgLogo = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  color:${Colors.bambu};
`;

export const UserContainer = styled.div`
display:flex;
align-items:center;
p {
  margin-right: 1.5rem;
};
`;

// Main style
export const MainContainer = styled.main`
padding: 3.2rem 16rem;
`;

export const NewsContainer = styled.section`
max-width: 136rem;
margin: 0 auto;
padding-top: 4rem;
display: grid;
grid-template-columns: repeat(3, 1fr);
column-gap:5rem;
row-gap:4.8rem;

`;

export const SelectInput = styled.select`
  display: inline-flex;
  width: 20rem;
  height: 48px;
  padding: 0.8rem 1.2rem;
  margin-right: 4.8rem;
  box-sizing: border-box;
  border: 0.1rem solid ${Colors.light};
  border-radius: 0.5rem;
  color: ${Colors.darkgray};
  background-color: ${Colors.white};
  text-align-last: center;
  caret-color: ${Colors.white};

  &:focus {
    outline: none;
  };
`;

// CardsNew style

export const CardNewContainer = styled.div`
  max-width: 31.2rem;
  border-radius: 1.2rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: ${Colors.white};

  `;
export const ImgCard = styled.img`
  width: 100%;
  height: 19.2rem;
  border-radius: 1.2rem 1.2rem 0 0;
`;

export const DescriptionContainer = styled.div`
padding: 1.6rem;
`;