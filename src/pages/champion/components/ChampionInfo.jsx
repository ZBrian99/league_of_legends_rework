import { useContext } from 'react';
import { DataContext } from '../../../context';
import {
	ChamIconBorder,
	ChamIconContainer,
	ChamIconFrame,
	ChamIconImage,
	ChamInfoContainer,
	ChamLargeLore,
	ChamLeftContainer,
	ChamLogoContainer,
	ChamMidContainer,
	ChamQuote,
	ChamRightContainer,
	LargeBoxContainer,
	LargeBoxImage,
	LoreText,
	QuoteAutor,
	QuoteText,
	RaceBoxContainer,
	SimpleBoxContainer,
	SimpleBoxImage,
	SimpleBoxImageContainer,
	SimpleBoxText,
	SimpleBoxTextContainer,
	SimpleRolContainer,
} from '../../../styled-components';
import { ChampionContext } from '../Champion';
import { ChampionRace } from './ChampionRace';
import { ChampionRelated } from './ChampionRelated';

export const ChampionInfo = () => {
	const { extraChamInfo } = useContext(DataContext);
	const { id, name, lore, tags } = useContext(ChampionContext);

	return (
		<ChamInfoContainer>
			<ChamLeftContainer>
				<ChampionRace />
				<ChampionRelated />
			</ChamLeftContainer>

			<ChamMidContainer>
				<ChamQuote>
					<ChamLogoContainer>
						<ChamIconContainer>
							<ChamIconBorder>
								<ChamIconImage
									src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${id}.png`}
									alt='champion image'
								/>
							</ChamIconBorder>
						</ChamIconContainer>
						<ChamIconFrame src={`${baseUrl}assets/ChampionIconFrame.png`} alt='champion border' />
					</ChamLogoContainer>
					<QuoteText>“{extraChamInfo.find((e) => e.id === id).quote}”</QuoteText>
					<QuoteAutor>~ {name}</QuoteAutor>
				</ChamQuote>
				<ChamLargeLore image={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}>
					<LoreText>{lore}</LoreText>
				</ChamLargeLore>
			</ChamMidContainer>

			<ChamRightContainer>
				<SimpleRolContainer>
					<SimpleBoxContainer>
						<SimpleBoxImageContainer>
							<SimpleBoxImage src={`${baseUrl}assets/${tags[0]}.png`} alt='rol' />
						</SimpleBoxImageContainer>
						<SimpleBoxTextContainer>
							<SimpleBoxText>Rol</SimpleBoxText>
							<SimpleBoxText variant>{tags[0]}</SimpleBoxText>
						</SimpleBoxTextContainer>
					</SimpleBoxContainer>
					{tags[1] ? (
						<SimpleBoxContainer>
							<SimpleBoxImageContainer>
								<SimpleBoxImage src={`${baseUrl}assets/${tags[1]}.png`} alt='rol' />
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
				{
					<LargeBoxContainer>
						<LargeBoxImage
							src={`${baseUrl}assets/${extraChamInfo
								.find((e) => e.id === id)
								.region.split(' ')
								.join('_')
								.toLowerCase()}_emblem.png`}
							alt='region'
						/>
						<SimpleBoxContainer variant>
							{extraChamInfo.find((e) => e.id === id)?.region.includes('The Void') ||
								(extraChamInfo.find((e) => e.id === id)?.region.includes('Runeterra') ? (
									''
								) : (
									<SimpleBoxImageContainer reverse>
										<SimpleBoxImage
											src={`${baseUrl}assets/${extraChamInfo
												.find((e) => e.id === id)
												.region.split(' ')
												.join('_')
												.toLowerCase()}_crest_icon.png`}
											alt='region'
										/>
									</SimpleBoxImageContainer>
								))}
							<SimpleBoxTextContainer>
								<SimpleBoxText>Region</SimpleBoxText>
								<SimpleBoxText variant>{extraChamInfo.find((e) => e.id === id).region}</SimpleBoxText>
							</SimpleBoxTextContainer>
						</SimpleBoxContainer>
					</LargeBoxContainer>
				}
			</ChamRightContainer>
		</ChamInfoContainer>
	);
};
