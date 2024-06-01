import {
	ChamAbilitiesContainer,
	ChamAbilityHeader,
	ChamAbilityInfoContainer,
	ChampionAbilityContainer,
} from '../../styled-components/ChampionAbilities.styles';
import { useChampionAbilities } from '../../hooks/useChampionAbilities';

import { ChampionAbilityInfo } from './ChampionAbilityInfo';
import { ChampionAbilitySelector } from './ChampionAbilitySelector';
import { ChampionAbilityVideo } from './ChampionAbilityVideo';

export const ChampionAbilities = () => {
	const { tags, handleClick, ability, abilities } = useChampionAbilities();

	return (
		<ChampionAbilityContainer tag={tags[0]}>
			<ChamAbilityInfoContainer>
				<ChamAbilitiesContainer>
					<ChamAbilityHeader>ABILITIES</ChamAbilityHeader>
					<ChampionAbilitySelector fn={handleClick} ability={ability} abilities={abilities} />
				</ChamAbilitiesContainer>

				<ChampionAbilityInfo ability={ability} />
			</ChamAbilityInfoContainer>

			<ChampionAbilityVideo ability={ability} />
		</ChampionAbilityContainer>
	);
};
