import styled from '@emotion/styled';
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
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 0.3rem;
		height: 0.3rem;
	}

	::-webkit-scrollbar-thumb {
		background: #444;

		border-radius: 1rem;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

	scrollbar-width: thin;
`;

export const ChamAbilityInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 0.5rem;
	/* width: 24rem; */
	padding: 3rem 0 0;
	height: 14rem;
	overflow: hidden;
	@media (max-width: 64rem) {
		width: 80%;
	}
	@media (max-width: 30rem) {
		width: 90%;
	}
`;

export const ChamAbilityLineCircle = styled.span`
	transition: all 0.5s ease-out;
	width: 0.5625rem;
	height: 0.5625rem;
	position: absolute;
	background-color: ${({ variant }) => (variant ? 'rgb(208, 168, 92)' : 'gray')};
	border-radius: 50%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const ChamAbilityUpLine = styled.span`
	width: 1px;
	height: 20px;
	position: absolute;
	left: calc(50% - 0.5008px);
	visibility: hidden;
	top: -1.375rem;
	background-color: rgb(208, 168, 92);
`;

export const ChamAbilityLine = styled.span`
	transition: all 0.5s ease-out;

	width: 100%;
	height: 1px;
	background-color: gray;
	position: absolute;
	bottom: 0;
`;
export const ChamAbilityCircle = styled.span`
	transition: all 0.5s ease-out;
	width: 1.25rem;
	height: 1.25rem;
	border: 0.125rem solid rgb(208, 168, 92);
	position: absolute;
	bottom: -0.5938rem;
	border-radius: 50%;
	margin: -0.625rem 0px 0px -0.625rem;

	left: calc(10% + 20% * ${({ focus }) => focus});
`;

export const ChamAbilityImage = styled.img`
	transition: transform 0.5s ease-out;
	width: 4rem;
	height: 4rem;

	@media (max-width: 1024px) {
		margin-bottom: 40px;
	}

	@media (max-width: 30rem) {
		width: 3rem;
		height: 3rem;
	}
`;

export const ChamAbilityButton = styled.button`
	transition: transform 0.5s ease-out;
	width: 25%;
	height: 160%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	${({ variant }) =>
		variant
			? `${ChamAbilityImage} {
           transform: translateY(-1.5rem);
      transition: transform 0.4s ease;
  
      }`
			: `&:hover {
    ${ChamAbilityImage} {
      transition: transform 0.1s ease;
      transform: translateY(-0.3rem);
    }
  }
  `}
	&:hover,
  :focus {
		cursor: pointer;
		/* ${ChamAbilityLineCircle} {
			background-color: rgb(208, 168, 92);
		} */
	}
`;

export const ChamAbilitiesImageContainer = styled.div`
	display: flex;
	align-items: flex-end;
	position: relative;
	padding-top: 1.5rem;

	/* gap: 1rem; */
	width: 100%;
	@media (max-width: 64rem) {
		width: 80%;
		margin-top: -2rem;
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
		margin-top: 3rem;
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
	font-style: italic;
`;

export const ChamAbilityVideo = styled.video`
	border: 1px solid #31271e;

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
		order: -1;
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
	margin-top: 5rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 100%;
	padding: 3rem 3rem;
	gap: 3rem;

	background-color: #111318;
	border: 1px solid #31271e;
	background-image: url(../../../src/assets/${({ tag }) => tag}.svg);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	color: #0000004c;
	@media (max-width: 64rem) {
		grid-template-columns: 1fr;
		align-items: center;
		padding: 5rem 0 1rem;
		gap: 0;
	}
`;
