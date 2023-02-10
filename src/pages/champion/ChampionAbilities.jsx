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

export const ChampionAbilities = ({ spells, passive, keyNumber }) => {
  const [ability, setAbility] = useState();

	const handleClick = ({ currentTarget }) => {
		currentTarget.id === 'passive'
			? setAbility({
					ability: 'Passive',
					name: passive.name,
					description: passive.description,
					key: keyNumber,
			  })
			: setAbility(
					spells
						.filter((spell) => spell.id === currentTarget.id)
						.map((spell) => {
							return {
								ability: spell.id.slice(-1),
								name: spell.name,
								description: spell.description,
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
							id={'passive'}
							keyNumber={keyNumber}
              onClick={handleClick}
						>
							<ChamAbilityImage
								src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/${passive.image.full}`}
								alt='passive'
							/>
							{/* Passive */}
						</ChamAbilityButton>
						{spells.map(({ id, name, image }) => (
							<ChamAbilityButton key={id} id={id} keyNumber={keyNumber} onClick={handleClick}>
								<ChamAbilityImage
									src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${image.full}`}
									alt={image.full}
								/>
								{/* {id.slice(-1)} */}
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
