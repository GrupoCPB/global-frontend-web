import React from 'react'

import { 
    Image,
    SearchArea,
    SearchInput,
    ButtonSubmit
} from './Searchjobs.styles'


function Searchjobs() {
    return (
        <SearchArea>
            <Image src={'/img/logo.png'} alt="logo global org em cores azul e roxo"/>
            <SearchInput 
            placeholder="Digite uma função" 
            autoFocus={true}
            />
            <SearchInput 
            placeholder="Digite uma Cidade" 
            autoFocus={true}
            />
            <ButtonSubmit>
                Pesquisar
            </ButtonSubmit>
        </SearchArea>
    )
}

export default Searchjobs