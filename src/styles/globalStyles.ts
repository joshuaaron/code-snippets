import { css } from '@emotion/core';

export const globalStyles = () => css`
	html {
		box-sizing: border-box;
		font-size: 16px;
	}

	*, *::before, *::after {
		box-sizing: inherit;
	}

	html, body {
		margin: 0;
		padding: 0;
		height: 100%;
	}

	h1, h2, h3, h4, h5, h6, p, ol, ul {
		margin: 0;
		padding: 0;
	}

	ol, ul {
		list-style: none;
	}

	img {
		max-width: 100%;
		height: auto;
	}
`;