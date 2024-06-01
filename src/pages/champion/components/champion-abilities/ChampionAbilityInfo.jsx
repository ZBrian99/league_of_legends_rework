import {
	ChamAbility,
	ChamAbilityDescription,
	ChamAbilityInfo,
	ChamAbilityName,
} from '../../styled-components/ChampionAbilities.styles';

export const ChampionAbilityInfo = ({ ability }) => {
	return (
		<ChamAbilityInfo>
			{ability && (
				<>
					<ChamAbility>{ability.ability}</ChamAbility>
					<ChamAbilityName>{ability.name}</ChamAbilityName>
					<ChamAbilityDescription>{ability.description}</ChamAbilityDescription>
				</>
			)}
		</ChamAbilityInfo>
	);
};