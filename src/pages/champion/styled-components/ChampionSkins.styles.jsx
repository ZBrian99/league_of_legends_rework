import { css } from '@emotion/react';
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
	transition: all 0.3s ease;
	text-align: start;

	@media (max-width: 85rem) {
		padding: 0 0.5rem;
		text-align: center;
	}
`;
export const ChamSkinSidePanelImageContainer = styled.div`
	width: 4rem;
	height: 4rem;
	transition: all 0.2s ease;
	position: relative;
	&::before {
		content: '';
	}
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
export const ChamSkinSidePanelImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`;

export const ChamSkinSidePanelContainer = styled.button`
	display: flex;
	align-items: center;
	gap: 1rem;
	transition: all 0.5s ease-in-out;
	margin-left: 3rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	position: relative;

	&:hover {
		cursor: pointer;
		opacity: 1;
	}

	${({ active }) =>
		active
			? css`
					opacity: 1;
					@media (min-width: 85rem) {
						${ChamSkinSidePanelText} {
							margin-left: 0.8rem;
						}
					}
					${ChamSkinSidePanelImageContainer} {
						transform: scale(1.4);
						&::before {
							content: '';
							transition: all 0.4s ease;
							position: absolute;
							top: -0.3rem;
							left: -0.3rem;
							right: -0.3rem;
							bottom: -0.3rem;
							background-color: rgb(208, 168, 92);
							clip-path: polygon(
								0 0,
								0 100%,
								1% 100%,
								1% 1%,
								70% 1%,
								99% 30%,
								99% 99%,
								0% 99%,
								0% 100%,
								100% 100%,
								100% 29%,
								71% 0
							);
						}
					}
					@media (max-width: 85rem) {
						${ChamSkinSidePanelImageContainer} {
							transform: translateY(-1.5rem);
						}
					}
			  `
			: css`
					opacity: 0.7;
					&:hover {
						@media (min-width: 85rem) {
							${ChamSkinSidePanelImageContainer} {
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
