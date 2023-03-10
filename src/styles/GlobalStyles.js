import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,*::after,*::before{
   
	box-sizing: border-box;
}

body {
	margin: 0;
	font-family: sans-serif;
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
    background-color: ${({ dark }) => (dark ? '#FFFFFF' : '#1D1F29')};
}


`;

export { GlobalStyle };
