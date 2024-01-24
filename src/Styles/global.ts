import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    ul, li {
        list-style: none;
    }


    button {
        border: none;
    }

    input {
        outline: none;
    }

    
`;

export default GlobalStyles;
