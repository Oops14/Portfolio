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

export const GlobalReset = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    	margin: 0;
    	padding: 0;
    	border: 0;
    	vertical-align: baseline;
    	font: inherit;
    	font-size: 100%;
    }

    *,
    *:before,
    *:after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    
    html {
        line-height: 1;
    }
    
    ol, ul {
        list-style: none;
    }
    
    caption, th, td {
        vertical-align: middle;
        text-align: left;
    }
    
    q, blockquote {
        quotes: none;
    }
    q:before, q:after, blockquote:before, blockquote:after {
        content: "";
        content: none;
    }
    
    a img {
        border: none;
    }
    
    article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
        display: block;
    }
    
    a, button, input {
        -ms-touch-action: manipulation;
        touch-action: manipulation;
    }
    
    button,
    input,
    optgroup,
    select,
    textarea {
        margin: 0;
        color: inherit;
        font: inherit;
    }
    
    button {
        overflow: visible;
    }
    
    button,
    html input[type="button"],
    input[type="reset"],
    input[type="submit"] {
        cursor: pointer;
        -webkit-appearance: button;
    }
    
    button::-moz-focus-inner,
    input::-moz-focus-inner {
        padding: 0;
        border: 0;
    }
`;
