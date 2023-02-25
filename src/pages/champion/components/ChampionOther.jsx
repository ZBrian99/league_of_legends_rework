import { ChampionOtherContainer, ChampionOtherHeader } from './';

export const ChampionOther = () => {
	return (
		<>
			<ChampionOtherHeader title='Other Champions' src={`${baseUrl}assets/icon_universe.png`} />
			<ChampionOtherContainer />
		</>
	);
};
