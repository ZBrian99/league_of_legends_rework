import {
	ChampionsFilterRolesText,
	ChampionsFilterRolesMobileContainer,
	ChampionsFilterRolesIcon,
} from '../../../styled-components';

export const ChampionsFilterRolesMobile = ({ handleRoleVisibility }) => {
	return (
		<ChampionsFilterRolesMobileContainer onClick={handleRoleVisibility}>
			<ChampionsFilterRolesIcon src='/assets/runeterra_emblem.png' alt='search icon' />
			<ChampionsFilterRolesText>Roles</ChampionsFilterRolesText>
		</ChampionsFilterRolesMobileContainer>
	);
};
