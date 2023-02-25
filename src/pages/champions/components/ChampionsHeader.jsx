import { HeaderIconText } from '../../../styled-components';
import { CampionsHeaderContainer, CampionsHeaderLine } from '../styled-components';
export const ChampionsHeader = () => {
	return (
		<CampionsHeaderContainer>
			<CampionsHeaderLine line={`${baseUrl}assets/line.png`} rotate={180} />
			<HeaderIconText icon={`${baseUrl}assets/header_icon.png`} size={'1.4em'} width={'1.125rem'}>
				Champions
			</HeaderIconText>
			<CampionsHeaderLine line={`${baseUrl}assets/line.png`} />
		</CampionsHeaderContainer>
	);
};
