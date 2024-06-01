import {
	ChamAbilityButton,
	ChamAbilityImage,
	ChamAbilityImageContainer,
	ChamAbilityLine,
	ChamAbilityLineCircle,
} from '../../styled-components/ChampionAbilities.styles';

export const ChampionAbilityButton = ({ id, onClick, variant, src, alt }) => {
	return (
		<ChamAbilityButton id={id} onClick={onClick} variant={variant}>
			<ChamAbilityImageContainer>
				<ChamAbilityImage src={src} alt={alt} />
			</ChamAbilityImageContainer>
			<ChamAbilityLine>
				<ChamAbilityLineCircle />
			</ChamAbilityLine>
		</ChamAbilityButton>
	);
};
