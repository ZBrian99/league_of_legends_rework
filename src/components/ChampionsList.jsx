import { Link } from 'react-router-dom';
import { useChampions } from '../hooks';
import { ChampionCard, ChampionCardDescription, ChampionCardTitle } from '../styled-components';

export const ChampionsList = () => {
  const { champions, isLoading } = useChampions();
  console.log(typeof champions);
 
	return (
		<>
			{isLoading ? (
				<div>Cargando...</div>
			) : (
				<>
            {champions.map(({ id, title, ImageUrl, name }) => (
              <Link key={id} to={`/champion/${id}`} >
                {console.log(id, title, ImageUrl, name)}
						<ChampionCard image={ImageUrl}>
							<ChampionCardTitle>{name}</ChampionCardTitle>
							<ChampionCardDescription>{title}</ChampionCardDescription>
						</ChampionCard>
            </Link>
					))}
				</>
			)}
		</>
	);
};
