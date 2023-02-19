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
	const { championsExtra, isLoading } = useContext(DataContext);
	const { id } = useParams();
	useEffect(() => {
		if (!isLoading) {
			const randomNum = [];

			const chamNum = championsExtra.findIndex((e) => e.id === id);

			do {
				randomNum[0] = Math.floor(Math.random() * championsExtra.length);
			} while (randomNum[0] === chamNum);

			randomNum[1] = randomNum[0] + 10;
			if (randomNum[1] >= championsExtra.length) {
				randomNum[1] -= championsExtra.length;
			}
			randomNum[2] = randomNum[0] - 10;
			if (randomNum[2] < 0) {
				randomNum[2] += championsExtra.length;
			}
			setRandom(randomNum);
		}
	}, [isLoading]);
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
				{!isLoading & !!random && (
					<>
						<Link>
							<OtherChampionBox
								image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
									championsExtra[random[2]].id
								}_0.jpg`}
							>
								<OtherChampionName>{championsExtra[random[2]].name}</OtherChampionName>
								<OtherChampionDescription>{championsExtra[random[2]].title}</OtherChampionDescription>
							</OtherChampionBox>
						</Link>
						<Link>
							<OtherChampionBox
								image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
									championsExtra[random[0]].id
								}_0.jpg`}
							>
								<OtherChampionName>{championsExtra[random[0]].name}</OtherChampionName>
								<OtherChampionDescription>{championsExtra[random[0]].title}</OtherChampionDescription>
							</OtherChampionBox>
						</Link>
						<Link>
							<OtherChampionBox
								image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
									championsExtra[random[1]].id
								}_0.jpg`}
							>
								<OtherChampionName>{championsExtra[random[1]].name}</OtherChampionName>
								<OtherChampionDescription>{championsExtra[random[1]].title}</OtherChampionDescription>
							</OtherChampionBox>
						</Link>
					</>
				)}
			</OtherChampionContainer>
		</>
	);
};
