import { useChampionsFilterRoleSelector } from '../../hooks/useChampionsFilterRoleSelector';
import { ChampionsFilterRolesContainer } from '../../styled-components/ChampionsFilter.styles';
import { ChampionsFilterRolesMobile } from './champion-role/ChampionsFilterRolesMobile';
import { ChampionsFilterRolesSelector } from './champion-role/ChampionsFilterRolesSelector';

export const ChampionsFilterRoleSelector = ({ handleRol }) => {
	const [menuRef, handleRoleVisibility, roleVisibility, roles, idRoles, handleRolAndRoleVisibility] =
		useChampionsFilterRoleSelector(handleRol);
	return (
		<ChampionsFilterRolesContainer ref={menuRef}>
			<ChampionsFilterRolesMobile handleRoleVisibility={handleRoleVisibility} />

			<ChampionsFilterRolesSelector
				roleVisibility={roleVisibility}
				roles={roles}
				idRoles={idRoles}
				handleRolAndRoleVisibility={handleRolAndRoleVisibility}
			/>
		</ChampionsFilterRolesContainer>
	);
};
