import { ChampionOtherContainer } from './ChampionOtherContainer';
import { ChampionOtherHeader } from './ChampionOtherHeader';

export const ChampionOther = () => {
	return (
		<>
			<ChampionOtherHeader title='Other Champions' src={`/assets/icon_universe.png`} />
			<ChampionOtherContainer />
		</>
	);
};
