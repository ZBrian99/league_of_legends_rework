import styled from "@emotion/styled";

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
	background: linear-gradient(0deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.3) 100%);
`;

export const ChampionContainer = styled.div`
	min-height: 1500vh;
	background-color: gray;
	color: white;
`;
