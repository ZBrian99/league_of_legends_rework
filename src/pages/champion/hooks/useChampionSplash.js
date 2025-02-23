import { useContext, useEffect, useState } from 'react';
import { ChampionContext } from '../Champion';
import { DataContext } from '../../../context';

export const useChampionSplash = () => {
	const { id } = useContext(ChampionContext);
	const { extraChamInfo } = useContext(DataContext);
	const [isVideo, setIsVideo] = useState(false);
	const [Url, setUrl] = useState('');
	useEffect(() => {
		// if (extraChamInfo.find((e) => e.id === id)?.video) {
		// 	setUrl(extraChamInfo.find((e) => e.id === id).video);
		// 	setIsVideo(true);
		// } else {
    //   setUrl(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`);
    // }
    setUrl(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`);
	}, [id]);
	return { isVideo, Url };
};
