import { useContext, useEffect, useRef, useState } from 'react';
import { ChampionContext } from '../Champion';

export const useChampionSkins = () => {
	const { skins, id } = useContext(ChampionContext);

	const [skinNumber, setSkinNumber] = useState(0);
	const [stopInterval, setStopInterval] = useState(false);
	const selector = useRef();
	useEffect(() => {
		const skinsRotations = setInterval(() => {
			if (!stopInterval) {
				setSkinNumber((skinNumber) => (skins.length - 1 <= skinNumber ? (skinNumber = 0) : skinNumber + 1));
			}
		}, 4000);

		return () => {
			clearInterval(skinsRotations);
		};
	}, [stopInterval]);

	const handleClick = (num) => {
		setStopInterval(true);
		setSkinNumber(num);
	};
	useEffect(() => {
		if (innerWidth > 1360) {
			selector.current.scrollTo({ top: 96 * skinNumber, behavior: 'smooth' });
		} else if (innerWidth <= 1360 && innerWidth > 720) {
			selector.current.scrollTo({ left: 160 * skinNumber, behavior: 'smooth' });
		} else if (innerWidth <= 720) {
			selector.current.scrollTo({ left: 128 * skinNumber, behavior: 'smooth' });
		}
  }, [skinNumber]);
  return { id, skins, skinNumber, selector, handleClick };
};
