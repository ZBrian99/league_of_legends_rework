import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useChampions } from '../hooks';

const ChamSplash = styled.img`
	width: 100%;
	height: auto;
`;

const ChampionContainer = styled.div`
	min-height: 100vh;
`;

export const Champion = () => {
	const { champions, isLoading} = useChampions();
  const { id } = useParams();
  const [chamData, setChamData] = useState([])
  useEffect(() => {
    if (!isLoading) {
      setChamData(champions.filter((e) => e.id === id))
      console.log(
			champions.filter((e) => e.id===id)
      )
      console.log(chamData);
		}
	}, [champions]);
  
	return (
		<ChampionContainer>
				
      <ChamSplash src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}></ChamSplash>
      <div>
        <h2></h2>
        <img src="" alt="" />
        <p></p>
      </div>
		</ChampionContainer>
	);
};
