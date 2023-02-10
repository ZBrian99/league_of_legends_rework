import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { formToJSON } from 'axios';
/* #c4b998` : `#937341 */

export const ChamAbility = styled.h6`
	font-size: 0.9em;
	color: lightgray;
	font-weight: bold;
	opacity: 0.7;
`;
export const ChamAbilityName = styled.h5`
	font-size: 1.5em;
	font-weight: 600;
	color: #937341;
`;
export const ChamAbilityDescription = styled.p`
	font-size: 0.8em;
	color: #c4b998;
`;

export const ChamAbilityInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	/* width: 24rem; */
	margin-top: 3rem;
	height: 12rem;
	@media (max-width: 64rem) {
		width: 80%;
	}
	@media (max-width: 30rem) {
		width: 90%;
	}
	/* padding: 2rem 2rem 0; */
`;

export const ChamAbilityImage = styled.img`
	width: 4rem;
	height: 4rem;
	@media (max-width: 30rem) {
		width: 3rem;
		height: 3rem;
	}
`;

export const ChamAbilityButton = styled.button`
	/* padding-right: 1rem; */
	/* padding: .5rem; */
	transition: transform 0.4s ease-in-out;

	&:hover {
		transition: transform 0.1s ease-in-out;
		transform: translateY(-0.3rem);
		cursor: pointer;
	}

	&:focus {
		transition: transform 0.4s ease-in-out;
		transform: translateY(-1.5rem);
	}
`;

export const ChamAbilitiesImageContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 1rem;
	width: 100%;
	@media (max-width: 64rem) {
		width: 80%;
	}
	@media (max-width: 30rem) {
		width: 90%;
	}
`;
export const ChamAbilitiesContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 50%;
	gap: 4rem;
	width: 100%;

	@media (max-width: 64rem) {
		width: 100%;
		align-items: center;
	}
`;

export const ChamAbilityHeader = styled.h2`
	color: #937341;
	letter-spacing: 0.1rem;
	font-weight: 700;
	font-size: 4rem;
	line-height: 4.5rem;
	/* font-style: italic; */
`;

export const ChamAbilityVideo = styled.video`
	max-height: 32rem;
	width: 100%;
	@media (max-width: 64rem) {
		object-fit: cover;
	}
`;

export const ChamAbilityVideoContainer = styled.div`
	/* width: 100%; */
	/* width: 50%; */
	display: flex;
	margin: auto;
	@media (max-width: 64rem) {
		width: 80%;
		/* padding-bottom: 3rem; */
	}
	@media (max-width: 30rem) {
		width: 90%;
		/* padding-bottom: 3rem; */
	}
`;
export const ChamAbilityInfoContainer = styled.div`
	/* width: 100%; */
	/* width: 50%; */
	/* padding: 3rem 3rem; */
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 64rem) {
		width: 100%;
		/* min-height: 32rem; */
	}
`;

export const ChampionAbilityContainer = styled.div`
	/* display: flex; */
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 100%;
	padding: 3rem 3rem;
	gap: 3rem;

	background-color: #111318;
	border: 1px solid #31271e;
	background-image: url('../../../src/assets/rol (1).svg');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	color: #0000004c;
	@media (max-width: 64rem) {
		/* flex-direction: column; */
		grid-template-columns: 1fr;
		align-items: center;
		padding: 3rem 0;
		gap: 0;
	}
`;
