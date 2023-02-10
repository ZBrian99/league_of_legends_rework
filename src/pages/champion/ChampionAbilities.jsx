import { useState } from 'react';
import {
	ChamAbilitiesContainer,
	ChamAbilitiesImageContainer,
	ChamAbility,
	ChamAbilityButton,
	ChamAbilityDescription,
	ChamAbilityHeader,
	ChamAbilityImage,
	ChamAbilityInfo,
	ChamAbilityInfoContainer,
	ChamAbilityName,
	ChamAbilityVideo,
	ChamAbilityVideoContainer,
	ChampionAbilityContainer,
} from '../../styled-components';

const abilities = ['Q', 'W', 'E', 'R'];

export const ChampionAbilities = ({ spells, passive, keyNumber }) => {
	const [ability, setAbility] = useState({
		ability: 'Passive',
		name: passive.name,
		description: passive.description.replace(/ *\<[^>]*\> */g, ' '),
		key: keyNumber,
	});

	const handleClick = ({ currentTarget }) => {
		currentTarget.id === 'Passive'
			? setAbility({
					ability: currentTarget.id,
					name: passive.name,
					description: passive.description.replace(/ *\<[^>]*\> */g, ' '),
					key: keyNumber,
			  })
			: setAbility(
					spells
						.filter((spell, i) => abilities[i] === currentTarget.id)
						.map((spell) => {
							return {
								ability: currentTarget.id,
								name: spell.name,
								description: spell.description.replace(/ *\<[^>]*\> */g, ' '),
								key: keyNumber,
							};
						})[0]
			  );
	};
	return (
		<ChampionAbilityContainer>
			<ChamAbilityInfoContainer>
				<ChamAbilitiesContainer>
					<ChamAbilityHeader>Abilities</ChamAbilityHeader>
					<ChamAbilitiesImageContainer>
						<ChamAbilityButton
							id={'Passive'}
							keyNumber={keyNumber}
							onClick={handleClick}
							variant={'Passive'.includes(ability.ability) ?? variant}
						>
							<ChamAbilityImage
								src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/${passive.image.full}`}
								alt={passive.name}
							/>
						</ChamAbilityButton>
						{spells.map(({ id, name, image }, i) => (
							<ChamAbilityButton
								key={id}
								id={abilities[i]}
								keyNumber={keyNumber}
								onClick={handleClick}
								variant={abilities[i].includes(ability.ability) ?? variant}
							>
								<ChamAbilityImage
									src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${image.full}`}
									alt={name}
								/>
							</ChamAbilityButton>
						))}
					</ChamAbilitiesImageContainer>
				</ChamAbilitiesContainer>
				<ChamAbilityInfo>
					{ability ? (
						<>
							<ChamAbility>{ability.ability}</ChamAbility>
							<ChamAbilityName>{ability.name}</ChamAbilityName>
							<ChamAbilityDescription>{ability.description}</ChamAbilityDescription>
						</>
					) : (
						''
					)}
				</ChamAbilityInfo>
			</ChamAbilityInfoContainer>
			<ChamAbilityVideoContainer>
				<ChamAbilityVideo
					poster={'../../../src/assets/preVideo.png'}
					muted
					autoPlay
					loop
					src={
						ability
							? ability.ability.includes('Passive')
								? `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${ability.key.padStart(
										4,
										'0'
								  )}/ability_${ability.key.padStart(4, '0')}_P1.webm`
								: `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${ability.key.padStart(
										4,
										'0'
								  )}/ability_${ability.key.padStart(4, '0')}_${ability.ability}1.webm`
							: ''
					}
				/>
			</ChamAbilityVideoContainer>
		</ChampionAbilityContainer>
	);
};
