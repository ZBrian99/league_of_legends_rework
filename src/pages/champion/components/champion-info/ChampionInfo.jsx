import { ChamInfoContainer } from '../../styled-components/Champion.styles';
import { ChampionInfoLeft } from './ChampionInfoLeft';
import { ChampionInfoMid } from './ChampionInfoMid';
import { ChampionInfoRight } from './ChampionInfoRight';

export const ChampionInfo = () => {
	return (
		<ChamInfoContainer>
			<ChampionInfoLeft />
			<ChampionInfoMid />
			<ChampionInfoRight />
		</ChamInfoContainer>
	);
};
