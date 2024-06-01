import { MobileMenuContent } from '../../styled-components/NavBar.styles';
import { NavBarCenter } from './NavBarCenter';
import { NavBarRight } from './NavBarRight';
import { NavBarTop } from './NavBarTop';

export const NavBarMobile = ({ mobileMenu, NavMenuClose }) => {
	return (
		<MobileMenuContent visible={mobileMenu}>
			<NavBarTop mobileMenu={mobileMenu} onClick={NavMenuClose} />
			<NavBarCenter onClick={NavMenuClose} />
			<NavBarRight onClick={NavMenuClose} />
		</MobileMenuContent>
	);
};
