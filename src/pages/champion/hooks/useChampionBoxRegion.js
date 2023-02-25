import { useContext } from 'react';
import { DataContext } from '../../../context';
import { ChampionContext } from '../Champion';

export const useChampionBoxRegion = () => {
	const { extraChamInfo } = useContext(DataContext);
	const { id } = useContext(ChampionContext);

	const region = extraChamInfo.find((e) => e.id === id)?.region;
	const RegionVoid = region?.includes('The Void');
	const RegionRuneterra = region?.includes('Runeterra');

	const base = `${baseUrl}assets/${region?.split(' ').join('_').toLowerCase()}`;

	const regionEmblemUrl = `${base}_emblem.png`;
	const regionIconUrl = `${base}_crest_icon.png`;

	const ShowregionIcon = !!RegionVoid || !!RegionRuneterra;
	return { regionEmblemUrl, ShowregionIcon, regionIconUrl, region };
};
