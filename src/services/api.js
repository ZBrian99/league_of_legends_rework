
export const getChampions = async () => {
	const resp = await fetch('http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json');
	const { data } = await resp.json();
	return data;
};

export const getChampionById = async (chamName) => {
	const resp = await fetch(
		`http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion/${chamName}.json`
	);
	const { data } = await resp.json();
	return data;
};




// import axios from 'axios';

// const useApi = (url) => {
// 	const [data, setData] = useState(null);

// 	const fetchData = async () => {
// 		try {
// 			const response = await axios.get(url);
// 			setData(response.data);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	useEffect(() => {
// 		fetchData();
// 	}, []);

// 	return data; // returns the data from the API call as a state variable.
// };

// export default useApi;