import { NavCenterContent, NavText, NavLink } from '../../styled-components';

export const NavBarCenter = ({ onClick }) => {
	const links = ['Universe', 'Champions', 'Regions'];
	return (
		<NavCenterContent>
			{links.map((link, i) => (
				<NavLink key={i} to={`${link.toLowerCase().replace(/ /g, '_')}/`} onClick={onClick}>
					<NavText>{link}</NavText>
				</NavLink>
			))}
		</NavCenterContent>
	);
};
