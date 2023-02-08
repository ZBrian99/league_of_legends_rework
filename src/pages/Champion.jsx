import { useParams } from 'react-router-dom';
import { useChampions } from '../hooks';
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
								<ChamInfoContainer>
									<LargeRolContainer>
										<SimpleBoxContainer>
											<SimpleBoxImageContainer>
												<SimpleBoxImage src='../../src/assets/assassin.png' alt='rol' />
											</SimpleBoxImageContainer>
											<SimpleBoxTextContainer>
												<SimpleBoxText>Rol</SimpleBoxText>
												<SimpleBoxText variant>Assassin</SimpleBoxText>
											</SimpleBoxTextContainer>
										</SimpleBoxContainer>
										<SimpleBoxContainer>
											<SimpleBoxImageContainer>
												<SimpleBoxImage src='../../src/assets/assassin.png' alt='rol' />
											</SimpleBoxImageContainer>
											<SimpleBoxTextContainer>
												<SimpleBoxText>Rol</SimpleBoxText>
												<SimpleBoxText variant>Assassin</SimpleBoxText>
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
										<LoreText>
											Dentro de las oscuras vetas de Runaterra, la demonio Evelynn acecha a su siguiente
											víctima. Seduce a su presa con la apariencia voluptuosa de una mujer humana, pero una
											vez que alguien sucumbe ante sus encantos, Evelynn revela su verdadera forma. Es en ese
											momento somete a su víctima a un inimaginable tormento y se deleita con su dolor. Para
											el demonio, estos encuentros son amoríos inocentes. Para el resto de Runaterra, son
											historias macabras de lujuria que terminaron mal y atroces recordatorios del costo que
											tiene el deseo lascivo.
										</LoreText>
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
