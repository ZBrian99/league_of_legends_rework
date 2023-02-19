import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import './styles.css';
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 1rem;
`;
const amount = 99;
export const Universo = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [totalLoaded, setTotalLoaded] = useState(0);

	const handleLoadVideo = () => {
		setTotalLoaded((totalLoaded) => totalLoaded + 1);
	};
	useEffect(() => {
		if (totalLoaded === amount) {
			setIsLoaded(true);
		}

		console.log(totalLoaded);
	}, [totalLoaded]);
	console.log(isLoaded);

	return (
		<>
			<GridContainer>
				{!isLoaded && (
					// <div
					// 	style={{
					// 		color: 'white',
					// 	}}
					// >
					// 	Cargando video...
					// </div>

					<span class='loader'></span>
				)}
				<>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
					<video
						src='https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm'
						muted
						autoPlay
						loop
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoadedData={handleLoadVideo}
					/>
				</>
			</GridContainer>
		</>
	);
};
