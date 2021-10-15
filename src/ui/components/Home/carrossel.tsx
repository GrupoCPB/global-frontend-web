import { styled } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import { Section1, Section2, Section3, Section4, Section5 } from './carrosselSections/sections';

const Wrapper = styled('div')`
    overflow: hidden;
    display: flex;
    
`;

export default function Carrossel() {
    const [state, setState] = useState({
        mode: 'auto',
    })


    useEffect(() => {
        const wrapper = document.getElementById('carrosselWrapper');
        const sections = Array.from(document.querySelectorAll('.section'));

        let sectionWidth = sections[0].clientWidth;
        let scrollX = wrapper.scrollWidth

        let count = 0;
        let ascending = true;

        let esquerda = document.getElementById('esquerda')
        let direita = document.getElementById('direita')

        esquerda.addEventListener('click', change)
        direita.addEventListener('click', change)

        function change(ev) {
            if (state.mode !== 'interactive') {
                setState({
                    mode: 'interactive'
                })
                clear(scrollAuto)
            }

            if (ev.target.id === 'esquerda') {
                if (count > 0) {
                    count--
                    wrapper.scrollBy({
                        left: -sectionWidth,
                        behavior: 'smooth'
                    })
                } else {
                    count = 4
                    wrapper.scrollBy({
                        left: (scrollX - sectionWidth),
                        behavior: 'smooth'
                    })
                }
            } 
            
            if (ev.target.id === 'direita') {
                if (count < 4) {
                    count++
                    wrapper.scrollBy({
                        left: sectionWidth,
                        behavior: 'smooth'
                    })
                } else {
                    count = 0
                    wrapper.scrollBy({
                        left: -(scrollX),
                        behavior: 'smooth'
                    })
                }
            }
        }

        let scrollAuto = setInterval(() => {
            ascending ? count++ : count--
            console.log(count)

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
            console.log('limpou')
            clearInterval(name)
        }

    }, [])

    return (
        <Wrapper id='carrosselWrapper'>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </Wrapper>

    )
}