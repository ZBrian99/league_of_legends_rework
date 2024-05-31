import { useChampionAbilityVideo } from '../../hooks/useChampionAbilityVideo';
import { ChamAbilityVideo, ChamAbilityVideoContainer } from '../../styled-components';

export const ChampionAbilityVideo = ({ ability }) => {
	const { src } = useChampionAbilityVideo(ability);

	return (
		<ChamAbilityVideoContainer>
			<ChamAbilityVideo poster={`/assets/no-ability.jpg`} src={src} muted autoPlay loop />
		</ChamAbilityVideoContainer>
	);
};
