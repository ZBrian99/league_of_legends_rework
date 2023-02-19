import { useEffect } from 'react';
import { useFetcher, useParams } from 'react-router-dom';
import { useChampion, useChampionsExtra } from '../../hooks';
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
	ChamLeftContainer,
	ChamLogoContainer,
	ChamMidContainer,
	ChamName,
	ChamPhrase,
	ChampionContainer,
	ChamRightContainer,
	ChamSeparator,
	ChamSplash,
	ChamTitle,
	LargeBoxContainer,
	LargeBoxImage,
	Loader,
	LoreText,
	PhraseAutor,
	PhraseText,
	SimpleBoxContainer,
	SimpleBoxImage,
	SimpleBoxImageContainer,
	SimpleBoxText,
	SimpleBoxTextContainer,
	SimpleRolContainer,
} from '../../styled-components';
import { ChampionAbilities, ChampionOther, ChampionRelated, ChampionSkins } from './';

export const Champion = () => {
	const { id } = useParams();
	const { champion, isLoading } = useChampion(id);
	const { championsExtra, isLoading: isLoadingChampionsExtra } = useChampionsExtra();
	if (!isLoadingChampionsExtra) {
		// console.log(championsExtra[Math.floor(Math.random() * championsExtra.length)]);
	}
	return (
		<>
			{isLoading ? (
				<Loader />
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
										<ChamLeftContainer>
											<SimpleRolContainer>
												<SimpleBoxContainer>
													<SimpleBoxTextContainer>
														<SimpleBoxText>Race</SimpleBoxText>
														<SimpleBoxText variant>
															{!isLoadingChampionsExtra && championsExtra.find((e) => e.id === id).race}
														</SimpleBoxText>
													</SimpleBoxTextContainer>
												</SimpleBoxContainer>
											</SimpleRolContainer>
											<ChampionRelated />
										</ChamLeftContainer>

										<ChamMidContainer>
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
										</ChamMidContainer>

										<ChamRightContainer>
											<SimpleRolContainer>
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
											</SimpleRolContainer>
											{!isLoadingChampionsExtra && (
												<LargeBoxContainer>
													<LargeBoxImage
														src={`../../../src/assets/${championsExtra
															.find((e) => e.id === id)
															.region.split(' ')
															.join('_')}_emblem.png`}
														alt='region'
													/>
													<SimpleBoxContainer variant>
														<SimpleBoxImageContainer reverse>
															<SimpleBoxImage
																src={`../../../src/assets/${championsExtra
																	.find((e) => e.id === id)
																	.region.split(' ')
																	.join('_')}_crest_icon.png`}
																alt='region'
															/>
														</SimpleBoxImageContainer>
														<SimpleBoxTextContainer>
															<SimpleBoxText>Region</SimpleBoxText>
															<SimpleBoxText variant>
																{!isLoadingChampionsExtra && championsExtra.find((e) => e.id === id).region}
															</SimpleBoxText>
														</SimpleBoxTextContainer>
													</SimpleBoxContainer>
												</LargeBoxContainer>
											)}
										</ChamRightContainer>
									</ChamInfoContainer>
									{/* <div>difficulty</div> */}
									{/* <div>attack, defense, magic</div> */}
									{/* <div>recurso</div> */}
                  <ChampionAbilities spells={spells} passive={passive} keyNumber={key} tag={tags[0]} />
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
