import { useContext, useState } from 'react';
import { ChamHeaderContainer, ChamName, ChamSeparator, ChamTitle } from '../styled-components';
import { ChampionContext } from '../Champion';

export const ChampionHeader = () => {
	const { name, title } = useContext(ChampionContext);
	const [visible, setVisible] = useState(false);
	const handleLoadImage = () => {
		setVisible(true);
	};
	return (
		<ChamHeaderContainer visible={visible}>
			<ChamName>{name}</ChamName>
			<ChamSeparator
				src={`${baseUrl}assets/t1HeaderDivider.png`}
				alt='Header Divider'
				onLoad={handleLoadImage}
			/>
			<ChamTitle>{title}</ChamTitle>
		</ChamHeaderContainer>
	);
};
