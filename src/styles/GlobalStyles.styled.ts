import { createGlobalStyle } from "styled-components";

import { rem, size, theme } from "./Utilities.styled";


export const GlobalStyles = createGlobalStyle`

    :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        // insert CSS variables here
    }

    *, ::before, ::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        /* scroll-behavior: smooth; */ // for faster scroll to top during page transitions
        height: 100%;
    }

    body {
        min-height: 100%;
        background-color: ${theme.colors.white};
        font-family: ${theme.fonts.primary};
        font-size: ${rem(16)};
        line-height: 1.5;
        overflow-x: hidden;
    }

    h1, h2 {
        line-height: 1.1;
    }

    h3, h4, h5, h6 {
        line-height: 1.2;
    }

    img, iframe {
        display: block;
        ${size("100%")}
        max-width: 100%;
        object-fit: cover;
        object-position: center;
        border-style: none;  // Remove the border on images inside links in IE 10.
    }

    ul, ol {
        list-style-type: none;
    }

    a {
        font-family: inherit;
        color: inherit;
        display: inline-block;
        text-decoration: none;
    }

    button, input, select, textarea {
        border: none;
        font-family: inherit;
    }

    button {
        cursor: pointer;
        background: none;
    }

   //  Correct the inability to style clickable types in iOS and Safari.

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
    -webkit-appearance: button;
    }

    // Remove all animations and transitions for users
    // who have it turned off in system settings
    @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
        animation-delay: -1ms !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        background-attachment: initial !important;
        scroll-behavior: auto !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
    }
}
`;
