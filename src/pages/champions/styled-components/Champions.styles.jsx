import styled from '@emotion/styled';
import { fadeIn } from '../../../styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto 2rem;
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
	grid-auto-flow: dense;
	gap: 2rem 1rem;
	margin-bottom: 2rem;
	justify-content: center;
	grid-auto-rows: 423px;
	grid-template-columns: repeat(auto-fill, 233px);
	@media (max-width: 1280px) {
		grid-auto-rows: 323px;
		grid-template-columns: repeat(auto-fill, 223px);
	}
	@media (max-width: 48rem) {
		grid-auto-rows: 280px;
		grid-template-columns: repeat(auto-fill, 180px);
	}
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
