import { Tabs } from './FormTabs.styles';

export default function FormTabs(props) {
    if (props.formSection === 4) {
        return null
    }

    if (props.formSection === 1) {
        return (
            <Tabs>
                <div id='tab0' onClick={props.goToSectionByTab} className='tab'>
                    Acesso
                </div>

                <div id='tab1' className='tab active'>
                    Informações gerais
                </div>

                <div id='tab2' onClick={props.goToSectionByTab} className='tab'>
                    Sobre a ONG/projeto
                </div>

                <div id='tab3' onClick={props.goToSectionByTab} className='tab'>
                    Contato
                </div>
            </Tabs>
        )
    }

    if (props.formSection === 2) {
        return (
            <Tabs>
                <div id='tab0' onClick={props.goToSectionByTab} className='tab'>
                    Acesso
                </div>

                <div id='tab1' onClick={props.goToSectionByTab} className='tab'>
                    Informações gerais
                </div>

                <div id='tab2' className='tab active'>
                    Sobre a ONG/projeto
                </div>

                <div id='tab3' onClick={props.goToSectionByTab} className='tab'>
                    Contato
                </div>
            </Tabs>
        )
    }

    if (props.formSection === 3) {
        return (
            <Tabs>
                <div id='tab0' onClick={props.goToSectionByTab} className='tab'>
                    Acesso
                </div>

                <div id='tab1' onClick={props.goToSectionByTab} className='tab'>
                    Informações gerais
                </div>

                <div id='tab2' onClick={props.goToSectionByTab} className='tab'>
                    Sobre a ONG/projeto
                </div>

                <div id='tab3' className='tab active'>
                    Contato
                </div>
            </Tabs>
        )
    }

    return (
        <Tabs>
            <div id='tab0' onClick={props.goToSectionByTab} className='tab active'>
                Acesso
            </div>

            <div id='tab1' onClick={props.goToSectionByTab} className='tab'>
                Informações gerais
            </div>

            <div id='tab2' onClick={props.goToSectionByTab} className='tab'>
                Sobre a ONG/projeto
            </div>

            <div id='tab3' onClick={props.goToSectionByTab} className='tab'>
                Contato
            </div>
        </Tabs>
    )
}
