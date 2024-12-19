import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    #root {
        width: 100%;
    }
    h1 {
        font-size: 2.4rem;
        font-weight: bold;
    }
    h2 {
        font-size: 2rem;
        font-weight: bold;
    }
    h3 {
        font-size: 1.6rem;
        font-weight: bold;
    }
    h4 {
        font-size: 1.4rem;
        font-weight: bold;
    }
    h5 {
        font-size: 1rem;
    }
    h6 {
        font-size: 1rem;
    }
    strong {
        font-weight: bold;
    }
    ul {
        padding: 0.6rem 0;
        background-color: #d8e3df;
    }
`;

export default GlobalStyle;