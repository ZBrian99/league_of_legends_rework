import { ChamRightContainer } from '../../styled-components';
import { ChampionBoxRegion, ChampionBoxRol } from './championBox';

export const ChampionInfoRight = () => {
	return (
		<ChamRightContainer>
			<ChampionBoxRol />
			<ChampionBoxRegion />
		</ChamRightContainer>
	);
};
