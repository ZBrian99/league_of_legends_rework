import { useState } from 'react';
import { ChamIconBorder, ChamIconContainer, ChamIconImage } from '../styled-components';

export const ChampionIcon = ({ id, scale }) => {
	const [isVisible, SetIsVisible] = useState(false);
	const handleLoadImage = () => {
		SetIsVisible(true);
	};
	return (
		<ChamIconContainer visible={isVisible} scale={scale}>
			<ChamIconBorder>
				<ChamIconImage
					onLoad={handleLoadImage}
					src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${id}.png`}
					alt='champion image'
				/>
			</ChamIconBorder>
		</ChamIconContainer>
	);
};
