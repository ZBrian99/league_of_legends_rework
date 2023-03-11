import { useEffect, useRef, useState } from 'react';

const roles = ['All', 'Assassins', 'Fighters', 'Mages', 'Marksmen', 'Supports', 'Tanks'];
const idRoles = ['', 'Assassin', 'Fighter', 'Mage', 'Marksman', 'Support', 'Tank'];

export const useChampionsFilterRoleSelector = (handleRol) => {
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
	const handleRoleVisibility = () => {
		setRoleVisibility(!roleVisibility);
	};

	const handleRolAndRoleVisibility = (id) => {
		handleRol(id);
		handleRoleVisibility();
	};
	return [menuRef, handleRoleVisibility, roleVisibility, roles, idRoles, handleRolAndRoleVisibility];
};
