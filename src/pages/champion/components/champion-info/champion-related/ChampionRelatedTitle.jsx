import { ChamRelatedTitle, ChamRelatedTopContainer } from '../../../styled-components/ChampionRelated.styles';

export const ChampionRelatedTitle = ({title}) => {
	return (
		<ChamRelatedTopContainer>
			<ChamRelatedTitle>{title}</ChamRelatedTitle>
		</ChamRelatedTopContainer>
	);
};
