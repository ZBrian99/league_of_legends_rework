import { ChamHeader } from '../styled-components';
import { ChampionHeader } from './ChampionHeader';
import { ChampionSplash } from './ChampionSplash';

export const ChampionHeaderContainer = () => {
	return (
		<ChamHeader>
			<ChampionHeader />
			<ChampionSplash />
		</ChamHeader>
	);
};
