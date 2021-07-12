import { SliderStyles } from './Slider.styles';

export default function Slider(props) {
    if (props.section === 1) {
        return(
            <SliderStyles id='sliderDiv'>
                <span className='hasBefore'></span>
                <span></span>
                <span></span>
            </SliderStyles>
        )
    }

    if (props.section === 2) {
        return(
            <SliderStyles id='sliderDiv'>
                <span></span>
                <span className='hasBefore'></span>
                <span></span>
            </SliderStyles>     
        )
    }

    if (props.section === 3) {
        return(
            <SliderStyles id='sliderDiv'>
                <span></span>
                <span></span>
                <span className='hasBefore'></span>
            </SliderStyles>
        )
    }

}