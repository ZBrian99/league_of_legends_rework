import { Link } from 'react-router-dom';
import { CampionsHeader, CampionsHeaderLine, CampionsHeaderText } from '../../components';
import {
	OtherCampionsIcon,
	OtherChampionBox,
	OtherChampionContainer,
	OtherChampionDescription,
	OtherChampionName,
} from '../../styled-components';

export const ChampionOther = () => {
	return (
		<>
			<CampionsHeader>
				<CampionsHeaderLine line={'../../../src/assets/universe/line.png'} rotate={180} />
				<OtherCampionsIcon small icon={'../../../src/assets/universe/other_icon.png'}>
					Other Champions
				</OtherCampionsIcon>
				<CampionsHeaderLine line={'../../../src/assets/universe/line.png'} />
			</CampionsHeader>
			<OtherChampionContainer>
				<Link>
					<OtherChampionBox image={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg'}>
						<OtherChampionName>name</OtherChampionName>
						<OtherChampionDescription>title</OtherChampionDescription>
					</OtherChampionBox>
				</Link>
				<Link>
					<OtherChampionBox image={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg'}>
						<OtherChampionName>name</OtherChampionName>
						<OtherChampionDescription>title</OtherChampionDescription>
					</OtherChampionBox>
				</Link>
				<Link>
					<OtherChampionBox image={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg'}>
						<OtherChampionName>name</OtherChampionName>
						<OtherChampionDescription>title</OtherChampionDescription>
					</OtherChampionBox>
				</Link>
			</OtherChampionContainer>
		</>
	);
};
