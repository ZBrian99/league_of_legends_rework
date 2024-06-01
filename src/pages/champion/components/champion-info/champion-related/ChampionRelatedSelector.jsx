import { Link } from 'react-router-dom';
import { ChamRelatedSelectorContainer } from '../../../styled-components/ChampionRelated.styles';
import { useChampionRelatedSelector } from '../../../hooks/useChampionRelatedSelector';
import { ChampionLogoWithName } from './ChampionLogoWithName';
export const ChampionRelatedSelector = () => {
	const { related } = useChampionRelatedSelector();

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
