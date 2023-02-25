import { ChamAbilityVideo, ChamAbilityVideoContainer } from "../../../styled-components";

export const ChampionAbilityVideo = ({ ability }) => {
	return (
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
	);
};