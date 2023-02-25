import { useContext } from 'react';
import { DataContext } from '../../../context';
import { LargeBoxContainer, LargeBoxImage } from '../styled-components';
import { ChampionContext } from '../Champion';
import { ChampionBox } from './ChampionBox';

export const ChampionBoxRegion = () => {
	const { extraChamInfo } = useContext(DataContext);
	const { id } = useContext(ChampionContext);

	const region = extraChamInfo.find((e) => e.id === id)?.region;
	const RegionVoid = region?.includes('The Void');
	const RegionRuneterra = region?.includes('Runeterra');

	const base = `${baseUrl}assets/${region?.split(' ').join('_').toLowerCase()}`;

	const regionEmblemUrl = `${base}_emblem.png`;
	const regionIconUrl = `${base}_crest_icon.png`;

	const ShowregionIcon = !!RegionVoid || !!RegionRuneterra;

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
