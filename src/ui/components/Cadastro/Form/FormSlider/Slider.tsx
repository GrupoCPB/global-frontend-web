import { SliderStyles } from './Slider.styles';

export default function Slider(props) {
    if (props.formSection === 0) {
        return null
    }

    if (props.formSection === 2) {
        return(
            <SliderStyles id='sliderDiv'>
                <span></span>
                <span className='hasBefore'></span>
                <span></span>
            </SliderStyles>     
        )
    }

    if (props.formSection === 3) {
        return(
            <SliderStyles id='sliderDiv'>
                <span></span>
                <span></span>
                <span className='hasBefore'></span>
            </SliderStyles>
        )
    }

    return(
        <SliderStyles id='sliderDiv'>
            <span className='hasBefore'></span>
            <span></span>
            <span></span>
        </SliderStyles>
    )
}