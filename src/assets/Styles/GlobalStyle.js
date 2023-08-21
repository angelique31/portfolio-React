import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
    font-family: "Source Sans Pro", sans-serif;
    
  }
//   body {
//     overflow-y: scroll;
// }
body.modal-open {
  overflow: hidden;
}

}

`;

export default GlobalStyles;
