import styled from '@emotion/styled';

export const CampionsHeader = styled.div`
	margin: 10rem 0 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
export const CampionsHeaderIcon = styled.img`
	width: auto;
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

export const CampionsHeaderText = styled.span`
	margin: 0 5rem;
	text-transform: uppercase;
	font-size: 1.4em;

	letter-spacing: 5px;
	color: #c4b998;
	position: relative;
	display: flex;
	justify-content: center;
	&::after {
		content: ' ';
		position: absolute;
		top: -3rem;
		background-image: url(${({ icon }) => icon});
		background-repeat: no-repeat;
		background-size: cover;
		width: 1.125rem;
		height: 2rem;
	}
`;

export const ChampionsHeader = () => {
	return (
		<CampionsHeader>
			<CampionsHeaderLine line={'../src/assets/universe/line.png'} rotate={180} />
			<CampionsHeaderText icon={'../src/assets/universe/header_icon.png'}>Champions</CampionsHeaderText>
			<CampionsHeaderLine line={'../src/assets/universe/line.png'} />
		</CampionsHeader>
	);
};
