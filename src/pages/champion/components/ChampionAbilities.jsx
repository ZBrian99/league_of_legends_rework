import { useContext, useState } from 'react';
import {
	ChamAbilitiesContainer,
	ChamAbilitiesImageContainer,
	ChamAbility,
	ChamAbilityButton,
	ChamAbilityCircle,
	ChamAbilityDescription,
	ChamAbilityHeader,
	ChamAbilityImage,
	ChamAbilityInfo,
	ChamAbilityInfoContainer,
	ChamAbilityLine,
	ChamAbilityLineCircle,
	ChamAbilityName,
	ChamAbilityUpLine,
	ChamAbilityVideo,
	ChamAbilityVideoContainer,
  ChampionAbilityContainer,
} from '../../../styled-components';
import { ChampionContext } from '../Champion';

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
					<ChamAbilitiesImageContainer>
						<ChamAbilityButton
							id={'Passive'}
							keyNumber={key}
							onClick={handleClick}
							variant={'Passive'.includes(ability.ability) ?? variant}
						>
							<ChamAbilityImage
								src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/${passive.image.full}`}
								alt={passive.name}
							/>
							<ChamAbilityLine>
								<ChamAbilityLineCircle></ChamAbilityLineCircle>
							</ChamAbilityLine>
						</ChamAbilityButton>
						{spells.map(({ id, name, image }, i) => (
							<ChamAbilityButton
								key={id}
								id={abilities[i]}
								keyNumber={key}
								onClick={(e) => handleClick(e, i)}
								variant={abilities[i].includes(ability.ability) ?? variant}
							>
								<ChamAbilityImage
									src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${image.full}`}
									alt={name}
								/>
								<ChamAbilityLine>
									<ChamAbilityLineCircle></ChamAbilityLineCircle>
								</ChamAbilityLine>
							</ChamAbilityButton>
						))}

						<ChamAbilityCircle focus={ability.id}>
							<ChamAbilityLineCircle variant></ChamAbilityLineCircle>
							<ChamAbilityUpLine></ChamAbilityUpLine>
						</ChamAbilityCircle>
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
					poster={`${baseUrl}assets/no-ability.jpg`}
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
