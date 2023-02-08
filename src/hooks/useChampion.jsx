import { useEffect, useState } from 'react';
import { getChampionById } from '../services';
export const useChampion = (chamName) => {
	const [champion, setChampion] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getChampion = async () => {
			const championsData = await getChampionById(chamName);

			const championsInfo = Object.values(championsData).map((champion) => champion);
			// const championsImageUrl = championsInfo.map(
			// 	({ id }) => `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`
			// );
			// const completeChampions = championsInfo.map((champion, index) => ({
			// 	...champion,
			// 	ImageUrl: championsImageUrl[index],
			// }));
			setChampion(championsInfo);
			setIsLoading(false);
		};

		getChampion();
	}, []);
	return { champion, isLoading };
};
