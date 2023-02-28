import { useNavBar } from '../../hooks';
import { Nav, NavMobileButton, Svg } from '../../styled-components';
import { NavBarLeft, NavBarMobile } from './';

export const NavBar = () => {
	const { mobileMenu, menuRef, NavMenuOpen, NavMenuClose } = useNavBar();

	return (
		<Nav ref={menuRef}>
			<NavBarLeft onClick={NavMenuClose} />
			<NavBarMobile mobileMenu={mobileMenu} NavMenuClose={NavMenuClose} />
			<NavMobileButton onClick={NavMenuOpen}>
				<Svg width={48} margin={0} viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
					<title>burgerNav</title>
					<path
						d='M0 18A18 18 0 0118 0h12a18 18 0 0118 18v12a18 18 0 01-18 18H18A18 18 0 010 30z'
						fill='gray'
						fillOpacity='.2'
					></path>
					<path d='M15 18h18v2H15zm0 5h18v2H15zm0 7v-2h18v2z' fill='#fcfcfc'></path>
				</Svg>
			</NavMobileButton>
		</Nav>
	);
};
