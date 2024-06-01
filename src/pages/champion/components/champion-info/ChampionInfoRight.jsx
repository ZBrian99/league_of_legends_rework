import { ChamRightContainer } from '../../styled-components/Champion.styles';
import { ChampionBoxRegion } from './champion-box/ChampionBoxRegion';
import { ChampionBoxRol } from './champion-box/ChampionBoxRol';

export const ChampionInfoRight = () => {
	return (
		<ChamRightContainer>
			<ChampionBoxRol />
			<ChampionBoxRegion />
		</ChamRightContainer>
	);
};
