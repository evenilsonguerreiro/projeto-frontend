import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif; 
  }

   html, body {
     background-color: #f1f1f1ff;
     overflow: hidden;
     overflow-y: auto;
  }

`
