import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Svg = styled.svg`
	width: ${({ width }) => `${width}px`};
	margin: 0 1.5rem 0 0;
	margin: ${({ margin }) => `${margin}`};
	fill: #fff;
	&:hover {
		cursor: pointer;
	}
	&:hover {
		fill: #ff0000;
	}
`;

export const NavMobileButton = styled.button`
	display: none;
	@media (max-width: 64rem) {
		display: block;
	}
`;

export const NavText = styled.span`
	padding: 0.5rem 1rem;
	transition: background-color 0.2s ease;
	border-radius: 0.5rem;
	color: white;
	@media (max-width: 64rem) {
		width: 100%;
		margin: 0 1rem;
		padding: 1rem 1rem;
	}
`;

export const NavLink = styled(Link)`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	&::after {
		content: ' ';
		transition: transform 0.2s ease;
		width: 100%;
		bottom: 0.3rem;
		left: 0;
		transform: scaleX(0);
	}
	&:hover {
		cursor: pointer;
		${NavText} {
			background-color: #333333;
		}
		&::after {
			content: '';
			position: absolute;
			bottom: -0.8rem;
			transform: scaleX(100%);
			height: 0.3rem;
			border-radius: 0.5rem;
			background-color: #0bc4e2;
		}
	}

	@media (max-width: 64rem) {
		height: auto;
		&::after,
		::before,
		:hover::after,
		:hover::before {
			content: none;
		}
	}
`;

export const NavButton = styled.button`
	white-space: nowrap;
	text-transform: uppercase;
	padding: 0.5rem 1rem;
	letter-spacing: 1px;
	margin: 0 0.5rem;
	transition: background-color 0.2s ease;
	border-radius: 0.5rem;
	${({ variant }) =>
		variant
			? `
    background: rgb(44, 140, 194);
    color: black;
	  border-radius: 1rem;
    `
			: `
    background: #333;
    color: white;
    `};
	font-weight: 500;

	&:hover {
		cursor: pointer;
		background: ${({ variant }) => (variant ? 'rgb(11, 196, 226) ' : '#444')};
	}
	@media (max-width: 64rem) {
		width: 100%;
		padding: 1rem 2rem;
	}
`;

export const MobileMenuContent = styled.div`
	display: flex;
	margin-left: 1rem;
	width: 100%;
	justify-content: space-between;
	@media (max-width: 64rem) {
		visibility: ${({ visible }) => (visible ? 'vissible' : 'hidden')};
		transform: translateX(${({ visible }) => (visible ? '0%' : '100%')});
		transition: transform 0.3s ease-in-out;

		flex-direction: column;
		width: 30rem;
		height: 100vh;
		position: fixed;
		top: 0;
		right: 0;
		padding: 0;
		background-color: rgba(31, 31, 31);
		z-index: 100;
	}
	@media (max-width: 30rem) {
		width: 100%;
	}
`;
export const MobileTopContent = styled.div`
	padding: 0 2rem;
	display: none;
	justify-content: space-between;
	min-height: 4.5rem;
	@media (max-width: 64rem) {
		display: flex;
	}
`;
export const NavLeftContent = styled.div`
	display: flex;
	align-items: center;
`;
export const NavCenterContent = styled.div`
	display: flex;
	@media (max-width: 64rem) {
		overflow-y: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		::-webkit-scrollbar {
			display: none;
		}
		flex-direction: column;
		height: 100%;
	}
`;
export const NavRightContent = styled.div`
	display: flex;
	align-items: center;
	@media (max-width: 64rem) {
		flex-direction: column;
		gap: 1rem;
		margin: 1rem;
	}
`;

export const Nav = styled.nav`
	padding: 0 2rem;
	width: 100%;
	height: 4.5rem;
	background-color: #111;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.9em;
	font-weight: 500;
	letter-spacing: 0.125rem;
	text-transform: uppercase;
	position: relative;
	border-bottom: .125rem solid rgba(51, 51, 51, 0.25);
`;
