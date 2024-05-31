import { ChampionDetails, ChampionHeaderContainer } from './';
import { createContext } from 'react';
import { ChampionContainer } from './styled-components/Champion.styles';
import { Loader } from '../../styled-components/Loader.styles';
import { useChampion } from './hooks/useChampion';

export const ChampionContext = createContext();

export const Champion = () => {
	const { championData, isLoading } = useChampion();
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
								<ChampionHeaderContainer />
								<ChampionDetails />
							</ChampionContainer>
						</ChampionContext.Provider>
					}
				</>
			)}
		</>
	);
};
