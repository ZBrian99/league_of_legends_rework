import { Link } from 'react-router-dom';
import { ChampionCard, ChampionCardDescription, ChampionCardTitle } from '../styled-components';

export const ChampionsCard = ({ id, title, ImageUrl, name }) => {
	return (
		<Link to={`/champion/${id}/`} title={id}>
			<ChampionCard image={ImageUrl}>
				<ChampionCardTitle>{name}</ChampionCardTitle>
				<ChampionCardDescription>{title}</ChampionCardDescription>
			</ChampionCard>
		</Link>
	);
};
