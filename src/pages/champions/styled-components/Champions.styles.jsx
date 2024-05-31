import styled from '@emotion/styled';
import { fadeIn } from '../../../styled-components/General.styles';

export const Container = styled.section`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	animation: ${fadeIn} 0.3s ease-in-out forwards;
	@media (max-width: 48rem) {
		width: 95%;
	}
`;

export const ChampionsContainer = styled.div`
	width: 100%;
	display: grid;
	gap: 2rem 1rem;
	justify-content: center;
	grid-auto-rows: 26.4375rem;
	grid-template-columns: repeat(auto-fit, 14.5625rem);
	@media (max-width: 80rem) {
		grid-auto-rows: 20.1875rem;
		grid-template-columns: repeat(auto-fit, 13.9375rem);
	}
	@media (max-width: 48rem) {
		grid-auto-rows: 17.5rem;
		grid-template-columns: repeat(auto-fit, 11.25rem);
	}
`;
export const ChampionsMainContainer = styled.div`
	padding-top: 3rem;
	padding-bottom: 15rem;
	width: 100%;
	min-height: 100vh;
`;
export const ChampionsContainerBackground = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	-webkit-filter: brightness(0.4);
	filter: brightness(0.4);
	background-image: url('https://universe.leagueoflegends.com/images/championsBackground.jpg');
	background-position: top;
	background-position-x: center;
	background-position-y: top;
	background-repeat: no-repeat;
	background-size: contain;
	opacity: 0.2;
	z-index: -1;
`;
