import React from 'react'

import { 
    Image,
    SearchArea,
    FormArea,
    ButtonSubmit
} from './Searchjobs.styles'


function Searchjobs() {
    return (
        <SearchArea>
            <Image src={'/img/logo.png'} alt="logo global org em cores azul e roxo"/>            
            <FormArea action="" method="POST">
                <label>
                    <input type="text" placeholder="UX Design" />
                </label>
                <label >
                    <input type="text" placeholder="São Paulo"/>
                </label>
                <ButtonSubmit type="submit">
                    Pesquisar
                </ButtonSubmit>           
            </FormArea>            
        </SearchArea>
    )
}
export default Searchjobs