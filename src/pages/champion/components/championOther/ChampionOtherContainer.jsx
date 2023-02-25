import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChampionOtherCard } from '..';
import { DataContext } from '../../../../context';
import { OtherChampionContainer } from '../../styled-components';

const generateRandomNumbers = (array, index) => {
	const randomNum = [];
	do {
		randomNum[1] = Math.floor(Math.random() * array.length);
	} while (randomNum[1] === index);

	randomNum[2] = randomNum[1] + 10;
	if (randomNum[2] >= array.length) {
		randomNum[2] -= array.length;
	}
	randomNum[0] = randomNum[1] - 10;
	if (randomNum[0] < 0) {
		randomNum[0] += array.length;
	}

	return randomNum;
};

export const ChampionOtherContainer = () => {
	const [random, setRandom] = useState(null);
	const { extraChamInfo } = useContext(DataContext);
	const { id } = useParams();

	useEffect(() => {
		const chamNum = extraChamInfo.findIndex((e) => e.id === id);
		setRandom(generateRandomNumbers(extraChamInfo, chamNum));
	}, [extraChamInfo, id]);

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
