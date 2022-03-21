import { StyledLogo } from "../../../styles/donation/DonationLogo.styles";

type LogoType = {
    size?: 'regular' | 'small' | 'big'
}

export default function DonationLogo({size}:LogoType) {
    return (
        <StyledLogo className={size || 'regular'}>
            <img src='/donation_images/donation_logo.png' width={'auto'} height={50} />
            <span><strong>DONATION</strong></span>
        </StyledLogo>
    )
}