import styled from '@emotion/styled';

export const ChamSkinSidePanelTitle = styled.p`
	font-size: 2.25em;
	line-height: 1.25em;
	margin-left: 2rem;
	margin-bottom: 2rem;
	color: #937341;
	letter-spacing: 0.1rem;
	font-weight: 700;
	font-style: italic;
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
	transition: all 0.4s ease;
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
	transition: all 0.4s ease;
	margin-left: 3rem;
	padding-bottom: 2rem;
	&:hover {
		cursor: pointer;
		@media (min-width: 85rem) {
			margin-left: 2rem;
			${ChamSkinSidePanelImage} {
				width: 6rem;
				height: 6rem;
			}
		}
	}
	@media (max-width: 85rem) {
		flex-direction: column;
		text-align: center;
		margin: 0 1.5rem;
		margin: 0;

		&:focus {
			${ChamSkinSidePanelImage} {
				transform: translateY(-1.5rem);
			}
		}
	}
`;

export const ChamSkinSidePanelSelector = styled.div`
	display: flex;
	overflow-y: scroll;
	flex-direction: column;
	height: 100%;

	@media (max-width: 85rem) {
		flex-direction: row;
		padding-top: 3rem;
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
	/* object-fit: cover;
  object-position: center; */
`;

export const ChamSkinsContainer = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: #111318;
	border: 1px solid #31271e;
	position: relative;
`;
