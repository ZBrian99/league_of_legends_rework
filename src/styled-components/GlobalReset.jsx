import { css, Global } from '@emotion/react';

export const GlobalReset = () => {
	return (
		<Global
			styles={css`
				@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700&display=swap');

				:root {
				}

				@media (prefers-color-scheme: dark) {
					:root {
					}
				}

				*,
				*::before,
				*::after {
					margin: 0;
					padding: 0;
					border: 0;
					-webkit-box-sizing: border-box;
					box-sizing: border-box;
					vertical-align: baseline;
				}

				body {
					background-color: #0a0a0c;
					min-height: 100vh;
					font-size: 100%;
					font-family: 'Roboto Slab', serif;
					letter-spacing: 1px;
					color: var(--negro);
					/* opcional */
					line-height: 1.4em;
					/* opcional */
					-webkit-hyphens: auto;
					-ms-hyphens: auto;
					hyphens: auto;
					/* opcional */
					font-smooth: always;
					/* opcional */
					-webkit-font-smoothing: antialiased;
					/* opcional */
					-moz-osx-font-smoothing: grayscale;
				}

				img,
				picture,
				video,
				iframe,
				figure {
					max-width: 100%;
					width: 100%;
					display: block;
					/* -o-object-fit: cover;
					object-fit: cover;
					-o-object-position: center center;
					object-position: center center; */
				}

				a {
					display: block;
					text-decoration: none;
					color: inherit;
					font-size: inherit;
				}

				p a {
					display: inline;
				}

				li {
					list-style-type: none;
				}

				html {
					scroll-behavior: smooth;
				}

				h1,
				h2,
				h3,
				h4,
				h5,
				h6,
				p,
				span,
				a,
				strong,
				blockquote,
				i,
				b,
				u,
				em {
					font-size: 1em;
					font-weight: inherit;
					font-style: inherit;
					text-decoration: none;
					color: inherit;
				}

				blockquote:before,
				blockquote:after,
				q:before,
				q:after {
					content: '';
					content: none;
				}

				form,
				input,
				textarea,
				select,
				button,
				label {
					font-family: inherit;
					font-size: inherit;
					-webkit-hyphens: auto;
					-ms-hyphens: auto;
					hyphens: auto;
					background-color: transparent;
					color: inherit;
					display: block;
					/* opcional */
					-webkit-appearance: none;
					-moz-appearance: none;
					appearance: none;
				}

				table,
				tr,
				td {
					border-collapse: collapse;
					border-spacing: 0;
				}

				svg {
					width: 100%;
					display: block;
					fill: currentColor;
				}
			`}
		/>
	);
};
