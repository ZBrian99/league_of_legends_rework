import styled from '@emotion/styled';

export const ChamName = styled.h2`
	text-transform: uppercase;
	font-weight: 500;
	font-size: 7rem;
	line-height: 9rem;
	letter-spacing: 0.2em;
	background: linear-gradient(to top, #67471f 0%, #937341 50%);
	background-clip: text;
	-webkit-text-fill-color: transparent;
`;
export const ChamTitle = styled.p`
	text-transform: uppercase;
	font-weight: 700;
	font-size: 1rem;
	color: #c4b998;
	letter-spacing: 0.25rem;
	padding: 1rem 0 1rem 0.25rem;
`;
export const ChamSeparator = styled.img`
	width: 100%;
`;

export const ChamSplash = styled.img`
	width: 100%;
	height: auto;
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
	color: rgb(10, 10, 12);
	background: linear-gradient(0deg, rgba(10, 10, 12, 1) 20%, rgba(10, 10, 12, 0.3) 100%);
`;

export const ChampionContainer = styled.div`
	margin: 0 1rem;
	min-height: 1500vh;
	color: white;
`;
export const ChamIconFrame = styled.img`
	width: 7rem;
	top: -3.5rem;
	position: absolute;
`;

export const ChamIconImage = styled.img`
	transform: scale(1.1);
`;
export const ChamIconContainer = styled.div`
	position: absolute;
	top: -3rem;
	width: 6rem;
	border-radius: 50%;
	overflow: hidden;
`;

export const LoreText = styled.p`
	text-align: justify;
	text-align-last: center;
	letter-spacing: 0;
	font-size: 0.8em;
`;

export const LoreContainer = styled.div`
	display: flex;
	max-height: 20rem;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	border: 0.0625rem solid #31271e;
	color: #c4b998;
	padding: 5rem 3rem;
	&::before {
		content: ' ';
		z-index: -1;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg');
		-webkit-filter: brightness(0.3) grayscale(100%);
		filter: brightness(0.3) grayscale(100%);
		opacity: 0.3;
		background-position: top center;
		background-size: cover;
	}
`;

export const SimpleBoxImage = styled.img`
	width: 5rem;
`;
export const LargeBoxImage = styled.img`
	width: 10rem;
	margin: 6rem 0;
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

	padding: 0.5rem;
`;

export const SimpleBoxTextContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	flex-flow: column nowrap;
`;
export const SimpleBoxContainer = styled.div`
	width: 20rem;
	display: flex;
	${({ reverse }) => (reverse ? 'flex-direction: row-reverse;' : 'flex-direction: row;')}
	height: 5rem;
	border: 1px solid #31271e;
	background-color: #111318;
`;
export const LargeBoxContainer = styled.div`
	width: 20rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-left: 1px solid #31271e;
	border-top: 1px solid #31271e;
	border-right: 1px solid #31271e;
	background-color: #111318;
	background-image: url('../../src/assets/regionbg.png');
	background-position: center;
	background-size: cover;
`;

export const ChamInfoContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	display: grid;
	gap: 1rem;
	grid-auto-flow: dense;
	grid-template-columns: 20rem 1fr 20rem;
`;
