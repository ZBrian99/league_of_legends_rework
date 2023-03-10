import {
	ChamAbilitiesContainer,
	ChamAbilityHeader,
	ChamAbilityInfoContainer,
	ChampionAbilityContainer,
} from '../../styled-components';
import { ChampionAbilityInfo, ChampionAbilitySelector, ChampionAbilityVideo } from '..';
import { useChampionAbilities } from '../../hooks';

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
