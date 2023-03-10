import { ChampionOtherCard } from '..';
import { useRandomChampion } from '../../hooks';
import { OtherChampionContainer } from '../../styled-components';

export const ChampionOtherContainer = () => {
	const { random, extraChamInfo } = useRandomChampion();
	return (
		<OtherChampionContainer>
			{!!random && (
				<>
					{random.map((num) => (
						<ChampionOtherCard key={extraChamInfo[num].id} num={num} />
					))}
				</>
			)}
		</OtherChampionContainer>
	);
};
