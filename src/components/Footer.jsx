import {
	FooterContainer,
	FooterESRB,
	FooterESRBImage,
	FooterESRBText,
	FooterLink,
	FooterLinksContainer,
	FooterText,
} from '../styled-components';

export const Footer = () => {
  return (
		<>
			<FooterContainer>
				<FooterLinksContainer variant>
					<FooterLink>About League of Legends</FooterLink>
					<FooterLink>Help Us Improve</FooterLink>
					<FooterLink>Server Status</FooterLink>
					<FooterLink>Support</FooterLink>
					<FooterLink>Esports Pro Site</FooterLink>
				</FooterLinksContainer>
				<FooterText>
					™ & © 2022 Riot Games, Inc. League of Legends and all related logos, characters, names and
					distinctive likenesses thereof are exclusive property of Riot Games, Inc. All Rights Reserved.
				</FooterText>
				<FooterLinksContainer>
					<FooterLink>Privacy Notice</FooterLink>
					<FooterLink>Terms of Service</FooterLink>
					<FooterLink>Cookie Preferences</FooterLink>
				</FooterLinksContainer>
				<FooterESRB>
					<FooterESRBImage
						src='https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt90f9ec6d588a312b/5f0f9a0b9be1ce01c562af82/na-esrb.png?&height=100&disable=upscale'
						alt='ESRB'
					/>
					<ul>
						<FooterESRBText>Blood</FooterESRBText>
						<FooterESRBText>Fantasy Violence</FooterESRBText>
						<FooterESRBText>Mild Suggestive Themes</FooterESRBText>
						<FooterESRBText>Use of Alcohol and Tobacco</FooterESRBText>
						<FooterESRBText>Online Interactions Not Rated by the ESRB</FooterESRBText>
					</ul>
				</FooterESRB>
			</FooterContainer>
		</>
	);
};
