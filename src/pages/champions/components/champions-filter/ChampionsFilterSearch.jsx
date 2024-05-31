import {
	ChampionsFilterInput,
	ChampionsFilterInputContainer,
	ChampionsFilterInputIcon,
} from '../../styled-components';

export const ChampionsFilterSearch = ({ searchName, handleSearch }) => {
	return (
		<ChampionsFilterInputContainer>
			<ChampionsFilterInputIcon src='/assets/header_icon.png' alt='search icon' />
			<ChampionsFilterInput
				type='text'
				placeholder='Find a Champion'
				value={searchName}
				onChange={handleSearch}
			/>
		</ChampionsFilterInputContainer>
	);
};
