import { useEffect, useState } from 'react';

export const useChampionAbilityVideo = (ability) => {
	const [src, setSrc] = useState('');
	useEffect(() => {
		const url = ability
			? ability.ability.includes('Passive')
				? `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${ability.key.padStart(
						4,
						'0'
				  )}/ability_${ability.key.padStart(4, '0')}_P1.webm`
				: `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${ability.key.padStart(
						4,
						'0'
				  )}/ability_${ability.key.padStart(4, '0')}_${ability.ability}1.webm`
			: '';

		setSrc(url);
	}, [ability]);
	return {src};
};
