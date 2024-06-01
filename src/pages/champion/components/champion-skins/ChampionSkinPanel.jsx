import { useContext } from 'react';
import {
	ChamSkinSidePanelContainer,
	ChamSkinSidePanelImage,
	ChamSkinSidePanelImageContainer,
	ChamSkinSidePanelText,
} from '../../styled-components/ChampionSkins.styles';
import { ChampionContext } from '../../Champion';

export const ChampionSkinPanel = ({ active, name, num, fn }) => {
	const { name: chamName, id: chamId } = useContext(ChampionContext);

	return (
		<ChamSkinSidePanelContainer active={active} onClick={fn}>
			<ChamSkinSidePanelImageContainer>
				<ChamSkinSidePanelImage
					src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chamId}_${num}.jpg`}
					alt={name === 'default' ? num : num}
				/>
			</ChamSkinSidePanelImageContainer>
			<ChamSkinSidePanelText>{name === 'default' ? chamName : name}</ChamSkinSidePanelText>
		</ChamSkinSidePanelContainer>
	);
};
