import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { fadeIn } from '../../../styled-components';

export const ChamName = styled.h2`
	text-transform: uppercase;
	font-weight: 500;
	font-size: clamp(2em, 9vw, 7em);
	text-align: center;
	letter-spacing: 0.2em;
	background: linear-gradient(to top, #67471f 0%, #b18c51 50%);

	background-clip: text;
	-webkit-text-fill-color: transparent;

	filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
`;
export const ChamTitle = styled.p`
	text-transform: uppercase;
	font-weight: 700;
	font-size: clamp(0.9em, 3vw, 2em);

	/* font-size: clamp(0.9em, 2vw, 1.5em); */

	color: #c4b998;
	letter-spacing: 0.25rem;
	padding: 1rem 0 1rem 0.25rem;
	filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
`;
export const ChamSeparator = styled.img`
	width: 100%;
`;
;
export const ChamSplashVideo = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
`;
export const ChamSplash = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
`;
export const ChamSplashContainer = styled.div`
	position: relative;
	width: 100%;
	padding-bottom: 56.25%;
	background: linear-gradient(0deg, rgba(10, 10, 12, 1) 20%, rgba(10, 10, 12, 0) 100%);
`;
export const ChamHeader = styled.div`
	position: relative;
`;

export const ChamHeaderContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	z-index: 1;

	${({ visible }) => !visible && 'visibility: hidden;'}
`;

export const ChampionContainer = styled.div`
	min-height: 100vh;
	color: white;
	opacity: 0;
	animation: ${fadeIn} 0.3s ease-in-out forwards;
`;

export const ChamIconFrame = styled.img`
	width: 7.5rem;
	position: absolute;
	z-index: -1;
`;

export const ChamIconBorder = styled.div`
	width: 5rem;
	overflow: hidden;
	border-radius: 50%;
`;

export const ChamIconImage = styled.img`
	border-radius: 50%;
	transform: scale(1.17);
