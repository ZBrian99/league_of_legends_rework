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

export const ChampionSkins = ({ skins, chamName, chamId }) => {
	const [skinNumber, setSkinNumber] = useState(0);
	const [stopInterval, setStopInterval] = useState(false);
	useEffect(() => {
		if (stopInterval) {
			return () => {
				clearInterval(skinsRotations);
			};
		}

		const skinsRotations = setInterval(() => {
			setSkinNumber((skinNumber) => (skins.length - 1 <= skinNumber ? (skinNumber = 0) : skinNumber + 1));
		}, 4000);

		return () => {
			clearInterval(skinsRotations);
		};
	}, [stopInterval]);

	const hamdleClick = (num) => {

    setStopInterval(true);
    setSkinNumber(num);
	};

	return (
		<ChamSkinsContainer image={skins[skinNumber].num}>
			<ChamSkinSidePanelTitle>AVAILABLE SKINS</ChamSkinSidePanelTitle>
			<ChamSkinSidePanel>
				<ChamSkinSidePanelSelector>
					{skins.map(({ name, num, id }, i) => (
						<ChamSkinSidePanelContainer key={id} onClick={(e) => hamdleClick(i)}>
							<ChamSkinSidePanelImage
								src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chamId}_${num}.jpg`}
								alt={name === 'default' ? num : num}
							/>
							<ChamSkinSidePanelText>{name === 'default' ? chamName : name}</ChamSkinSidePanelText>
						</ChamSkinSidePanelContainer>
					))}
				</ChamSkinSidePanelSelector>
			</ChamSkinSidePanel>
			<ChamSkinImage
				src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chamId}_${skins[skinNumber].num}.jpg`}
				alt={skins[skinNumber].num}
			/>
		</ChamSkinsContainer>
	);
};
