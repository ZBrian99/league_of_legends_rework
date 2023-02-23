import { useContext } from "react";
import { ChamSplash, ChamSplashContainer } from "../../../styled-components";
import { ChampionContext } from "../Champion";

export const ChampionSplash = () => {
	const { id } = useContext(ChampionContext);

	return (
		<ChamSplashContainer>
			<ChamSplash
				src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
				alt='champion splash'
			></ChamSplash>
		</ChamSplashContainer>
	);
};