`;
export const ChamIconContainer = styled.div`
	width: 5rem;
	${({ scale }) => (scale ? `transform: scale(${scale});` : '')}
	${({ visible }) => !visible && `display: none;`}

	position: relative;
	&::before {
		content: '';
		position: absolute;
		top: -0.2rem;
		right: -0.2rem;
		bottom: -0.2rem;
		left: -0.2rem;
		z-index: -1;
		background-image: linear-gradient(180deg, #3e3310, #c6b98b, #3e3310);
		border-radius: 50%;
	}
`;

export const ChamLogoContainer = styled.div`
	position: absolute;
	width: 7.5rem;
	height: 7.5rem;
	top: -3.75rem;
	border-radius: 50%;
	box-sizing: content-box;
	border: 1px solid #31271e;
	z-index: 1;
	padding: 0.2rem;
	background-color: #111318;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoreText = styled.p`
	text-align: justify;
	text-align-last: center;
	letter-spacing: 0;
	font-size: 0.9em;
	/* font-size: 0.8em; */
`;

export const ChamMidContainer = styled.div`
	width: 50%;
	gap: 1rem;
	display: flex;
	flex-direction: column;
	@media (max-width: 64rem) {
		width: 100%;
		gap: 1rem;
	}
`;

export const QuoteText = styled.p`
	font-weight: 700;
	font-size: 1.3em;
	line-height: 1.5;
	color: #c4b998;
	text-align: center;
	font-size: clamp(1em, 3vw, 1.3em);
`;

export const QuoteAutor = styled.h3`
	font-weight: 700;
	font-size: 1.3em;
	line-height: 1.5;
	color: #937341;
	text-align: center;
	font-size: clamp(1em, 3vw, 1.3em);
`;

export const ChamQuote = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	border: 0.0625rem solid #31271e;
	color: #c4b998;
	padding: 6rem 3rem 3rem;
	background-color: #111318;
	@media (max-width: 64rem) {
		width: 100%;
		padding: 5rem 2rem;
		order: -1;
	}
	@media (max-width: 45rem) {
		margin-top: 2rem;
	}
`;

export const ChamLargeLore = styled.div`
	display: flex;
	height: 100%;
	position: relative;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 0.0625rem solid #31271e;
	color: #c4b998;
	padding: 3rem 3rem;
	background-color: #111318;
	@media (max-width: 64rem) {
		/* margin-top: 2rem; */
		width: 100%;
		padding: 5rem 2rem;
		order: -1;
	}
	&::before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${({ image }) => image});
		filter: brightness(0.3) grayscale(100%);
		opacity: 0.3;
		background-position: top center;
		background-size: cover;
	}
`;

export const SimpleBoxImage = styled.img`
	width: 3rem;
	height: 3rem;
	object-fit: contain;
`;
export const LargeBoxImage = styled.img`
	width: 10rem;
	top: 50%;
	margin: auto 0;
	/* @media (max-width: 64rem) {
	} */
`;

export const SimpleBoxText = styled.p`
	font-size: 0.9em;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	text-align: center;
	color: ${({ variant }) => (variant ? `#c4b998` : `#937341`)};
`;

export const SimpleBoxImageContainer = styled.div`
	${({ none }) => (none ? 'display: none;' : 'display: flex;')}
	justify-content: center;
	align-items: center;
	${({ reverse }) => (reverse ? 'border-left: 1px solid #31271e;' : 'border-right: 1px solid #31271e;')}

	padding: .75rem;
`;

export const SimpleBoxTextContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	flex-flow: column nowrap;
`;
export const SimpleBoxContainer = styled.div`
	width: 100%;
	display: flex;
	${({ variant }) =>
		variant
			? `
  flex-direction: row-reverse;
	border-top: 1px solid #31271e;
	border-bottom: 1px solid #31271e;
  `
			: `
  flex-direction: row;
	border: 1px solid #31271e;
  @media (max-width: 64rem) {
	}
  `}
	min-height: 4.5rem;
	background-color: #111318;

	@media (max-width: 45rem) {
		width: 100%;
	}
`;

export const RaceBoxContainer = styled.div`
	width: 100%;
	min-height: 4.5rem;
	display: flex;
	flex-flow: column;
	justify-content: center;
	border: 1px solid #31271e;
	background-color: #111318;
`;

export const SimpleRolContainer = styled.div`
	display: flex;
	width: 100%;
	gap: 1rem;
	flex-wrap: wrap;
	@media (max-width: 64rem) {
		flex-wrap: nowrap;
	}

	@media (max-width: 45rem) {
		flex-wrap: wrap;
	}
`;

export const ChamRightContainer = styled.div`
	width: calc(25% - 1rem);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	@media (max-width: 64rem) {
		width: 100%;
		flex-direction: row;
		flex-wrap: wrap;
	}
	@media (max-width: 45rem) {
		flex-direction: column;
	}
`;

export const ChamLeftContainer = styled.div`
	width: calc(25% - 1rem);
	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media (max-width: 64rem) {
		width: calc(100vw - 2rem);
		order: 3;
	}
`;

export const LargeBoxContainer = styled.div`
	/* width: calc(25% - 1rem); */
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-left: 1px solid #31271e;
	border-top: 1px solid #31271e;
	border-right: 1px solid #31271e;
	background-color: #111318;
	background-image: url(${baseUrl}assets/regionbg.png);
	background-position: center;
	background-size: cover;
	@media (max-width: 64rem) {
		width: 100%;
	}
`;

export const ChamInfoContainer = styled.div`
	display: flex;
	height: 40rem;
	gap: 1rem;
	@media (max-width: 64rem) {
		flex-direction: column;
		height: auto;
	}
`;

export const ChamContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: auto;
	gap: 1rem;
	padding: 0 1rem;
	max-width: 100rem;
	@media (max-width: 64rem) {
		flex-direction: column;
		align-items: center;
	}
`;
