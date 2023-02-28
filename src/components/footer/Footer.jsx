import { FooterContainer } from '../../styled-components';
import { FooterESRBInfo, FooterLinks } from './';

export const Footer = () => {
	const ESRB = [
		'Blood',
		'Fantasy Violence',
		'Mild Suggestive Themes',
		'Use of Alcohol and Tobacco',
		'Online Interactions Not Rated by the ESRB',
	];
	return (
		<>
			<FooterContainer>
				<FooterLinks />
				<FooterESRBInfo ESRB={ESRB} />
			</FooterContainer>
		</>
	);
};
