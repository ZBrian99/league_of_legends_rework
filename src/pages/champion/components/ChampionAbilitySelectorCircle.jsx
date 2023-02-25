import { ChamAbilityCircle, ChamAbilityLineCircle, ChamAbilityUpLine } from "../../../styled-components";

export const ChampionAbilitySelectorCircle = ({ id }) => {
	return (
		<ChamAbilityCircle focus={id}>
			<ChamAbilityLineCircle variant />
			<ChamAbilityUpLine />
		</ChamAbilityCircle>
	);
};
