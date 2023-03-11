import { useChampionsFilterRoleSelector } from '../../hooks';
import { ChampionsFilterRolesContainer } from '../../styled-components';
import { ChampionsFilterRolesMobile, ChampionsFilterRolesSelector } from './champion-role';

export const ChampionsFilterRoleSelector = ({ handleRol, searchRole }) => {
	const [menuRef, handleRoleVisibility, roleVisibility, roles, idRoles, handleRolAndRoleVisibility] =
		useChampionsFilterRoleSelector(handleRol);

	return (
		<ChampionsFilterRolesContainer ref={menuRef}>
			<ChampionsFilterRolesMobile handleRoleVisibility={handleRoleVisibility} />

			<ChampionsFilterRolesSelector
				roleVisibility={roleVisibility}
				roles={roles}
				idRoles={idRoles}
				searchRole={searchRole}
				handleRolAndRoleVisibility={handleRolAndRoleVisibility}
			/>
		</ChampionsFilterRolesContainer>
	);
};
