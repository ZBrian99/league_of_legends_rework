import { SimpleBoxImage, SimpleBoxImageContainer } from "../../../styled-components/Champion.styles";

export const ChampionImageBox = ({ src, alt, reverse = false, none=false }) => {
	return (
		<SimpleBoxImageContainer none={none} reverse={reverse}>
			<SimpleBoxImage src={src} alt={alt} />
		</SimpleBoxImageContainer>
	);
};
