import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { formToJSON } from 'axios';
/* #c4b998` : `#937341 */

export const ChamAbility = styled.h6`
	font-size: .9em;
	color: lightgray;
  font-weight: bold;
  opacity: .7;
  `;
export const ChamAbilityName = styled.h5`
  font-size: 1.5em;
  font-weight: 600;
	color: #937341;
  `;
export const ChamAbilityDescription = styled.p`
	font-size: 0.8em;
	color: #c4b998;
  text-align: center;
  `;

export const ChamAbilityInfo= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: .5rem;
  width: 100%;
  height: 50%;
  padding: 2rem 2rem 0;

`

export const ChamAbilityImage = styled.img`
	width: 4rem;
	height: 4rem;
`;

export const ChamAbilityButton = styled.button`
	/* padding-right: 1rem; */
	padding: .5rem;
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
  justify-content: center;
  align-items: flex-end;
	width: 100%;

`;
export const ChamAbilitiesContainer = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
	width: 100%;
  height: 50%;
  gap: 4rem;

`;

export const ChamAbilityHeader = styled.h2`
top: 0;
	color: #937341;
	letter-spacing: 0.1rem;
	font-weight: 700;
	font-size: 4rem;
	line-height: 4.5rem;
	/* font-style: italic; */
`;

export const ChamBilityVide = styled.video`
	width: 80%;
`;
export const ChamAbilityVideoContainer = styled.div`
	width: 50%;
  display: flex;
	/* background-color: green; */
	@media (max-width: 64rem) {
    justify-content: center;
		width: 100%;
    padding-bottom: 3rem;
	}
`;
export const ChamAbilityInfoContainer = styled.div`
	width: 50%;
	padding: 3rem 3rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
	@media (max-width: 64rem) {
		width: 100%;
    min-height: 32rem;
	}
`;

export const ChampionAbilityContainer = styled.div`
	display: flex;
	width: 100%;
	min-height: 100vh;
	background-color: #111318;
	border: 1px solid #31271e;
	background-image: url('../../../src/assets/rol (1).svg');
	background-repeat: no-repeat;
	background-size: 100vh;
	background-position: center;
	color: #0000004c;
	@media (max-width: 64rem) {
		flex-direction: column;
	}
`;
