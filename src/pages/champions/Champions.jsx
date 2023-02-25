import { ChampionsHeader } from '../../components';
import { useChampions } from '../../hooks';
import { Loader } from '../../styled-components';
import { ChampionSelector } from '../champion/components';
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
