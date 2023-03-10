import { HeaderIconText } from '../../../../styled-components';
import { ChampionsHeaderContainer, ChampionsHeaderLine } from '../../../champions/styled-components';

export const ChampionOtherHeader = ({ title, src }) => {
	return (
		<ChampionsHeaderContainer>
			<ChampionsHeaderLine line={`/league-of-legends/assets/line.png`} rotate={180} />
			<HeaderIconText as='span' icon={src}>{title}</HeaderIconText>
			<ChampionsHeaderLine line={`/league-of-legends/assets/line.png`} />
		</ChampionsHeaderContainer>
	);
};
