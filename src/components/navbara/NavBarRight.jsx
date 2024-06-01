import { NavButton, NavRightContent } from '../../styled-components/NavBar.styles';

export const NavBarRight = ({ onClick }) => {
	return (
		<NavRightContent>
			<NavButton onClick={onClick}>Sign in</NavButton>
			<NavButton variant onClick={onClick}>
				Play Now
			</NavButton>
		</NavRightContent>
	);
};
