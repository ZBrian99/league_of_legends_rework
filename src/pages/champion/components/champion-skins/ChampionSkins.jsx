import { ChamSkinImage, ChamSkinsContainer, ChamSkinSidePanelTitle } from '../../styled-components';
import { ChampionSkinSelector } from './';
import { useChampionSkins } from '../../hooks/useChampionSkins';

export const ChampionSkins = () => {
	const { id, skins, skinNumber, selector, handleClick } = useChampionSkins();

	return (
		<ChamSkinsContainer image={skins[skinNumber].num}>
			<ChamSkinSidePanelTitle>AVAILABLE SKINS</ChamSkinSidePanelTitle>

			<ChampionSkinSelector selector={selector} skinNumber={skinNumber} fn={handleClick} />

			<ChamSkinImage
				src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skins[skinNumber].num}.jpg`}
				alt={skins[skinNumber].num}
			/>
		</ChamSkinsContainer>
	);
};
