import { useEffect, useRef, useState } from 'react';

export const useNavBar = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	const menuRef = useRef();

	const NavMenuOpen = () => {
		setMobileMenu(true);
	};

	const NavMenuClose = () => {
		setMobileMenu(false);
	};

	useEffect(() => {
		const NavMenuClickOutside = (e) => {
			if (menuRef?.current && !menuRef.current.contains(e.target)) {
				setMobileMenu(false);
			}
		};

		document.addEventListener('click', NavMenuClickOutside);

		return () => {
			document.removeEventListener('click', NavMenuClickOutside);
		};
	}, []);

	return { mobileMenu, menuRef, NavMenuOpen, NavMenuClose };
};
