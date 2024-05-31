import { useContext } from 'react';
import { ChampionBox } from './ChampionBox';
import { LargeBoxContainer, LargeBoxImage } from '../../../styled-components';
import { useChampionBoxRegion } from '../../../hooks/useChampionBoxRegion';

export const ChampionBoxRegion = () => {
	const { regionEmblemUrl, ShowregionIcon, regionIconUrl, region } = useChampionBoxRegion();

	return (
		<LargeBoxContainer>
			<LargeBoxImage src={regionEmblemUrl} alt='region' />
			<ChampionBox
				none={ShowregionIcon}
				variant
				reverse
				src={regionIconUrl}
				alt='region'
				title='region'
				description={region}
			/>
		</LargeBoxContainer>
	);
};
