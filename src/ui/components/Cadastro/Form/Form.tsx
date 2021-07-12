import { FormStyles } from './FormStyles.styles';
import { useState } from 'react';
import { styled } from '@material-ui/core';
import FormTabs from './FormTabs/FormTabs';
import { AcessoComponent, ContatoComponent, InfoGeralComponent, SobreComponent } from './FormSections/FormSections';

const Wrapper = styled('div')`
    width: 65%;
    margin: auto;
    box-shadow: 10 10px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
`;

export default function Form() {
    const [state, setState] = useState({
        formSection: 0
    })

    function changeSectionByTab(ev) {
        let id = (ev.target.id).slice(3, 4)
        setState({
            formSection: id
        })

        let tabs = Array.from(document.querySelectorAll('.tab'));

        tabs.find(el => {
            if (el.classList.contains('active')) {
                el.classList.remove('active')
            }
        })

        ev.target.classList.add('active')   

        console.log(tabs.find(el => el.classList.contains('active')))
    }

    function confirmData() {
        //checar os inputs da sessao, passar para o state se todos estiverem corretos. Se estiver tudo ok, chamar "goNextSection".
    }

    function goNextSection() {
        setState({
            formSection: state.formSection + 1
        })
    }


    return(
        <Wrapper>
            <FormTabs changeSectionByTab={changeSectionByTab}/>
            <FormStyles>
                {
                    [<AcessoComponent key={0} section={0}/>, 
                    <InfoGeralComponent key={1} section={1}/>, 
                    <SobreComponent key={2} section={2}/>, 
                    <ContatoComponent key={3} section={3}/>][state.formSection]
                }
            </FormStyles>
        </Wrapper>
    )
}