import {styled} from '@material-ui/core';

const StyledSocialMediaLinks = styled('ul')`
    display: flex;
    align-items: center;

    li {
        margin: 0 7px;
    }
`;

export default function SocialMediaLinks() {
    return (
        <StyledSocialMediaLinks>
            <li>
                <a href="#">
                    <img src='/donation_images/social-media-icons/yt.png' />
                </a>
            </li>

            <li>
                <a href="#">
                    <img src='/donation_images/social-media-icons/linkdn.png' />
                </a>
            </li>

            <li>
                <a href="#">
                    <img src='/donation_images/social-media-icons/ig.png' />
                </a>
            </li>

            <li>
                <a href="#">
                    <img src='/donation_images/social-media-icons/wpp.png' />
                </a>
            </li>

            <li>
                <a href="#">
                    <img src='/donation_images/social-media-icons/fb.png' />
                </a>
            </li>

            <li>
                <a href="#">
                    <img src='/donation_images/social-media-icons/tt.png' />
                </a>
            </li>
        </StyledSocialMediaLinks>
    )
}