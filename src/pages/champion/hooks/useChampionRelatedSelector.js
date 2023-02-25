import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../../context';

export const useChampionRelatedSelector = () => {
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
  return { related };
};
