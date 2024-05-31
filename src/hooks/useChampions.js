import { useEffect, useState } from 'react';
import { getChampions } from '../services/api';
export const useChampions = () => {
	const [champions, setChampions] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		document.title = `Champions - League of Legends`;
		const getAllChampions = async () => {
			const championsData = await getChampions();
			const championsInfo = Object.values(championsData).map((champion) => champion);
			const championsImageUrl = championsInfo.map(
				({ id }) => `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`
			);
			const completeChampions = championsInfo.map((champion, index) => ({
				...champion,
				ImageUrl: championsImageUrl[index],
			}));
			setChampions(completeChampions);
			setIsLoading(false);
		};

		getAllChampions();
	}, []);
	return { champions, isLoading };
};
