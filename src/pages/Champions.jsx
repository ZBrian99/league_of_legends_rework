import { ChampionsHeader, ChampionsList } from '../components';
import { useChampions } from '../hooks';
import {
	ChampionCard,
	ChampionCardDescription,
	ChampionCardTitle,
	ChampionsContainer,
	ChampionsContainerBackground,
	Container,
	Loader,
} from '../styled-components';
import { Link } from 'react-router-dom';

export const Champions = () => {
	const { champions, isLoading } = useChampions();

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<ChampionsContainerBackground />
					<ChampionsHeader />

					<Container>
						<ChampionsContainer>
							{champions.map(({ id, title, ImageUrl, name }) => (
								<Link key={id} to={`/champion/${id}/`} title={id}>
									<ChampionCard image={ImageUrl}>
										<ChampionCardTitle>{name}</ChampionCardTitle>
										<ChampionCardDescription>{title}</ChampionCardDescription>
									</ChampionCard>
								</Link>
							))}
						</ChampionsContainer>
					</Container>
				</>
			)}
		</>
	);
};

export default Champions;
