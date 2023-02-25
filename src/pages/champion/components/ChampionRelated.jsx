import { LargeBoxRelatedContainer } from '../styled-components';
import { ChampionRelatedSelector, ChampionRelatedTitle } from './';

export const ChampionRelated = () => {
	return (
		<LargeBoxRelatedContainer>
			<ChampionRelatedTitle title='related champions' />
			<ChampionRelatedSelector />
		</LargeBoxRelatedContainer>
	);
};
