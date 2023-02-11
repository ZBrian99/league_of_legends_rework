import { useEffect, useState } from 'react';
import {
	ChamSkinImage,
	ChamSkinsContainer,
	ChamSkinSidePanel,
	ChamSkinSidePanelContainer,
	ChamSkinSidePanelImage,
	ChamSkinSidePanelSelector,
	ChamSkinSidePanelText,
	ChamSkinSidePanelTitle,
} from '../../styled-components';

export const ChampionSkins = ({ skins, chamName }) => {
	const [skinNumber, setSkinNumber] = useState(0);

	useEffect(() => {
		const skinsRotations = setInterval(() => {
			setSkinNumber((skinNumber) => (skins.length - 1 <= skinNumber ? (skinNumber = 0) : skinNumber + 1));
		}, 3000);

		return () => {
			clearInterval(skinsRotations);
		};
	}, []);

	return (
		<ChamSkinsContainer image={skins[skinNumber].num}>
				<ChamSkinSidePanelTitle>AVAILABLE SKINS</ChamSkinSidePanelTitle>
			<ChamSkinSidePanel>
				<ChamSkinSidePanelSelector>
					{skins.map(({ name, num, id }) => (
						<ChamSkinSidePanelContainer key={id}>
							<ChamSkinSidePanelImage
								src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_${num}.jpg`}
								alt={name === 'default' ? name : name}
							/>
							<ChamSkinSidePanelText>{name === 'default' ? chamName : name}</ChamSkinSidePanelText>
						</ChamSkinSidePanelContainer>
					))}
				</ChamSkinSidePanelSelector>
			</ChamSkinSidePanel>
			<ChamSkinImage
				src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_${skins[skinNumber].num}.jpg`}
				alt={skins[skinNumber].name}
			/>
		</ChamSkinsContainer>
	);
};
