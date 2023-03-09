import { HeaderIconText } from '../../../styled-components';
import { ChampionsHeaderContainer, ChampionsHeaderLine } from '../styled-components';
export const ChampionsHeader = () => {
	return (
		<ChampionsHeaderContainer>
			<ChampionsHeaderLine  line={`/league-of-legends/assets/line.png`} rotate={180} />
			<HeaderIconText icon={`/league-of-legends/assets/header_icon.png`} size={'1.4em'} width={'1.125rem'}>
				Champions
			</HeaderIconText>
			<ChampionsHeaderLine line={`/league-of-legends/assets/line.png`} />
		</ChampionsHeaderContainer>
	);
};
