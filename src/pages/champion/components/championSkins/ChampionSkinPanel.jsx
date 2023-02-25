import { useContext } from 'react';
import {
	ChamSkinSidePanelContainer,
	ChamSkinSidePanelImage,
	ChamSkinSidePanelText,
} from '../../styled-components';
import { ChampionContext } from '../../Champion';

export const ChampionSkinPanel = ({ active, name, num, fn }) => {
	const { name: chamName, id: chamId } = useContext(ChampionContext);

	return (
		<ChamSkinSidePanelContainer active={active} onClick={fn}>
			<ChamSkinSidePanelImage
				src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chamId}_${num}.jpg`}
				alt={name === 'default' ? num : num}
			/>
			<ChamSkinSidePanelText>{name === 'default' ? chamName : name}</ChamSkinSidePanelText>
		</ChamSkinSidePanelContainer>
	);
};
