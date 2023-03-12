import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ChampionsFilterSortText = styled.p`
	margin-left: 0.5rem;
	color: rgb(147, 115, 65);
	text-transform: uppercase;
	font-weight: 600;
	font-size: 0.8em;

	letter-spacing: .25rem;
`;
export const ChampionsFilterSortImage = styled.img`
	width: 1.25rem;
	height: 1.25rem;
	transition: transform 0.2s ease;
`;
export const ChampionsFilterSortContainer = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	/* max-width: 10rem; */
	margin: 0 auto;
	height: 100%;
	${({ variant }) =>
		variant
			? css`
					&:hover {
						${ChampionsFilterSortImage} {
							transform: scaleY(-1) translateX(-0.3rem);
						}
					}
					${ChampionsFilterSortImage} {
						transform: scaleY(-1);
					}
			  `
			: css`
					&:hover {
						${ChampionsFilterSortImage} {
							transform: translateX(-0.3rem);
						}
					}
			  `}
	&:hover {
		cursor: pointer;
	}
`;

export const ChampionsFilterRolButton = styled.button`
	width: 100%;
	height: 100%;
	padding: 0.5rem;
	font-size: 0.8em;
	font-weight: 600;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	color: rgb(196, 185, 152);

	opacity: 0.7;
	transition: all 0.2s ease;
	&::after {
		content: ' ';
		transition: transform 0.2s ease;
		width: 100%;
		bottom: 1.5rem;
		left: 0;
		transform: scaleX(0);
	}
	&:hover {
		cursor: pointer;
		opacity: 1;
	}
	${({ variant }) =>
		variant
			? css`
					opacity: 1;
					@media (min-width: 64rem) {
						&::after {
							content: '';
							position: absolute;
							transform: scaleX(100%);
							height: 0.1rem;
							border-radius: 0.5rem;
							background-color: rgb(147, 115, 65);
						}
					}
			  `
			: css`
					@media (min-width: 64rem) {
						&:hover {
							&::after {
								content: '';
								position: absolute;
								transform: scaleX(50%);
								height: 0.1rem;
								border-radius: 0.5rem;
								background-color: rgb(147, 115, 65);
							}
						}
					}
			  `}
	@media (max-width: 64rem) {
		padding: 1rem;
		padding-left: 2rem;
		&:hover {
			background-color: rgb(0 0 0 /0.4);
		}
	}
	@media (max-width: 35rem) {
		padding-left: 1rem;
	}
`;
export const ChampionsFilterRol = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ChampionsFilterRolesText = styled.span`
	color: rgb(147, 115, 65);
	text-transform: uppercase;
	font-weight: 600;
	font-size: 0.8em;
	letter-spacing: .25rem;
	margin-left: 0.5rem;
	color: rgb(147, 115, 65);
`;
export const ChampionsFilterRolesIcon = styled.img`
	width: 1.8rem;
	height: 1.8rem;
	transition: transform 0.2s ease;
`;

export const ChampionsFilterRolesMobileContainer = styled.button`
	display: none;
	margin: auto;
	width: 100%;
	height: 100%;
	&:hover {
		cursor: pointer;
	}
	@media (max-width: 64rem) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const ChampionsFilterRoles = styled.ul`
	display: flex;
	width: 100%;
	@media (max-width: 64rem) {
		position: absolute;
		display: none;

		${({ isVisible }) =>
			isVisible &&
			css`
				display: flex;
				flex-direction: column;
				top: 100%;
				width: 100%;
				z-index: 1;
				background-color: #121212;
				box-shadow: 0 1rem 1rem -1rem rgb(0 0 0 / 0.7);
			`};
	}
`;

export const ChampionsFilterRolesContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	position: relative;
	padding: 0 5vw;
	@media (max-width: 80rem) {
		padding: 0 2vw;
	}
	@media (max-width: 64rem) {
		padding: 0;
	}
	&:hover {
		${ChampionsFilterRolesIcon} {
			transform: translateX(-0.3rem);
		}
	}

	&::after {
		content: '';
		width: 1px;
		opacity: 0.3;
		height: 60%;
		align-self: center;
		position: absolute;
		left: 0;
		background-color: rgb(147, 115, 65);
	}
	@media (min-width: 35.0625rem) {
		&::before {
			content: '';
			width: 1px;
			opacity: 0.3;
			height: 60%;
			align-self: center;
			position: absolute;
			right: 0;
			background-color: rgb(147, 115, 65);
		}
	}
`;

export const ChampionsFilterInputIcon = styled.img`
	width: 1.125rem;
	height: 2rem;
	margin-right: 1rem;
`;

export const ChampionsFilterInput = styled.input`
	outline: none;
	letter-spacing: 0.25rem;
	text-transform: uppercase;
	text-overflow: ellipsis;
	width: 100%;
	height: 100%;
	color: rgb(147, 115, 65);
	&:not(:placeholder-shown) {
		color: rgb(196, 185, 152);
	}
	::placeholder {
		color: rgb(147, 115, 65);
		opacity: 0.3;
	}
`;

export const ChampionsFilterInputContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	padding-left: 2rem;
	margin-right: 3rem;
`;

export const ChampionsFilterContainer = styled.div`
	width: 100%;
	height: 5.5rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: center;
	align-items: center;
	background-color: #121212;
	box-shadow: 0 1rem 1rem -1rem rgb(0 0 0 / 70%);
	@media (max-width: 80rem) {
		${ChampionsFilterInputContainer},${ChampionsFilterRolesContainer} {
			font-size: 0.9em;
		}
	}
	@media (max-width: 70rem) {
		${ChampionsFilterInputContainer},${ChampionsFilterRolesContainer} {
			font-size: 0.8em;
		}
	}

	@media (max-width: 64rem) {
		grid-template-columns: 1fr minmax(8rem, 20%) minmax(5rem, 15%);
		${ChampionsFilterInputContainer},${ChampionsFilterRolesContainer} {
			font-size: 1em;
		}
	}

	@media (max-width: 45rem) {
		font-size: 0.9em;
		${ChampionsFilterInputContainer} {
			padding-left: 1rem;
		}
	}
	@media (max-width: 35rem) {
		grid-template-columns: 1fr minmax(6.5rem, 20%);
		font-size: 0.7em;
		${ChampionsFilterSortContainer} {
			display: none;
		}
	}
`;
