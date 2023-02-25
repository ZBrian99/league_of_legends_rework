import {
	ChamAbilityButton,
	ChamAbilityImage,
	ChamAbilityLine,
	ChamAbilityLineCircle,
} from '../../styled-components';

export const ChampionAbilityButton = ({ id, onClick, variant, src, alt }) => {

	return (
		<ChamAbilityButton id={id} onClick={onClick} variant={variant}>
			<ChamAbilityImage src={src} alt={alt} />
			<ChamAbilityLine>
				<ChamAbilityLineCircle />
			</ChamAbilityLine>
		</ChamAbilityButton>
	);
};
