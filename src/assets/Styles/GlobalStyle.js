import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

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
 
  font-size: 1.5rem;
  color: #ffb957;
}

.special-title {
  font-family: "Dancing Script", cursive;
  font-weight: 500; 
}
`;

export default GlobalStyles;
