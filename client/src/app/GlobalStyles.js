import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
   *{
      margin:0;
      padding: 0;
      box-sizing: border-box;
   }
   html {
      font-size: 62.5%;
   }

   body{
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      font-size: 1.6rem;
      background: #222020;
      color: #333;
  }
`;

export default GlobalStyles;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
`;
