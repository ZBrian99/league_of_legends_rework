import { useParams } from 'react-router-dom';
import { useChampions } from '../hooks';
import {
	ChamHeader,
	ChamHeaderContainer,
	ChamIconContainer,
	ChamIconFrame,
	ChamIconImage,
	ChamName,
	ChampionContainer,
	ChamSeparator,
	ChamSplash,
	ChamTitle,
	LoreContainer,
	RolContainer,
	RolImage,
	RolImageContainer,
	RolText,
	RolTextContainer,
} from '../styled-components';

export const Champion = () => {
	const { champions, isLoading } = useChampions();
	const { id } = useParams();

	return (
		<>
			{isLoading ? (
				<div>Cargando...</div>
			) : (
				<>
					{champions
						.filter((e) => e.id === id)
						.map(({ title, name }) => (
							<ChampionContainer key={id}>
								<ChamHeader>
									<ChamHeaderContainer>
										<ChamName>{name}</ChamName>
										<ChamSeparator src='../../src/assets/t1HeaderDivider.png' alt='Header Divider' />
										<ChamTitle>{title}</ChamTitle>
									</ChamHeaderContainer>
									<ChamSplash
										src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
									></ChamSplash>
								</ChamHeader>
								<div>
									<LoreContainer
										image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
									>
										<ChamIconContainer>
											<ChamIconImage
												src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${id}.png`}
												alt='champion image'
											/>
										</ChamIconContainer>
										<ChamIconFrame src='../../src/assets/ChampionIconFrame.png' alt='champion border' />
										<p>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto porro vel unde
											temporibus placeat tempora, blanditiis molestiae voluptatem eum sint esse eveniet eius
											maiores similique neque ab adipisci. Officia, numquam?
										</p>
									</LoreContainer>
									<RolContainer>
										<RolImageContainer>
											<RolImage src='../../src/assets/assassin.png' alt='rol' />
										</RolImageContainer>
										<RolTextContainer>
											<RolText>Rol</RolText>
											<RolText rol>Assassin</RolText>
										</RolTextContainer>
									</RolContainer>
									<div>
										<img src='' alt='region' />
										<div>
											<h5>Region</h5>
											<h6>"region"</h6>
											<img src='' alt='region' />
										</div>
									</div>
									{/* <div>difficulty</div> */}
									{/* <div>attack, defense, magic</div> */}
									{/* <div>recurso</div> */}
								</div>
							</ChampionContainer>
						))}
				</>
			)}
		</>
	);
};
