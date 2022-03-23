import { StyledMetasCard } from '../../../styles/donation/MetasCard.styles';
import {Button} from '@material-ui/core'

type MetasCardType = {
    nome_projeto: String,
    valor: String,
    nome_ong: String
    content: String
    votos: String
}

export default function MetasCard({ nome_projeto, valor, nome_ong, content, votos }: MetasCardType) {
    return (
        <StyledMetasCard>
            <div className='metas-card-div-1'>
                <h3>{nome_projeto}</h3>
                <p>{valor}</p>
            </div>

            <div className='metas-card-div-2'>
                <h3>{nome_ong}</h3>

                <p>
                    {content}
                </p>
            </div>

            <div className='metas-card-div-3'>
                <span className='metas-card-div-3-votos-span'>
                    {votos} votos
                </span>

                <Button
                    variant='text'
                    startIcon={<img src='/donation_images/arrow-front.png' alt='votar'></img>}

                >
                    Votar
                </Button>
            </div>

        </StyledMetasCard>
    )
}