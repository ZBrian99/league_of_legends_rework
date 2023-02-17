import { useParams } from 'react-router-dom';
import { useChampion } from '../../hooks';
import {
	ChamContainer,
	ChamHeader,
	ChamHeaderContainer,
	ChamIconBorder,
	ChamIconContainer,
	ChamIconFrame,
	ChamIconImage,
	ChamInfoContainer,
	ChamLargeLore,
	ChamLogoContainer,
	ChamLoreContainer,
	ChamName,
	ChamPhrase,
	ChampionContainer,
	ChamSeparator,
	ChamSplash,
	ChamTitle,
	LargeBoxContainer,
	LargeBoxImage,
	LargeRolContainer,
	LoreText,
	PhraseAutor,
	PhraseText,
	SimpleBoxContainer,
	SimpleBoxImage,
	SimpleBoxImageContainer,
	SimpleBoxText,
	SimpleBoxTextContainer,
} from '../../styled-components';
import { ChampionAbilities, ChampionOther, ChampionRelated, ChampionSkins } from './';

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
						.map(({ title, name, lore, tags, spells, passive, key, skins }) => (
							<ChampionContainer key={id}>
								<ChamHeader>
									<ChamHeaderContainer>
										<ChamName>{name}</ChamName>
										<ChamSeparator src='../../../src/assets/t1HeaderDivider.png' alt='Header Divider' />
										<ChamTitle>{title}</ChamTitle>
									</ChamHeaderContainer>
									<ChamSplash
										src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
									></ChamSplash>
								</ChamHeader>
								<ChamContainer>
									<ChamInfoContainer>
										<ChampionRelated />

										<ChamLoreContainer>
											<ChamPhrase>
												<ChamLogoContainer>
													<ChamIconContainer>
														<ChamIconBorder>
															<ChamIconImage
																src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${id}.png`}
																alt='champion image'
															/>
														</ChamIconBorder>
													</ChamIconContainer>
													<ChamIconFrame
														src='../../../src/assets/ChampionIconFrame.png'
														alt='champion border'
													/>
												</ChamLogoContainer>
												<PhraseText>
													“Human emotions can be more volatile than even the deepest magic.”
												</PhraseText>
												<PhraseAutor>~ {name}</PhraseAutor>
											</ChamPhrase>
											<ChamLargeLore
												image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
											>
												{/* <ChamLogoContainer>
													<ChamIconContainer>
														<ChamIconBorder>
															<ChamIconImage
																src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${id}.png`}
																alt='champion image'
															/>
														</ChamIconBorder>
													</ChamIconContainer>
													<ChamIconFrame
														src='../../../src/assets/ChampionIconFrame.png'
														alt='champion border'
													/>
												</ChamLogoContainer> */}

												<LoreText>{lore}</LoreText>
											</ChamLargeLore>
										</ChamLoreContainer>

										<LargeRolContainer>
											<SimpleBoxContainer>
												<SimpleBoxImageContainer>
													<SimpleBoxImage src={`../../../src/assets/${tags[0]}.png`} alt='rol' />
												</SimpleBoxImageContainer>
												<SimpleBoxTextContainer>
													<SimpleBoxText>Rol</SimpleBoxText>
													<SimpleBoxText variant>{tags[0]}</SimpleBoxText>
												</SimpleBoxTextContainer>
											</SimpleBoxContainer>
											{tags[1] ? (
												<SimpleBoxContainer>
													<SimpleBoxImageContainer>
														<SimpleBoxImage src={`../../../src/assets/${tags[1]}.png`} alt='rol' />
													</SimpleBoxImageContainer>
													<SimpleBoxTextContainer>
														<SimpleBoxText>Rol</SimpleBoxText>
														<SimpleBoxText variant>{tags[1]}</SimpleBoxText>
													</SimpleBoxTextContainer>
												</SimpleBoxContainer>
											) : (
												''
											)}
											<LargeBoxContainer>
												<LargeBoxImage src='../../../src/assets/runaterra.png' alt='region' />
												<SimpleBoxContainer variant>
													<SimpleBoxImageContainer reverse none>
														<SimpleBoxImage src='../../../src/assets/runaterra.png' alt='region' />
													</SimpleBoxImageContainer>
													<SimpleBoxTextContainer>
														<SimpleBoxText>Region</SimpleBoxText>
														<SimpleBoxText variant>Runaterra</SimpleBoxText>
													</SimpleBoxTextContainer>
												</SimpleBoxContainer>
											</LargeBoxContainer>
										</LargeRolContainer>
									</ChamInfoContainer>
									{/* <div>difficulty</div> */}
									{/* <div>attack, defense, magic</div> */}
									{/* <div>recurso</div> */}
									<ChampionAbilities spells={spells} passive={passive} keyNumber={key} />
									<ChampionSkins skins={skins} chamName={name} chamId={id} />
									<ChampionOther />
								</ChamContainer>
							</ChampionContainer>
						))}
				</>
			)}
		</>
	);
};
