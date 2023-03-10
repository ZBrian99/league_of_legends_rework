import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const fadeIn = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HeaderIconText = styled.h1`
	margin: 0 5rem;
	text-transform: uppercase;
	font-size: ${({ size }) => (size ? size : '0.9em')};
	letter-spacing: 0.3125rem;
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
		width: ${({ width }) => (width ? width : '2rem')};
		height: 2rem;
	}
`;
