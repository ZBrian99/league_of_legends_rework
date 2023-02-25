import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useChampion } from '../../hooks';
import { ChampionDetails, ChampionHeader } from './';
import { createContext } from 'react';
import { ChampionContainer } from './styled-components';
import { Loader } from '../../styled-components';

export const ChampionContext = createContext();

export const Champion = () => {
	const { id } = useParams();

	const { champion, isLoading } = useChampion(id);
	const [championData, setChampionData] = useState(null);

	useEffect(() => {
		if (!isLoading) {
			setChampionData(champion.filter((e) => e.id === id)[0]);
		}
	}, [id, isLoading, champion]);

	return (
		<>
			{isLoading || !championData ? (
				<>
					<Loader />
					{window.scrollTo(0, 0)}
				</>
			) : (
				<>
					{
						<ChampionContext.Provider value={championData}>
							<ChampionContainer>
								<ChampionHeader />
								<ChampionDetails />
							</ChampionContainer>
						</ChampionContext.Provider>
					}
				</>
			)}
		</>
	);
};

export default Champion;
