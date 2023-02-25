import { css, Global } from '@emotion/react';

export const GlobalReset = () => {
	return (
		<Global
			styles={css`
				@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700&display=swap');

				*,
				*::before,
				*::after {
					margin: 0;
					padding: 0;
					border: 0;
					box-sizing: border-box;
				}

				body {
					background-color: #0a0a0c;
					min-height: 100vh;
					font-size: 100%;
					font-family: 'Roboto Slab', serif;
					letter-spacing: 1px;
					font-smooth: always;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;

					::-webkit-scrollbar {
						width: 0.3rem;
						height: 0.3rem;
					}

					::-webkit-scrollbar-thumb {
						background: #444;

						border-radius: 1rem;
					}

					::-webkit-scrollbar-thumb:hover {
						background: #555;
					}
				}

				img,
				picture,
				video,
				iframe,
				figure {
					width: 100%;
					display: block;
				}

				a {
					display: block;
					text-decoration: none;
					color: inherit;
					font-size: inherit;
				}

				li {
					list-style-type: none;
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
					background-color: transparent;
					color: inherit;
					display: block;
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
				}
			`}
		/>
	);
};
