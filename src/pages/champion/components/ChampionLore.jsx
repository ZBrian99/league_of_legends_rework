import { useContext } from 'react';
import { ChamLargeLore, LoreText } from '../../../styled-components';
import { ChampionContext } from '../Champion';

export const ChampionLore = () => {
	const { id, lore } = useContext(ChampionContext);

	return (
		<ChamLargeLore image={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}>
			<LoreText>{lore}</LoreText>
		</ChamLargeLore>
	);
};
