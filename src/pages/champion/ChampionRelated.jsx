import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DataContext } from '../../context';
import {
	ChamIconBorder,
	ChamIconContainer,
	ChamIconImage,
	ChamLargeLogoContainer,
	ChamLogoContainer,
	ChamRelatedName,
	ChamRelatedSelectorContainer,
	ChamRelatedTitle,
	ChamRelatedTopContainer,
	LargeBoxRelatedContainer,
  SimpleBoxContainer,
  SimpleBoxImage,
  SimpleBoxImageContainer,
  SimpleBoxText,
  SimpleBoxTextContainer,
} from '../../styled-components';

export const ChampionRelated = () => {
	const { id } = useParams();
	const { championsExtra, isLoading } = useContext(DataContext);

	const [related, setRelated] = useState(null);

	useEffect(() => {
		if (!isLoading) {
			const chamNum = championsExtra.findIndex((e) => e.id === id);
			const relatedCham = championsExtra
				.filter((cham) =>
					championsExtra[chamNum].region === 'Runeterra'
						? cham.race === championsExtra[chamNum].race && cham.id !== id
						: cham.region === championsExtra[chamNum].region && cham.id !== id
				)
				.sort(() => Math.random() - 0.5)
				.slice(0, 7);
			setRelated(relatedCham);
		}
	}, [isLoading]);
	return (
		<LargeBoxRelatedContainer>
			
			<ChamRelatedTopContainer>
				<ChamRelatedTitle>RELATED CHAMPIONS</ChamRelatedTitle>
			</ChamRelatedTopContainer>

			<ChamRelatedSelectorContainer>
				{!!related &&
					related.map(({ id, name }) => (
						<Link key={id} to={`/champion/${id}/`}>
							<ChamLargeLogoContainer>
								<ChamIconContainer scale={1.1}>
									<ChamIconBorder>
										<ChamIconImage
											src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${id}.png`}
											alt='champion image'
										/>
									</ChamIconBorder>
								</ChamIconContainer>
								<ChamRelatedName>{name}</ChamRelatedName>
							</ChamLargeLogoContainer>
						</Link>
					))}
			</ChamRelatedSelectorContainer>
		</LargeBoxRelatedContainer>
	);
};
