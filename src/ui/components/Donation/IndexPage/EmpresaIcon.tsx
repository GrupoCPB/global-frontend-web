import { StyledBox } from '../../../../styles/donation/EmpresaIcon.styles';

export default function EmpresaIcon({ imgSrc }) {
    return (
        <StyledBox>
            <img src={imgSrc} alt='empresa' />
            <div className='overlay'>
                <button><span>Visitar</span></button>
            </div>
        </StyledBox>
    )
}