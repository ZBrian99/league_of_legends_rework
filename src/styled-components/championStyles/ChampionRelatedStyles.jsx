import styled from '@emotion/styled';

export const ChamRelatedName = styled.h3`
	font-weight: 400;
	font-size: 0.7em;
	color: #c4b998;
	letter-spacing: 2px;
	text-transform: uppercase;
	opacity: 0;
	padding-top: 16px;
	text-align: center;
`;

export const ChamRelatedTitle = styled.p`
	font-size: 0.9em;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	color: #937341;
`;

export const ChamLargeLogoContainer = styled.div`
	width: 100%;
	/* width: 5rem; */
	height: 5rem;
	box-sizing: content-box;
	z-index: 1;
	/* padding: .2rem; */
	padding: 40px 0;
	transition: all 0.2s ease;
	display: flex;
	flex-direction: column;
	align-items: center;
	&:hover {
		cursor: pointer;
		transform: scale(1.2);
		${ChamRelatedName} {
			opacity: 1;
		}
	}
	@media (max-width: 1024px) {
		margin: auto;
		padding: 0 32px;
	}
	/* border: 1px solid green; */
`;

export const ChamRelatedSelectorContainer = styled.div`
	width: 100%;
	/* overflow-y: auto; */
	overflow-y: scroll;
	overflow-x: hidden;
	min-height: calc(100% - 4.375rem);
	padding: 1.5rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: center; */
	/* background-color: blue; */

	@media (max-width: 1024px) {
		flex-direction: row;
		overflow-x: scroll;
		overflow-y: hidden;
		padding: 4rem 1.5rem;
	}

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

export const ChamRelatedTopContainer = styled.div`
	min-height: 4.375rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #31271e;
	/* background-color: #111318; */
`;

export const LargeBoxRelatedContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	border: 1px solid #31271e;
	background-color: #111318;
`;
