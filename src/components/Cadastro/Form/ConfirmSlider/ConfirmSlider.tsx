import Slider from '../FormSlider/Slider';
import Confirmar from '../../Inputs/BotaoConfirmar/Confirmar';
import { styled } from '@material-ui/core';

const WrapperStyles = styled('div')`
    background: white;
    border-radius: 0 0 6px 6px;
    padding: 0 0 50px 0;
    margin-top: -100px;
    z-index: 50;
`

export default function ConfirmSlider({ formSection, goNextSection, confirmData }) {
    if (formSection === 0 || formSection === 4) {
        return null
    } else {
        return (
            <WrapperStyles>
                <Confirmar formSection={formSection} goNext={goNextSection} confirmData={confirmData} />
                <Slider formSection={formSection} />
            </WrapperStyles>
        )
    }
}