import { useContext } from 'react';
import { ChampionContext } from '../../../Champion';
import { SimpleRolContainer } from '../../../styled-components';
import { ChampionBox } from './ChampionBox';

export const ChampionBoxRol = () => {
	const { tags } = useContext(ChampionContext);

	return (
		<SimpleRolContainer>
			<ChampionBox src={`${baseUrl}assets/${tags[0]}.png`} alt='rol' title='rol' description={tags[0]} />
			{tags[1] && (
				<ChampionBox src={`${baseUrl}assets/${tags[1]}.png`} alt='rol' title='rol' description={tags[1]} />
			)}
		</SimpleRolContainer>
	);
};
