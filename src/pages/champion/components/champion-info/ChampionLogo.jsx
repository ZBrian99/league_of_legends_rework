import { ChamIconFrame, ChamLogoContainer } from '../../styled-components/Champion.styles';
import { ChampionIcon } from './ChampionIcon';

export const ChampionLogo = ({ id }) => {
	return (
		<ChamLogoContainer>
			<ChampionIcon id={id} />
			<ChamIconFrame src={`/assets/ChampionIconFrame.png`} alt='champion border' />
		</ChamLogoContainer>
	);
};
