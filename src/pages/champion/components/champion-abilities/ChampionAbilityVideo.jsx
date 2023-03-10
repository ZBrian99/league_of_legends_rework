import { useChampionAbilityVideo } from '../../hooks';
import { ChamAbilityVideo, ChamAbilityVideoContainer } from '../../styled-components';

export const ChampionAbilityVideo = ({ ability }) => {
	const { src } = useChampionAbilityVideo(ability);

	return (
		<ChamAbilityVideoContainer>
			<ChamAbilityVideo poster={`/league-of-legends/assets/no-ability.jpg`} src={src} muted autoPlay loop />
		</ChamAbilityVideoContainer>
	);
};
