import { useChampionsFilter } from '../hooks';
import { ChampionsFilterContainer } from '../styled-components';
import { ChampionsFilterRoleSelector, ChampionsFilterSearch, ChampionsFilterSort } from './champions-filter';

export const ChampionsFilter = ({ champions, filteredChampions }) => {
	const [searchName, handleSearch, handleRol, searchRole, handleSort, searchSort] = useChampionsFilter(
		champions,
		filteredChampions
	);
	return (
		<ChampionsFilterContainer>
			<ChampionsFilterSearch searchName={searchName} handleSearch={handleSearch} />
			<ChampionsFilterRoleSelector handleRol={handleRol} searchRole={searchRole} />
			<ChampionsFilterSort handleSort={handleSort} searchSort={searchSort} />
		</ChampionsFilterContainer>
	);
};
