import { styled } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import { Section1, Section2, Section3, Section4, Section5 } from './carrosselSections/sections';

const Wrapper = styled('div')`
    overflow: hidden;
    display: flex;
`;

// type CarrosselProps = {
    
// }

export default function Carrossel() {
    useEffect(() => {
        let wrapper = document.getElementById('carrosselWrapper');
        let carrosselSection = document.getElementById('sec1');
        let carrosselSectionWidth = carrosselSection.clientWidth;

        setInterval(() => {
            if (wrapper.scrollLeft === (wrapper.scrollWidth - carrosselSectionWidth)) {
                wrapper.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                })
            } else {
                wrapper.scrollBy({
                    left: carrosselSectionWidth,
                    behavior: 'smooth'
                })
            }
            console.log(wrapper.scrollWidth - carrosselSectionWidth)
            console.log(wrapper.scrollLeft)
            
        }, 5000)
    }, [])

    //criar uma função para limpar o intervalo caso o usuario queira navegar entre os paineis
    //a mesma função ira religar o intervalo caso nao haja interação depois de 15 segundos

    return (
        <Wrapper id='carrosselWrapper'>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
        </Wrapper>

    )
}