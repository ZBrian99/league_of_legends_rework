import { FooterLink, FooterLinksContainer } from "../../styled-components";

export const FooterLinksList = ({ variant = false, links }) => {
	return (
		<FooterLinksContainer variant={variant}>
			{links.map((link, i) => (
				<FooterLink key={i}>{link}</FooterLink>
			))}
		</FooterLinksContainer>
	);
};
