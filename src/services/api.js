
export const getChampions = async () => {
	const resp = await fetch('http://ddragon.leagueoflegends.com/cdn/12.23.1/data/es_AR/champion.json');
	const { data } = await resp.json();
	return data;
};

export const getChampionById = async (chamName) => {
	const resp = await fetch(
		`http://ddragon.leagueoflegends.com/cdn/12.23.1/data/es_AR/champion/${chamName}.json`
	);
	const { data } = await resp.json();
	return data;
};
