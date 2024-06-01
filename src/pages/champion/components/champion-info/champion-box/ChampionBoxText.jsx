import { SimpleBoxText, SimpleBoxTextContainer } from "../../../styled-components/Champion.styles";

export const ChampionTextBox = ({ title, description }) => {
	return (
		<SimpleBoxTextContainer>
			<SimpleBoxText>{title}</SimpleBoxText>
			<SimpleBoxText variant>{description}</SimpleBoxText>
		</SimpleBoxTextContainer>
	);
};
