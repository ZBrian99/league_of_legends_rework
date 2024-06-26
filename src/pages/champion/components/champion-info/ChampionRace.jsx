import { useContext } from 'react';
import { DataContext } from '../../../../context/DataContext';
import { RaceBoxContainer, SimpleBoxText } from '../../styled-components/Champion.styles';
import { ChampionContext } from '../../Champion';

export const ChampionRace = () => {
	const { extraChamInfo } = useContext(DataContext);
	const { id } = useContext(ChampionContext);
	const race = extraChamInfo.find((e) => e.id === id)?.race;
	return (
		<RaceBoxContainer>
			<SimpleBoxText>Race</SimpleBoxText>
			{race && <SimpleBoxText variant>{race}</SimpleBoxText>}
		</RaceBoxContainer>
	);
};
