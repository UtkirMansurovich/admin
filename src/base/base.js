import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        font-family: ${props => props.fontPrimary ? " 'Nunito', sans-serif " : " 'Josefin Sans', sans-serif "};
        color: #000;
        font-weight: 300;
        line-height: 1.6;
    }
`;

export default GlobalStyle;
