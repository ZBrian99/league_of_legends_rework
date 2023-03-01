export const getChampions = async () => {
	const resp = await fetch('https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json');
	const { data } = await resp.json();
	return data;
};

export const getChampionById = async (id) => {
	const resp = await fetch(`https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion/${id}.json`);
	const { data } = await resp.json();
	return data;
};
