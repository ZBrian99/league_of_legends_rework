import { ChamSplash, ChamSplashContainer, ChamSplashVideo } from '../styled-components';
import { useChampionSplash } from '../hooks';

export const ChampionSplash = () => {
  const { isVideo, Url } = useChampionSplash();
	return (
		<ChamSplashContainer>
			{/* {isVideo ? ( */}
				{/* <ChamSplashVideo src={Url} muted autoPlay loop /> */}
			{/* ) : ( */}
				<ChamSplash src={Url} alt='champion splash'></ChamSplash>
			{/* )} */}
		</ChamSplashContainer>
	);
};
