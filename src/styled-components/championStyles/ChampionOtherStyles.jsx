import styled from '@emotion/styled';

export const OtherCampionsIcon = styled.span`
	margin: 0 5rem;
	text-transform: uppercase;
	font-size: 0.9em;
	letter-spacing: 5px;
	color: #c4b998;
	position: relative;
	display: flex;
	text-align: center;
	justify-content: center;
	&::after {
		content: ' ';
		position: absolute;
		top: -3rem;
		background-image: url(${({ icon }) => icon});
		background-repeat: no-repeat;
		background-size: cover;
		width: 2rem;
		height: 2rem;
	}
`;

export const OtherChampionDescription = styled.div`
	background-color: rgba(12 12 15 / 0.9);
	border-top: 1px solid #927345;
	bottom: 0;
	left: 0;
	color: rgba(147, 115, 65, 0.8);
	text-transform: capitalize;
	font-size: 0.8em;
	font-style: italic;
	height: 55px;
	line-height: 55px;
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
	height: 77px;
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
	background-color: #b8b8b8;
	background-image: url(${({ image }) => image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top center;

	position: relative;
	transition: transform 0.3s ease-out;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		transform: scale(1.05);
		border: 1px solid #927345;
	}
	&:hover ${OtherChampionName} {
		transform: translateY(-55px);
	}
	&:hover ${OtherChampionDescription} {
		transform: translateY(0);
	}
	height: 20rem;
	@media (max-width: 40rem) {
		height: 15rem;
	}
`;

export const OtherChampionContainer = styled.div`
	width: 100%;
	display: grid;
	grid-auto-flow: dense;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	@media (max-width: 40rem) {
		grid-template-columns: 1fr;
	}
	/* margin-top: 5rem; */
	/* justify-content: center; */
	/* align-items: center; */
	/* background-color: #111318; */

	/* grid-template-columns: repeat(auto-fill, 233px);
	@media (max-width: 1280px) {
		grid-auto-rows: 323px;
		grid-template-columns: repeat(auto-fill, 223px);
	}
	@media (max-width: 48rem) {
		grid-auto-rows: 280px;
		grid-template-columns: repeat(auto-fill, 180px);
	} */
`;

//------------------------------------------

// export const ChampionCardTitle = styled.div`
// 	text-transform: uppercase;
// 	font-size: 0.85em;
// 	font-weight: 500;
// 	background-color: rgba(12 12 15 / 0.9);
// 	border-top: 1px solid #927345;
// 	bottom: 0;
// 	color: #937341;
// 	height: 77px;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;

// 	/* line-height: 77px; */
// 	position: absolute;
// 	width: 100%;
// 	transition: all 0.3s ease-out;
// `;

// export const ChampionCardDescription = styled.p`
// 	background-color: rgba(12 12 15 / 0.9);
// 	border-top: 1px solid #927345;
// 	bottom: 0;
// 	left: 0;
// 	color: rgba(147, 115, 65, 0.8);
// 	text-transform: capitalize;
// 	font-size: 0.8em;
// 	font-style: italic;
// 	height: 55px;
// 	line-height: 55px;
// 	position: absolute;
// 	text-align: center;
// 	width: 100%;
// 	transform: translateY(100%);
// 	transition: all 0.3s ease-out;
// `;

// export const ChampionCard = styled.figure`
// 	background-color: #b8b8b8;
// 	background-image: url(${({ image }) => image});
// 	background-repeat: no-repeat;
// 	background-size: 110% auto;
// 	background-position: center 30%;
// 	@media (max-width: 80rem) {
// 		background-position: center 15%;
// 	}
// 	margin: 2rem auto;
// 	width: 100%;
// 	height: 100%;
// 	position: relative;
// 	transition: transform 0.3s ease-out;
// 	overflow: hidden;
// 	&:hover {
// 		cursor: pointer;
// 		transform: scale(1.1);
// 		border: 1px solid #927345;
// 	}
// 	&:hover ${ChampionCardTitle} {
// 		transform: translateY(-55px);
// 	}
// 	&:hover ${ChampionCardDescription} {
// 		transform: translateY(0);
// 	}
// `;
