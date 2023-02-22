import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CampionsHeader, CampionsHeaderLine, CampionsHeaderText } from '../../components';
import { DataContext } from '../../context';
import {
	OtherCampionsIcon,
	OtherChampionBox,
	OtherChampionContainer,
	OtherChampionDescription,
	OtherChampionName,
} from '../../styled-components';

export const ChampionOther = () => {
	const [random, setRandom] = useState(null);
	const { extraChamInfo } = useContext(DataContext);
	const { id } = useParams();
	useEffect(() => {
		const randomNum = [];

		const chamNum = extraChamInfo.findIndex((e) => e.id === id);

		do {
			randomNum[1] = Math.floor(Math.random() * extraChamInfo.length);
		} while (randomNum[1] === chamNum);

		randomNum[2] = randomNum[1] + 10;
		if (randomNum[2] >= extraChamInfo.length) {
			randomNum[2] -= extraChamInfo.length;
		}
		randomNum[0] = randomNum[1] - 10;
		if (randomNum[0] < 0) {
			randomNum[0] += extraChamInfo.length;
		}
		setRandom(randomNum);
	}, []);
	return (
		<>
			<CampionsHeader>
				<CampionsHeaderLine line={`${baseUrl}assets/line.png`} rotate={180} />
				<OtherCampionsIcon small icon={`${baseUrl}assets/icon_universe.png`}>
					Other Champions
				</OtherCampionsIcon>
				<CampionsHeaderLine line={`${baseUrl}assets/line.png`} />
			</CampionsHeader>
			<OtherChampionContainer>
				{!!random && (
					<>
						{random.map((num) => (
							<Link
								key={extraChamInfo[num].id}
								to={`/champion/${extraChamInfo[num].id}/`}
								title={extraChamInfo[num].id}
							>
								<OtherChampionBox
									image={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${extraChamInfo[num].id}_0.jpg`}
								>
									<OtherChampionName>{extraChamInfo[num].name}</OtherChampionName>
									<OtherChampionDescription>{extraChamInfo[num].title}</OtherChampionDescription>
								</OtherChampionBox>
							</Link>
						))}
						
					</>
				)}
			</OtherChampionContainer>
		</>
	);
};
