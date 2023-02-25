import { ChamHeader } from '../styled-components';
import { ChampionHeaderContainer } from './ChampionHeaderContainer';
import { ChampionSplash } from './ChampionSplash';

export const ChampionHeader = () => {
	return (
		<ChamHeader>
			<ChampionHeaderContainer />
			<ChampionSplash />
		</ChamHeader>
	);
};
