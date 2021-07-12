import { Tabs } from './FormTabs.styles';

export default function FormTabs( {changeSectionByTab} ) {
    return(
        <Tabs>
            <div id='tab0' className='tab active' onClick={changeSectionByTab}>
                Acesso
            </div>

            <div id='tab1' className='tab' onClick={changeSectionByTab}>
                Informações gerais
            </div>

            <div id='tab2' className='tab' onClick={changeSectionByTab}>
                Sobre a ONG/projeto
            </div>

            <div id='tab3' className='tab' onClick={changeSectionByTab}>
                Contato
            </div>
        </Tabs>

    )
}
