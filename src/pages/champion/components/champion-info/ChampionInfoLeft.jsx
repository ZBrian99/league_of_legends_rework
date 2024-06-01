import { ChamLeftContainer } from '../../styled-components/Champion.styles';
import { ChampionRace } from './ChampionRace';
import { ChampionRelated } from './champion-related/ChampionRelated';
export const ChampionInfoLeft = () => {
	return (
		<ChamLeftContainer>
			<ChampionRace />
			<ChampionRelated />
		</ChamLeftContainer>
	);
};
