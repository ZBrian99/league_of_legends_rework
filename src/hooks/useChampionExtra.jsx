// import { useEffect, useState } from 'react';
// import { getChampionsExtra } from '../services';

// export const useChampionsExtra = () => {
// 	const [championsExtra, setChampionsExtra] = useState();
// 	const [isLoading, setIsLoading] = useState(true);

// 	useEffect(() => {
// 		const getChampions = async () => {
// 			const championsData = await getChampionsExtra();
//       const data = await championsData;
// 			setChampionsExtra(data);
// 			setIsLoading(false);
// 		};

// 		getChampions();
// 	}, []);
// 	return { championsExtra, isLoading };
// };
