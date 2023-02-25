import { SimpleBoxContainer } from '../styled-components';
import { ChampionImageBox } from './ChampionBoxImage';
import { ChampionTextBox } from './ChampionBoxText';

export const ChampionBox = ({ src, alt, title, description, variant = false, reverse = false, none = false }) => {
	return (
		<SimpleBoxContainer variant={variant}>
			<ChampionImageBox none={none} reverse={reverse} src={src} alt={alt} />
			<ChampionTextBox title={title} description={description} />
		</SimpleBoxContainer>
	);
};
