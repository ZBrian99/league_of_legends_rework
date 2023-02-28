import { MobileMenuContent } from '../../styled-components';
import { NavBarCenter, NavBarRight, NavBarTop } from './';
export const NavBarMobile = ({ mobileMenu, NavMenuClose }) => {
	return (
		<MobileMenuContent visible={mobileMenu}>
			<NavBarTop mobileMenu={mobileMenu} onClick={NavMenuClose} />
			<NavBarCenter onClick={NavMenuClose} />
			<NavBarRight onClick={NavMenuClose} />
		</MobileMenuContent>
	);
};
