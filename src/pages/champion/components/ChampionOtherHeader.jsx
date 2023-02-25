import { CampionsHeader, CampionsHeaderLine } from '../../../components';
import { OtherCampionsIcon } from '../../../styled-components';

export const ChampionOtherHeader = ({ title, src }) => {
	return (
		<CampionsHeader>
			<CampionsHeaderLine line={`${baseUrl}assets/line.png`} rotate={180} />
			<OtherCampionsIcon icon={src}>{title}</OtherCampionsIcon>
			<CampionsHeaderLine line={`${baseUrl}assets/line.png`} />
		</CampionsHeader>
	);
};
