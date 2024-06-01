import { ChampionsContainer, Container } from '../styled-components/Champions.styles';
import { ChampionsCard } from './ChampionsCard';

export const ChampionSelector = ({ champions }) => {
	return (
		<Container>
			<ChampionsContainer>
				{champions.map(({ id, title, ImageUrl, name }) => (
					<ChampionsCard key={id} id={id} title={title} ImageUrl={ImageUrl} name={name} />
				))}
			</ChampionsContainer>
		</Container>
	);
};
