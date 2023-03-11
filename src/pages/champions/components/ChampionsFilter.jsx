import { useEffect, useRef, useState } from 'react';
import {
	ChampionsFilterRolesText,
	ChampionsFilterRolesMobileContainer,
	ChampionsFilterContainer,
	ChampionsFilterInput,
	ChampionsFilterInputContainer,
	ChampionsFilterInputIcon,
	ChampionsFilterRol,
	ChampionsFilterRolButton,
	ChampionsFilterRoles,
	ChampionsFilterRolesContainer,
	ChampionsFilterRolesIcon,
	ChampionsFilterSortContainer,
	ChampionsFilterSortImage,
	ChampionsFilterSortText,
} from '../styled-components';

const roles = ['All', 'Assassins', 'Fighters', 'Mages', 'Marksmen', 'Supports', 'Tanks'];
const idRoles = ['', 'Assassin', 'Fighter', 'Mage', 'Marksman', 'Support', 'Tank'];
export const ChampionsFilter = ({ champions, filteredChampions }) => {
	const [searchName, setSearchName] = useState('');
	const [searchRole, setSearchRole] = useState('');
	const [searchSort, setSearchSort] = useState(false);

	const [roleVisibility, setRoleVisibility] = useState(false);
	const menuRef = useRef(null);
	useEffect(() => {
		const handleClickOutside = ({ target }) => {
			if (menuRef.current && !menuRef.current.contains(target)) {
				setRoleVisibility(false);
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [menuRef]);

	const handleSearch = ({ target }) => {
		setSearchName(target.value);
	};
	const handleRol = (role) => {
		setRoleVisibility(false);
		setSearchRole(role);
	};
	const handleSort = () => {
		setSearchSort(!searchSort);
	};
	const handleRoleVisibility = () => {
		setRoleVisibility(!roleVisibility);
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

	return (
		<ChampionsFilterContainer>
			<ChampionsFilterInputContainer>
				<ChampionsFilterInputIcon src='/league-of-legends/assets/header_icon.png' alt='search icon' />
				<ChampionsFilterInput
					type='text'
					placeholder='Find a Champion'
					value={searchName}
					onChange={handleSearch}
				/>
			</ChampionsFilterInputContainer>

			<ChampionsFilterRolesContainer ref={menuRef}>
				<ChampionsFilterRolesMobileContainer onClick={handleRoleVisibility}>
					<ChampionsFilterRolesIcon src='/league-of-legends/assets/runeterra_emblem.png' alt='search icon' />
					<ChampionsFilterRolesText>Roles</ChampionsFilterRolesText>
				</ChampionsFilterRolesMobileContainer>
				<ChampionsFilterRoles isVisible={roleVisibility}>
					{roles.map((role, i) => (
						<ChampionsFilterRol key={role}>
							<ChampionsFilterRolButton
								onClick={() => handleRol(idRoles[i])}
								variant={idRoles[i] === searchRole}
							>
								{role}
							</ChampionsFilterRolButton>
						</ChampionsFilterRol>
					))}
				</ChampionsFilterRoles>
			</ChampionsFilterRolesContainer>

			<ChampionsFilterSortContainer onClick={handleSort} variant={searchSort}>
				<ChampionsFilterSortImage src='/league-of-legends/assets/arrowL.png' alt='sort icon' />
				<ChampionsFilterSortText>A-Z</ChampionsFilterSortText>
			</ChampionsFilterSortContainer>
		</ChampionsFilterContainer>
	);
};
