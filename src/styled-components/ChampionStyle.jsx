import styled from '@emotion/styled';

export const ChamName = styled.h2`
	text-transform: uppercase;
	font-weight: 500;
	font-size: 112px;
	line-height: 144px;
	letter-spacing: 0.2em;
	background: linear-gradient(to top, #67471f 0%, #937341 50%);
	background-clip: text;
	-webkit-text-fill-color: transparent;
`;
export const ChamTitle = styled.p`
	text-transform: uppercase;
	font-weight: 700;
	font-size: 16px;
	color: #c4b998;
	letter-spacing: 4px;
	padding: 16px 0 16px 4px;
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
	min-height: 1500vh;
	color: white;
`;
export const ChamIconFrame = styled.img`
	width: 112px;
	top: -56px;
	position: absolute;
`;

export const ChamIconImage = styled.img`
	transform: scale(1.1);
`;
export const ChamIconContainer = styled.div`
	position: absolute;
	top: -48px;
	width: 96px;
	border-radius: 50%;
	overflow: hidden;
`;

export const LoreContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	border: 0.0625rem solid #31271e;
	color: #c4b998;
	text-align: center;
	padding: 80px 48px;
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

export const RolImage = styled.img`
	height: 80%;
	width: auto;
`;

export const RolText = styled.p`
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	text-align: center;
	color: ${({ rol }) => (rol ? `#c4b998` : `#937341`)};
`;

export const RolImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-right: 1px solid #31271e;
  padding: .5rem;
`;

export const RolTextContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	flex-flow: column nowrap;
`;
export const RolContainer = styled.div`
	display: flex;
	width: 20rem;
	border: 1px solid #31271e;
`;
