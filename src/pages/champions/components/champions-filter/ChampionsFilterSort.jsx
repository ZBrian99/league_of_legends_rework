import {
	ChampionsFilterSortContainer,
	ChampionsFilterSortImage,
	ChampionsFilterSortText,
} from '../../styled-components/ChampionsFilter.styles';

export const ChampionsFilterSort = ({ handleSort, searchSort }) => {
	return (
		<ChampionsFilterSortContainer onClick={handleSort} variant={searchSort}>
			<ChampionsFilterSortImage src='/assets/arrowL.png' alt='sort icon' />
			<ChampionsFilterSortText>A-Z</ChampionsFilterSortText>
		</ChampionsFilterSortContainer>
	);
};
