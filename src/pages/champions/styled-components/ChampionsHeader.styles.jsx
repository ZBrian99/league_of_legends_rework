import styled from '@emotion/styled';

export const ChampionsHeaderContainer = styled.header`
	margin: 7rem 0 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	
`;

export const ChampionsHeaderLine = styled.span`
	transform: rotate(${({ rotate }) => rotate}deg);
	background-image: url(${({ line }) => line});
	background-repeat: no-repeat;
	width: 30%;
	height: .3125rem;
	position: relative;
	&::before {
		content: '◇';
		height: .3125rem;
		width: .3125rem;
		top: -.125rem;
		left: -.3125rem;
		position: absolute;
		transform: rotate(45deg);
		border: 1px solid #373121;
		font-size: 0;
	}
`;
