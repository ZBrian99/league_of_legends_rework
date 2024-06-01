import { useContext } from 'react';
import { ChampionSkinPanel } from './ChampionSkinPanel';
import { ChamSkinSidePanel, ChamSkinSidePanelSelector } from '../../styled-components/ChampionSkins.styles';
import { ChampionContext } from '../../Champion';

export const ChampionSkinSelector = ({ selector, skinNumber, fn }) => {
	const { skins } = useContext(ChampionContext);

	return (
		<ChamSkinSidePanel>
			<ChamSkinSidePanelSelector ref={selector}>
				{skins.map(({ name, num, id }, i) => (
					<ChampionSkinPanel key={id} name={name} num={num} active={skinNumber === i} fn={() => fn(i)} />
				))}
			</ChamSkinSidePanelSelector>
		</ChamSkinSidePanel>
	);
};
