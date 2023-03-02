import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FooterLogo = styled.svg`
	fill: #fff;
	width: 7rem;
	opacity: 0.3;
	/* &:hover {
		opacity: 1;
		cursor: pointer;
	} */
	margin: 1.5rem;
`;

export const FooterESRBText = styled.li`
	text-align: left;
	color: #efefef;
	font-size: 0.8em;
	font-weight: 500;
	line-height: 1.5em;
`;

export const FooterESRBImage = styled.img`
	width: 4rem;
	height: 100%;
	object-fit: contain;
	object-position: center;
`;

export const FooterESRB = styled.div`
	display: flex;
	background: #292929;
	padding: 1rem;
	border-radius: 0.5rem;
	gap: 1rem;
`;

export const FooterLink = styled(Link)`
	padding: 1rem 2rem;
	text-decoration: none;
	font-size: 0.9em;
	color: #f9f9f9;
	transition: all 0.3s ease;
	border-radius: 0.5rem;
	&:hover {
		background: rgba(128, 128, 128, 0.3);
	}
	@media (max-width: 64rem) {
		width: 100%;
		text-align: center;
	}
`;

export const FooterLinksContainer = styled.div`
	display: flex;
	gap: 1rem;
	${({ variant }) => (variant ? 'background: #292929;' : '')}
	width: 100%;
	justify-content: center;
	align-items: center;
	user-select: none;
	padding: 1rem;
	color: #7e7e7e;
	font-size: 0.9em;
	letter-spacing: 0.08em;
	text-transform: uppercase;

	@media (max-width: 64rem) {
		flex-direction: column;
	}
`;

export const FooterText = styled.p`
	max-width: 40rem;
	font-weight: 500;
	font-size: 0.75rem;
	/* margin-top: 5rem; */
	text-align: center;
	color: #7e7e7e;
`;

export const FooterContainer = styled.footer`
	margin-top: 5rem;
	width: 100%;
	background-color: red;
	background-color: #111;
	color: #efefef;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 3rem;
	border-top: .125rem solid #343434;
`;
