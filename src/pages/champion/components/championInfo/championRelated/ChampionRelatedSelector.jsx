import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChamRelatedSelectorContainer } from '../../../styled-components';
import { DataContext } from '../../../../../context';
import { ChampionLogoWithName } from './';
export const ChampionRelatedSelector = () => {
	const { id } = useParams();
	const { extraChamInfo } = useContext(DataContext);

	const [related, setRelated] = useState(null);

	useEffect(() => {
		const chamNum = extraChamInfo.findIndex((e) => e.id === id);
		const relatedCham = extraChamInfo
			.filter((cham) =>
				extraChamInfo[chamNum].region === 'Runeterra'
					? cham.race === extraChamInfo[chamNum].race && cham.id !== id
					: cham.region === extraChamInfo[chamNum].region && cham.id !== id
			)
			.sort(() => Math.random() - 0.5)
			.slice(0, 7);
		setRelated(relatedCham);
	}, []);
	return (
		<ChamRelatedSelectorContainer>
			{!!related &&
				related.map(({ id, name }) => (
					<Link key={id} to={`/champion/${id}/`} title={id}>
						<ChampionLogoWithName id={id} scale={1.1} name={name} />
					</Link>
				))}
		</ChamRelatedSelectorContainer>
	);
};
