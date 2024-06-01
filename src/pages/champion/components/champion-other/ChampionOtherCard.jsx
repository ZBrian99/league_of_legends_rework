import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../../../context/DataContext';
import { OtherChampionBox, OtherChampionDescription, OtherChampionName } from '../../styled-components/ChampionOther.styles';

export const ChampionOtherCard = ({ num }) => {
	const { extraChamInfo } = useContext(DataContext);

	return (
		<Link to={`/champion/${extraChamInfo[num].id}/`} title={extraChamInfo[num].id}>
			<OtherChampionBox
				image={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${extraChamInfo[num].id}_0.jpg`}
			>
				<OtherChampionName>{extraChamInfo[num].name}</OtherChampionName>
				<OtherChampionDescription>{extraChamInfo[num].title}</OtherChampionDescription>
			</OtherChampionBox>
		</Link>
	);
};
