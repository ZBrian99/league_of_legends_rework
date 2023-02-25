import { ChamInfoContainer } from '../styled-components';
import { ChampionInfoLeft, ChampionInfoMid, ChampionInfoRight } from './';

export const ChampionInfo = () => {
	return (
		<ChamInfoContainer>
			<ChampionInfoLeft />
			<ChampionInfoMid />
			<ChampionInfoRight />
		</ChamInfoContainer>
	);
};
