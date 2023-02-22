import { useEffect, useRef, useState } from 'react';
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

	const hamdleClick = (num) => {
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

	return (
		<ChamSkinsContainer image={skins[skinNumber].num}>
			<ChamSkinSidePanelTitle>AVAILABLE SKINS</ChamSkinSidePanelTitle>
			<ChamSkinSidePanel>
				<ChamSkinSidePanelSelector ref={selector}>
					{skins.map(({ name, num, id }, i) => (
						<ChamSkinSidePanelContainer key={id} active={skinNumber === i} onClick={() => hamdleClick(i)}>
							<ChamSkinSidePanelImage
								src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chamId}_${num}.jpg`}
								alt={name === 'default' ? num : num}
							/>
							<ChamSkinSidePanelText>{name === 'default' ? chamName : name}</ChamSkinSidePanelText>
						</ChamSkinSidePanelContainer>
					))}
				</ChamSkinSidePanelSelector>
			</ChamSkinSidePanel>
			<ChamSkinImage
				src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chamId}_${skins[skinNumber].num}.jpg`}
				alt={skins[skinNumber].num}
			/>
		</ChamSkinsContainer>
	);
};
