import { StyledLoginOptions } from "../../../styles/donation/LoginOptions.styles"

export default function LoginOptions({ isOpen }) {

    return (
        <StyledLoginOptions className={isOpen ? 'open' : 'closed'}>
            <ul >
                <li>
                    Sou empresa
                </li>

                <li>
                    Sou instituição
                </li>

                <li>
                    Sou doador
                </li>
            </ul>
        </StyledLoginOptions>
    )
} 