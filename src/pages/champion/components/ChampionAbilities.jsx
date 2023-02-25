import { useContext, useState } from 'react';
import {
	ChamAbilitiesContainer,
	ChamAbilityHeader,
	ChamAbilityInfoContainer,
	ChampionAbilityContainer,
} from '../styled-components';
import { ChampionContext } from '../Champion';
import { ChampionAbilityInfo, ChampionAbilitySelector, ChampionAbilityVideo } from './';

const abilities = ['Q', 'W', 'E', 'R'];

export const ChampionAbilities = () => {
	const { spells, passive, key, tags } = useContext(ChampionContext);

	const [ability, setAbility] = useState({
		ability: 'Passive',
		name: passive.name,
		description: passive.description.replace(/ *\<[^>]*\> */g, ' '),
		key: key,
		id: 0,
	});

	const handleClick = ({ currentTarget }, index) => {
		currentTarget.id === 'Passive'
			? setAbility({
					ability: currentTarget.id,
					name: passive.name,
					description: passive.description.replace(/ *\<[^>]*\> */g, ' '),
					key: key,
					id: 0,
			  })
			: setAbility(
					spells
						.filter((spell, i) => abilities[i] === currentTarget.id)
						.map((spell) => {
							return {
								ability: currentTarget.id,
								name: spell.name,
								description: spell.description.replace(/ *\<[^>]*\> */g, ' '),
								key: key,
								id: index + 1,
							};
						})[0]
			  );
	};

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
