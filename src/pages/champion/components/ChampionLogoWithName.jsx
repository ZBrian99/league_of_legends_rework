import { ChamLargeLogoContainer, ChamRelatedName } from '../styled-components';
import { ChampionIcon } from './ChampionIcon';

export const ChampionLogoWithName = ({ id, name, scale }) => {
	return (
		<ChamLargeLogoContainer>
			<ChampionIcon id={id} scale={scale} />
			<ChamRelatedName>{name}</ChamRelatedName>
		</ChamLargeLogoContainer>
	);
};
