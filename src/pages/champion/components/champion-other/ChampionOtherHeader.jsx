import { HeaderIconText } from '../../../../styled-components/General.styles';
import { ChampionsHeaderContainer, ChampionsHeaderLine } from '../../../champions/styled-components/ChampionsHeader.styles';

export const ChampionOtherHeader = ({ title, src }) => {
	return (
		<ChampionsHeaderContainer>
			<ChampionsHeaderLine line={`/assets/line.png`} rotate={180} />
			<HeaderIconText as='span' icon={src}>{title}</HeaderIconText>
			<ChampionsHeaderLine line={`/assets/line.png`} />
		</ChampionsHeaderContainer>
	);
};
