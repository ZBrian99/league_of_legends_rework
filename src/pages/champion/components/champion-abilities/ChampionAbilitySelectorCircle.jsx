import { ChamAbilityCircle, ChamAbilityLineCircle } from '../../styled-components';

export const ChampionAbilitySelectorCircle = ({ id }) => {
	return (
		<ChamAbilityCircle focus={id}>
			<ChamAbilityLineCircle variant />
		</ChamAbilityCircle>
	);
};
