import { useChampionsFilter } from '../hooks/useChampionsFilter';
import { ChampionsFilterContainer } from '../styled-components/ChampionsFilter.styles';
import { ChampionsFilterSearch } from './champions-filter/ChampionsFilterSearch';
import { ChampionsFilterSort } from './champions-filter/ChampionsFilterSort';
import { ChampionsFilterRoleSelector } from './champions-filter/ChampionsFilterRoleSelector';
export const ChampionsFilter = ({ champions, filteredChampions }) => {
	const [searchName, handleSearch, handleRol, handleSort, searchSort] = useChampionsFilter(
		champions,
		filteredChampions
	);
	return (
		<ChampionsFilterContainer>
			<ChampionsFilterSearch searchName={searchName} handleSearch={handleSearch} />
			<ChampionsFilterRoleSelector handleRol={handleRol} />
			<ChampionsFilterSort handleSort={handleSort} searchSort={searchSort} />
		</ChampionsFilterContainer>
	);
};
