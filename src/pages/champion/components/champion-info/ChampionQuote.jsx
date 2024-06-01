import { useContext } from 'react';
import { DataContext } from '../../../../context/DataContext';
import { ChampionContext } from '../../Champion';

import { ChamQuote, QuoteAutor, QuoteText } from '../../styled-components/Champion.styles';
import { ChampionLogo } from './ChampionLogo';

export const ChampionQuote = () => {
	const { extraChamInfo } = useContext(DataContext);
	const { id, name } = useContext(ChampionContext);

	return (
		<ChamQuote>
			<ChampionLogo id={id} />
			<QuoteText>“{extraChamInfo.find((e) => e.id === id)?.quote}”</QuoteText>
			<QuoteAutor>~ {name}</QuoteAutor>
		</ChamQuote>
	);
};
