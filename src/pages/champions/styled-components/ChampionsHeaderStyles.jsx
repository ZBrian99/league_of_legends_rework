import styled from '@emotion/styled';

export const CampionsHeaderContainer = styled.div`
	margin: 10rem 0 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const CampionsHeaderLine = styled.span`
	transform: rotate(${({ rotate }) => rotate}deg);
	background-image: url(${({ line }) => line});
	background-repeat: no-repeat;
	width: 30%;
	height: 5px;
	position: relative;
	&::before {
		content: '◇';
		height: 5px;
		width: 5px;
		top: -2px;
		left: -5px;
		position: absolute;
		transform: rotate(45deg);
		border: 1px solid #373121;
		font-size: 0;
	}
`;
