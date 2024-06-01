import { ChamMidContainer } from '../../styled-components/Champion.styles';
import { ChampionLore } from './ChampionLore';
import { ChampionQuote } from './ChampionQuote';

export const ChampionInfoMid = () => {
	return (
		<ChamMidContainer>
			<ChampionQuote />
			<ChampionLore />
		</ChamMidContainer>
	);
};
