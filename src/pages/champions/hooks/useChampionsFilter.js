import { useEffect, useState } from 'react';

export const useChampionsFilter = (champions, filteredChampions) => {
	const [searchName, setSearchName] = useState('');
	const [searchRole, setSearchRole] = useState('');
	const [searchSort, setSearchSort] = useState(false);

	const handleSearch = ({ target }) => {
		setSearchName(target.value);
	};
	const handleRol = (role) => {
		setSearchRole(role);
	};
	const handleSort = () => {
		setSearchSort(!searchSort);
	};

	const filterChampions = (champions, chamName, chamRol, reverse) => {
		let filterChamp = [];

		chamRol
			? (filterChamp = champions.filter(
					(champion) =>
						champion.tags.find((tag) => tag === chamRol) &&
						champion.name.toLowerCase().includes(chamName.toLowerCase())
			  ))
			: (filterChamp = champions.filter((champion) =>
					champion.name.toLowerCase().includes(chamName.toLowerCase())
			  ));
		reverse && filterChamp.reverse();
		return filterChamp;
	};

	useEffect(() => {
		filteredChampions(filterChampions(champions, searchName, searchRole, searchSort));
	}, [searchName, searchRole, searchSort]);

	return [searchName, handleSearch, handleRol, handleSort, searchSort];
};
