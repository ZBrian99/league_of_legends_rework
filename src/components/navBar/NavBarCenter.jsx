import { NavCenterContent, NavText, NavLink } from '../../styled-components/NavBar.styles';

export const NavBarCenter = ({ onClick }) => {
	const links = ['Universe', 'Champions', 'Regions'];
	return (
		<NavCenterContent>
			{links.map((link, i) => (
				<NavLink
					key={i}
					// to={`${link.toLowerCase()}/`}
					to={`${links.find((link) => link === 'Champions').toLowerCase()}/`}
					onClick={onClick}
				>
					<NavText>{link}</NavText>
				</NavLink>
			))}
		</NavCenterContent>
	);
};
