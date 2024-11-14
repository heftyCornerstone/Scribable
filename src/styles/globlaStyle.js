import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    #root {
        width: 100%;
    }
    button { 
        border-color: gray;
    }
`;

export default GlobalStyle;