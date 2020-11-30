import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	body,
	html,
	#root {
		height: 100%;
	}

	html {
		box-sizing: border-box;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	body {
		font-family: Roboto, sans-serif;
	}
	
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	h1 {
		font-family: 'Permanent Marker', cursive;
	}

	h2, h3, p {
		padding: 0;
		margin: 0;
	}
`;

export default GlobalStyles;