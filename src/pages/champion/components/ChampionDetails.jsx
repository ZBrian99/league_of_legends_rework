import { ChamContainer } from '../styled-components';
import { ChampionAbilities } from './ChampionAbilities';
import { ChampionInfo } from './ChampionInfo';
import { ChampionOther } from './ChampionOther';
import { ChampionSkins } from './ChampionSkins';

export const ChampionDetails = () => {
	return (
		<ChamContainer>
			<ChampionInfo />
			<ChampionAbilities />
			<ChampionSkins />
			<ChampionOther />
		</ChamContainer>
	);
};
