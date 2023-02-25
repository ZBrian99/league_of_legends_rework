import { ChamRightContainer } from '../styled-components';
import { ChampionBoxRegion } from './ChampionBoxRegion';
import { ChampionBoxRol } from './ChampionBoxRol';

export const ChampionInfoRight = () => {
	return (
		<ChamRightContainer>
			<ChampionBoxRol />
			<ChampionBoxRegion />
		</ChamRightContainer>
	);
};
