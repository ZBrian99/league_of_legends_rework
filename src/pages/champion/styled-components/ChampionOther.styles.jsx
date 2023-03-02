import styled from '@emotion/styled';

export const OtherChampionDescription = styled.div`
	background-color: rgba(12 12 15 / 0.9);
	border-top: 1px solid #927345;
	bottom: 0;
	left: 0;
	color: rgba(147, 115, 65, 0.8);
	text-transform: capitalize;
	font-size: 0.8em;
	font-style: italic;
	height: 3.4375rem;
	line-height: 3.4375rem;
	position: absolute;
	text-align: center;
	width: 100%;
	transform: translateY(100%);
	transition: all 0.3s ease-out;
`;
export const OtherChampionName = styled.p`
	text-transform: uppercase;
	font-size: 0.85em;
	font-weight: 500;
	background-color: rgba(12 12 15 / 0.9);
	border-top: 1px solid #927345;
	bottom: 0;
	color: #937341;
	height: 4.8125rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: absolute;
	width: 100%;
	transition: all 0.3s ease-out;
`;

export const OtherChampionTitle = styled.h3`
	grid-column: 1 / 4;
	height: 4.375rem;
	line-height: 4.375rem;
	text-align: center;
	background-color: #111318;
`;

export const OtherChampionBox = styled.figure`
	/* background-color: #b8b8b8; */
	background-image: url(${({ image }) => image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top center;
	height: 20rem;
	border: 1px solid #0a0a0c;

	position: relative;
	transition: transform 0.3s ease-out;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		/* transform: scale(1.05); */
		border: 1px solid #927345;
	}
	&:hover ${OtherChampionName} {
		transform: translateY(-3.4375rem);
	}
	&:hover ${OtherChampionDescription} {
		transform: translateY(0);
	}
	@media (max-width: 64rem) {
		height: 15rem;
	}
`;

export const OtherChampionContainer = styled.div`
	width: 100%;
	display: grid;
	grid-auto-flow: dense;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	@media (max-width: 64rem) {
		grid-template-columns: 1fr;
	}
`;
