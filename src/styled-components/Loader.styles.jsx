import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
const AnimLoader = keyframes`
0% {
  /* left: 0; */
  /* transform: translateX(-100%); */
  opacity: .5;
}
50% {
  opacity: 1;
  /* left: 100%;
  transform: translateX(0%); */
}
100% {
  opacity: .5;
  /* left: 100%;
  transform: translateX(0%); */
}
`;
export const Loader = styled.div`
	width: 100%;
	height: 0.3rem;
	display: inline-block;
	position: relative;
	overflow: hidden;
	grid-column: 1/6;
	min-height: calc(100vh - 0.3rem);
	&::after {
		content: '';
		width: 100%;
		height: 0.3rem;
		background: #292929;
		position: absolute;
		animation: ${AnimLoader} 1s linear infinite;
	}
`;
