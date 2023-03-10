import { ChamRightContainer } from '../../styled-components';
import { ChampionBoxRegion, ChampionBoxRol } from './champion-box';

export const ChampionInfoRight = () => {
	return (
		<ChamRightContainer>
			<ChampionBoxRol />
			<ChampionBoxRegion />
		</ChamRightContainer>
	);
};
