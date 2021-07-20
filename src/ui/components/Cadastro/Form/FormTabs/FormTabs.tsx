import { Tabs } from './FormTabs.styles';

export default function FormTabs(props) {
    if (props.formSection === 1) {
        return (
            <Tabs>
                <div id='tab0' onClick={props.goToFirstSection} className='tab'>
                    Acesso
                </div>

                <div id='tab1' className='tab active'>
                    Informações gerais
                </div>

                <div id='tab2' className='tab'>
                    Sobre a ONG/projeto
                </div>

                <div id='tab3' className='tab'>
                    Contato
                </div>
            </Tabs>
        )
    }

    if (props.formSection === 2) {
        return (
            <Tabs>
                <div id='tab0' onClick={props.goToFirstSection} className='tab'>
                    Acesso
                </div>

                <div id='tab1' className='tab'>
                    Informações gerais
                </div>

                <div id='tab2' className='tab active'>
                    Sobre a ONG/projeto
                </div>

                <div id='tab3' className='tab'>
                    Contato
                </div>
            </Tabs>
        )
    }

    if (props.formSection === 3) {
        return (
            <Tabs>
                <div id='tab0' onClick={props.goToFirstSection} className='tab'>
                    Acesso
                </div>

                <div id='tab1' className='tab'>
                    Informações gerais
                </div>

                <div id='tab2' className='tab'>
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
            <div id='tab0' onClick={props.goToFirstSection} className='tab active'>
                Acesso
            </div>

            <div id='tab1' className='tab'>
                Informações gerais
            </div>

            <div id='tab2' className='tab'>
                Sobre a ONG/projeto
            </div>

            <div id='tab3' className='tab'>
                Contato
            </div>
        </Tabs>
    )
}
