import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Playfair Display';
  src: url('/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
}




html {
  scroll-behavior: smooth;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
    font-family: "Source Sans Pro", sans-serif;
}

body.modal-open {
  overflow: hidden;
}

h1, h2{
  font-family: 'Playfair Display', sans-serif;
  font-size: 1.5rem;
  color: #ffb957;
}
`;

export default GlobalStyles;
