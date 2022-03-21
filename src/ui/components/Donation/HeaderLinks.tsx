import SocialMediaLinks from "./SocialMediaLinks"

export default function HeaderLinks() {
    return (
        <div className='header-links-main-wrapper'>
            <div className='header-links-inner-wrapper'>
                <SocialMediaLinks />

                <div className='idioma'>
                    <img src='/donation_images/united-states.png' />
                    <p>English</p>
                </div>
            </div>
        </div>
    )
}