import { HeaderIconText } from '../../../styled-components';
import { CampionsHeaderContainer, CampionsHeaderLine } from '../../champions/styled-components';

export const ChampionOtherHeader = ({ title, src }) => {
	return (
		<CampionsHeaderContainer>
			<CampionsHeaderLine line={`${baseUrl}assets/line.png`} rotate={180} />
			<HeaderIconText icon={src}>{title}</HeaderIconText>
			<CampionsHeaderLine line={`${baseUrl}assets/line.png`} />
		</CampionsHeaderContainer>
	);
};
