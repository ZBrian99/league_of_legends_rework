import {
	ChampionsFilterRol,
	ChampionsFilterRolButton,
	ChampionsFilterRoles,
} from '../../../styled-components';

export const ChampionsFilterRolesSelector = ({
	roleVisibility,
	roles,
	idRoles,
	handleRolAndRoleVisibility,
}) => {
	return (
		<ChampionsFilterRoles isVisible={roleVisibility}>
			{roles.map((role, i) => (
				<ChampionsFilterRol key={role}>
					<ChampionsFilterRolButton
						onClick={() => handleRolAndRoleVisibility(idRoles[i])}
					>
						{role}
					</ChampionsFilterRolButton>
				</ChampionsFilterRol>
			))}
		</ChampionsFilterRoles>
	);
};
