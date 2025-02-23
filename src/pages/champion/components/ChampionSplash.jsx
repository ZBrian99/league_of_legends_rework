import { ChamSplash, ChamSplashContainer } from '../styled-components/Champion.styles';
import { useChampionSplash } from '../hooks/useChampionSplash';




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
