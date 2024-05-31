import { HeaderIconText } from '../../../styled-components/General.styles';
import { ChampionsHeaderContainer, ChampionsHeaderLine } from '../styled-components/ChampionsHeader.styles';

export const ChampionsHeader = () => {
	return (
		<ChampionsHeaderContainer>
			<ChampionsHeaderLine line={`/assets/line.png`} rotate={180} />
			<HeaderIconText icon={`/assets/header_icon.png`} size={'1.4em'} width={'1.125rem'}>
				Champions
			</HeaderIconText>
			<ChampionsHeaderLine line={`/assets/line.png`} />
		</ChampionsHeaderContainer>
	);
};
