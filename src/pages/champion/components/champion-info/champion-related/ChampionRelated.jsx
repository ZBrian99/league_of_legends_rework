import { LargeBoxRelatedContainer } from '../../../styled-components';
import { ChampionRelatedSelector } from './ChampionRelatedSelector';
import { ChampionRelatedTitle } from './ChampionRelatedTitle';

export const ChampionRelated = () => {
	return (
		<LargeBoxRelatedContainer>
			<ChampionRelatedTitle title='related champions' />
			<ChampionRelatedSelector />
		</LargeBoxRelatedContainer>
	);
};
