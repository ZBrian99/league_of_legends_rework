import { FooterESRB, FooterESRBImage, FooterESRBText } from '../../styled-components';

export const FooterESRBInfo = ({ ESRB }) => {
	return (
		<FooterESRB>
			<FooterESRBImage
				src='https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt90f9ec6d588a312b/5f0f9a0b9be1ce01c562af82/na-esrb.png?&height=100&disable=upscale'
				alt='ESRB'
			/>

			<ul>
				{ESRB.map((text, i) => (
					<FooterESRBText key={i}>{text}</FooterESRBText>
				))}
			</ul>
		</FooterESRB>
	);
};
