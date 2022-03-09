import { styled } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import { Section1, Section2, Section3, Section4, Section5 } from './carrosselSections/sections';

const OuterWrapper = styled('div')`
    &:hover .scrollButton {
        background: rgba(0,0,0,0.3);
    }
`;

const Wrapper = styled('div')`
    width: 100vw;
    height: calc(100vh - 100px);
    overflow: hidden;
    display: flex;
`;

const ScrollButton = styled('button')`
    height: 73%;
    position: absolute;
    width: 50px;
    border: none;
    background: transparent;
    cursor: pointer;

    &:last-of-type {
        right: 0;
        top: 85px;
    }
`;


export default function Carrossel() {
    const [state, setState] = useState({
        mode: 'auto',
    })

    function carrosselAutoScroll() {
        if (state.mode === 'interactive') {
            return false
        }
        const wrapper = document.getElementById('carrosselWrapper');
        const sections = Array.from(document.querySelectorAll('.section'));

        let sectionWidth = sections[0].clientWidth;
        let scrollX = wrapper.scrollWidth

        let count = 0;
        let ascending = true;

        // let esquerda = document.getElementById('esquerda')
        // let direita = document.getElementById('direita')

        // esquerda.addEventListener('click', change)
        // direita.addEventListener('click', change)

        // function change(ev) {
        //     if (state.mode == 'auto') {
        //         setState({
        //             mode: 'interactive'
        //         })
        //         clear(scrollAuto)
        //     }

        //     if (ev.target.id === 'esquerda') {
        //         if (count > 0) {
        //             count--
        //             wrapper.scrollBy({
        //                 left: -sectionWidth,
        //                 behavior: 'smooth'
        //             })
        //         } else {
        //             count = 4
        //             wrapper.scrollBy({
        //                 left: (scrollX - sectionWidth),
        //                 behavior: 'smooth'
        //             })
        //         }
        //     }

        //     if (ev.target.id === 'direita') {
        //         if (count < 4) {
        //             count++
        //             wrapper.scrollBy({
        //                 left: sectionWidth,
        //                 behavior: 'smooth'
        //             })
        //         } else {
        //             count = 0
        //             wrapper.scrollBy({
        //                 left: -(scrollX),
        //                 behavior: 'smooth'
        //             })
        //         }
        //     }
        // }

        window.onresize = (ev) => {
            let newSectionWidth = document.querySelector('.section').clientWidth;
            sectionWidth = newSectionWidth;
        }

        let scrollAuto = setInterval(() => {
            ascending ? count++ : count--

            if (ascending == true) {
                if (count == 5) {
                    ascending = false
                    wrapper.scrollBy({
                        left: -sectionWidth,
                        behavior: 'smooth'
                    })
                } else {
                    wrapper.scrollBy({
                        left: sectionWidth,
                        behavior: 'smooth'
                    })
                }
            }

            if (ascending == false) {
                if (count == 0) {
                    ascending = true
                    wrapper.scrollBy({
                        left: sectionWidth,
                        behavior: 'smooth'
                    })
                } else {
                    wrapper.scrollBy({
                        left: -sectionWidth,
                        behavior: 'smooth'
                    })
                }
            }
        }, 6000)

        function clear(name) {
            clearInterval(name)
        }
    }

    useEffect(() => {
        carrosselAutoScroll();
    }, [])

    return (
        <OuterWrapper>
            {/* <ScrollButton className='scrollButton' id='esquerda' /> */}
            <Wrapper id='carrosselWrapper'>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
            </Wrapper>
            {/* <ScrollButton className='scrollButton' id='direita' /> */}
        </OuterWrapper>
    )
}