import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
`;
const amount = 30;
export const Regiones = () => {
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
			<div style={{ color: 'white' }}>Regiones</div>
			<GridContainer>
				{!isLoaded && (
					<div
						style={{
							color: 'white',
						}}
					>
						Cargando Imagenes...
					</div>
				)}
				<>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
					<img
						src='https://picsum.photos/200'
						style={{ display: isLoaded ? 'block' : 'none' }}
						onLoad={handleLoadVideo}
					/>
				</>
			</GridContainer>
		</>
	);
};
