import { ChamAbilityCircle, ChamAbilityLineCircle } from '../../styled-components/ChampionAbilities.styles';

export const ChampionAbilitySelectorCircle = ({ id }) => {
	return (
		<ChamAbilityCircle focus={id}>
			<ChamAbilityLineCircle variant />
		</ChamAbilityCircle>
	);
};
