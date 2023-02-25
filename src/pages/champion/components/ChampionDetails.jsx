import { ChamContainer } from '../styled-components';
import { ChampionAbilities } from './championAbilities';
import { ChampionInfo } from './championInfo/ChampionInfo';
import { ChampionOther } from './championOther/ChampionOther';
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
