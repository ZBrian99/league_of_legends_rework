import { ChamIconFrame, ChamLogoContainer } from '../../styled-components';
import { ChampionIcon } from './';

export const ChampionLogo = ({ id }) => {
	return (
		<ChamLogoContainer>
			<ChampionIcon id={id} />
			<ChamIconFrame src={`${baseUrl}assets/ChampionIconFrame.png`} alt='champion border' />
		</ChamLogoContainer>
	);
};
