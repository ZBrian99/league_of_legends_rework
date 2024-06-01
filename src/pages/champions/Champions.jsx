import { useState } from 'react';
import { useChampions } from '../../hooks/useChampions';
import { Loader } from '../../styled-components/Loader.styles';
import { ChampionsContainerBackground, ChampionsMainContainer } from './styled-components/Champions.styles';
import { ChampionsHeader } from './components/ChampionsHeader';
import { ChampionSelector } from './components/ChampionSelector';
import { ChampionsFilter } from './components/ChampionsFilter';

export const Champions = () => {
	const { champions, isLoading } = useChampions();
	const [filteredChampions, setFilteredChampions] = useState([]);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<ChampionsMainContainer>
					<ChampionsContainerBackground />
					<ChampionsFilter champions={champions} filteredChampions={setFilteredChampions} />
					<ChampionsHeader />
					<ChampionSelector champions={filteredChampions} />
				</ChampionsMainContainer>
			)}
		</>
	);
};
