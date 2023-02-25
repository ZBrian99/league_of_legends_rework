import { useContext } from 'react';
import { ChamAbilitiesImageContainer } from '../styled-components';
import { ChampionContext } from '../Champion';
import { ChampionAbilityButton } from './ChampionAbilityButton';
import { ChampionAbilitySelectorCircle } from './ChampionAbilitySelectorCircle';

export const ChampionAbilitySelector = ({ fn, ability, abilities }) => {
	const { spells, passive } = useContext(ChampionContext);

	return (
		<ChamAbilitiesImageContainer>
			<ChampionAbilityButton
				id={'Passive'}
				onClick={fn}
				variant={'Passive'.includes(ability.ability)}
				src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/${passive.image.full}`}
				alt={passive.name}
			/>
			{spells.map(({ id, name, image }, i) => (
				<ChampionAbilityButton
					key={id}
					id={abilities[i]}
					onClick={(e) => fn(e, i)}
					variant={abilities[i].includes(ability.ability)}
					src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${image.full}`}
					alt={name}
				/>
			))}
			<ChampionAbilitySelectorCircle id={ability.id} />
		</ChamAbilitiesImageContainer>
	);
};
