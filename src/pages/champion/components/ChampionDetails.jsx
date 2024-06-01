// import { ChampionAbilities, ChampionOther, ChampionSkins } from './';

import { ChamContainer } from '../styled-components/Champion.styles';
import { ChampionAbilities } from './champion-abilities/ChampionAbilities';
import { ChampionInfo } from './champion-info/ChampionInfo';
import { ChampionOther } from './champion-other/ChampionOther';
import { ChampionSkins } from './champion-skins/ChampionSkins';


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
