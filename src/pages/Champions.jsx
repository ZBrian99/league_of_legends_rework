import { ChampionsHeader, ChampionsList} from "../components";
import { ChampionsContainer, ChampionsContainerBackground, Container } from "../styled-components";

export const Champions = () => {
	return (
		<>
			<ChampionsContainerBackground />
			<ChampionsHeader />

			<Container>
				<ChampionsContainer>
					<ChampionsList />
				</ChampionsContainer>
			</Container>
		</>
	);
};
