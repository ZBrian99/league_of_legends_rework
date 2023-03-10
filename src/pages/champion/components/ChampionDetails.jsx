import { ChampionAbilities, ChampionOther, ChampionSkins } from '.';
import { ChamContainer } from '../styled-components';
import { ChampionInfo } from './champion-info';


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
