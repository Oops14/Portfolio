import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: ${theme.colors.font};
        background-color: ${theme.colors.mainBgColor};

        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
	    overflow-x: hidden;
        font-size: 16px;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    }

    img {
        height: auto;
        vertical-align: middle;
        max-width: 100%;
    }

    //**** BASE INPUT ****//
    input[type="text"],
    input[type="tel"],
    input[type="password"],
    input[type="number"],
    input[type="email"],
    input[type="date"],
    input[type="time"],
    input[type="url"],
    select {
        height: 40px;
        width: 100%;
        outline: none;
        border: 2px solid rgba(16, 16, 16, 0.05);
        padding-left: 20px;
        padding-right: 20px;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
    
    p {
      letter-spacing: 0.8px;
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      letter-spacing: 0.8px;
    }
    
    h1 {
      font-size: 72px;
    }
    
    h2 {
      font-size: 24px;
    }
    
    h3 {
      font-size: 20px;
    }
    
    h4 {
      font-size: 16px;
    }
    
    h5 {
      font-size: 14px;
    }
`;
