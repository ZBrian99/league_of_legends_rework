import { ChampionLore, ChampionQuote } from '.';
import { ChamMidContainer } from '../../../styled-components';

export const ChampionInfoMid = () => {
	return (
		<ChamMidContainer>
			<ChampionQuote />
			<ChampionLore />
		</ChamMidContainer>
	);
};
