import styled from '@emotion/styled';

export const ChamSkinSidePanelTitle = styled.p`
	font-size: 2em;
	line-height: 1em;
	margin-left: 2rem;
	color: #937341;
	letter-spacing: 0.1rem;
	font-weight: 700;
	/* font-style: italic; */
	padding: 3rem 0;
	text-align: center;
	position: absolute;

	@media (max-width: 85rem) {
		position: static;
		margin: 0;
	}
`;

export const ChamSkinSidePanelText = styled.p`
	@media (max-width: 85rem) {
		padding: 0 0.5rem;
	}
`;

export const ChamSkinSidePanelImage = styled.img`
	width: 4rem;
	height: 4rem;
	object-fit: cover;
	object-position: center;
	transition: all 0.3s ease;
	@media (max-width: 85rem) {
		width: 7rem;
		height: 7rem;
		margin: 0 1.5rem;
	}
	@media (max-width: 45rem) {
		width: 5rem;
		height: 5rem;
	}
`;

export const ChamSkinSidePanelContainer = styled.button`
	display: flex;
	align-items: center;
	gap: 1rem;
	transition: all 0.5s ease-in-out;
	margin-left: 3rem;
	padding-top: 1rem;
	padding-bottom: 1rem;

	&:hover {
		cursor: pointer;
	}

	${({ active }) =>
		active
			? `
    ${ChamSkinSidePanelImage} {
		transform: scale(1.4);
	}
	@media (max-width: 85rem) {
		${ChamSkinSidePanelImage} {
			transform: translateY(-1.5rem);
		}
	}`
			: `
    	&:hover {
		@media (min-width: 85rem) {
			${ChamSkinSidePanelImage} {
				transform: scale(1.1);
			}
		}
	}
    `}

	@media (max-width: 85rem) {
		flex-direction: column;
		text-align: center;
		margin: 0 1.5rem;
		margin: 0;
	}
`;

export const ChamSkinSidePanelSelector = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow-y: scroll;
	padding-top: 6rem;
	padding-bottom: calc(100% - 8.4rem);
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

	@media (max-width: 85rem) {
		overflow-y: hidden;
		overflow-x: scroll;
		flex-direction: row;
		padding-bottom: 0;
		padding-top: 3rem;
		padding-left: calc(50% - 5rem);
		padding-right: calc(50% - 5rem);
	}
	@media (max-width: 45rem) {
		padding-left: calc(50% - 4rem);
		padding-right: calc(50% - 4rem);
	}
`;

export const ChamSkinSidePanel = styled.div`
	width: 30%;
	min-width: 22rem;
	padding: 7rem 0 1.5rem;
	padding-right: 1rem;
	position: absolute;
	height: 100%;

	border-right: 1px solid #31271e;
	@media (max-width: 85rem) {
		border-right: unset;
		width: 100%;
		position: static;
		order: 1;
		padding: 3rem 1.5rem;
	}
`;

export const ChamSkinImage = styled.img`
	width: 70%;
	margin-left: auto;
	@media (max-width: 85rem) {
		width: 100%;

		border-top: 1px solid #31271e;
		border-bottom: 1px solid #31271e;
	}
`;

export const ChamSkinsContainer = styled.section`
	/* width: 95%; */
	width: 100%;
	margin-top: 5rem;

	display: flex;
	flex-direction: column;
	background-color: #111318;
	border: 1px solid #31271e;
	position: relative;
`;
