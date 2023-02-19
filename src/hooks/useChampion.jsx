import { useEffect, useState } from 'react';
import { getChampionById } from '../services';
export const useChampion = (chamName) => {
	const [champion, setChampion] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getChampion = async () => {
			const championsData = await getChampionById(chamName);

			const championsInfo = Object.values(championsData).map((champion) => champion);
			setChampion(championsInfo);
			setIsLoading(false);
		};

		getChampion();
	}, [chamName]);
	return { champion, isLoading };
};
