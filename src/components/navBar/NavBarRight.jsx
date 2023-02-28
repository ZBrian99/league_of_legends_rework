import { NavButton, NavRightContent } from '../../styled-components';

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
