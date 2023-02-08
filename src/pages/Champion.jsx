import { useParams } from 'react-router-dom';
import {useChampion } from '../hooks';
import {
	ChamHeader,
	ChamHeaderContainer,
	ChamIconContainer,
	ChamIconFrame,
	ChamIconImage,
	ChamInfoContainer,
	ChamName,
	ChampionContainer,
	ChamSeparator,
	ChamSplash,
	ChamTitle,
	LargeBoxContainer,
	LargeBoxImage,
	LargeRolContainer,
	LoreContainer,
	LoreText,
	SimpleBoxContainer,
	SimpleBoxImage,
	SimpleBoxImageContainer,
	SimpleBoxText,
	SimpleBoxTextContainer,
} from '../styled-components';

export const Champion = () => {
  const { id } = useParams();
	const { champion, isLoading } = useChampion(id);
  

	return (
		<>
			{isLoading ? (
				<div>Cargando...</div>
			) : (
				<>
					{champion
						.filter((e) => e.id === id)
						.map(({ title, name, lore, tags }) => (
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
								<ChamInfoContainer>
									<LargeRolContainer>
										<SimpleBoxContainer>
											<SimpleBoxImageContainer>
												<SimpleBoxImage src='../../src/assets/assassin.png' alt='rol' />
											</SimpleBoxImageContainer>
											<SimpleBoxTextContainer>
												<SimpleBoxText>Rol</SimpleBoxText>
												<SimpleBoxText variant>{tags[0]}</SimpleBoxText>
											</SimpleBoxTextContainer>
										</SimpleBoxContainer>
										<SimpleBoxContainer>
											<SimpleBoxImageContainer>
												<SimpleBoxImage src='../../src/assets/assassin.png' alt='rol' />
											</SimpleBoxImageContainer>
											<SimpleBoxTextContainer>
												<SimpleBoxText>Rol</SimpleBoxText>
												<SimpleBoxText variant>{tags[1]}</SimpleBoxText>
											</SimpleBoxTextContainer>
										</SimpleBoxContainer>
									</LargeRolContainer>
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
										<LoreText>{lore}</LoreText>
									</LoreContainer>
									<LargeBoxContainer>
										<LargeBoxImage src='../../src/assets/runaterra.png' alt='region' />
										<SimpleBoxContainer variant>
											<SimpleBoxImageContainer reverse none>
												<SimpleBoxImage src='../../src/assets/runaterra.png' alt='region' />
											</SimpleBoxImageContainer>
											<SimpleBoxTextContainer>
												<SimpleBoxText>Region</SimpleBoxText>
												<SimpleBoxText variant>Runaterra</SimpleBoxText>
											</SimpleBoxTextContainer>
										</SimpleBoxContainer>
									</LargeBoxContainer>
									{/* <div>difficulty</div> */}
									{/* <div>attack, defense, magic</div> */}
									{/* <div>recurso</div> */}
								</ChamInfoContainer>
							</ChampionContainer>
						))}
				</>
			)}
		</>
	);
};
