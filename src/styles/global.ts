import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --clr-white: #ffffff;
        --clr-primary-light: #f4fafd;
        --clr-primary-dark: #0f0e0e;
        --clr-dark-blue: #0f1e32;
        --clr-light-blue: #5886af;
        --clr-light-brown: #eac77d;
        --clr-dark-brown: #ca9b63;
        --clr-dark-gray: #3f3c3c;
        --clr-light-gray: #707070;

        --ff-sans-serif: 'Montserrat', sans-serif;
        --ff-serif: 'Playfair Display', serif;
    }

    html {
        scroll-behavior: smooth;
    }

    ::selection {
        background: var(--clr-primary-dark);
        color: var(--clr-primary-light);
    }

    ::-moz-selection {
        background: var(--clr-primary-dark);
        color: var(--clr-white);
    }

    a {
        text-decoration: none;
        color: var(--clr-dark-blue);
    }

    li {
        list-style: none;
    }

    body {
        background-color: var(--clr-primary-light);
        color: var(--clr-dark-blue);
        font-family: var(--ff-sans-serif);
        line-height: 1.6;
    }

    .container {
        width: 100%;
        max-width: 95%;
        margin: 0 auto;
    }

    section,
    main {
        margin-top: 12vh;
    }

    .active,
    .isActive {
        position: relative;
    }

    .active::after,
    .isActive::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 0.165rem;
      background: var(--clr-primary-dark);
    }
    
    .active::after {
      bottom: -0.85rem;

    }

    .isActive::after {
      bottom: -0.45rem;
    }

    @media screen and (min-width: 768px) {
    section,
        main {
             margin-top: 20vh;
        }
    }
`;
