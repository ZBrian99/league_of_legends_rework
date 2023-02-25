import { useChampions } from '../../hooks';
import { Loader } from '../../styled-components';
import { ChampionSelector, ChampionsHeader } from './components';
import { ChampionsContainerBackground } from './styled-components';

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
					<ChampionSelector champions={champions} />
				</>
			)}
		</>
	);
};

export default Champions;
