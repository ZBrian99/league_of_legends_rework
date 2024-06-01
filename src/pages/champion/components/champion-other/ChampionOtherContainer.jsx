import { ChampionOtherCard } from './ChampionOtherCard';
import { useRandomChampion } from '../../hooks/useRandomChampion';
import { OtherChampionContainer } from '../../styled-components/ChampionOther.styles';

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
