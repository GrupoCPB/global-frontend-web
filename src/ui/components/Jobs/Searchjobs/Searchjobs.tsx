import React from 'react'
import ListJobs from '../ListJobs/ListJobs'
import { BodySearch, BodyCard, ContainerSearch } from './Searchjobs.styles'

import {
    Image,
    SearchArea,
    FormArea,
    ButtonSubmit
} from './Searchjobs.styles'


function Searchjobs() {
    return (

        <BodySearch>

            <SearchArea>
                <Image src={'/img/logo.png'} alt="logo global org em cores azul e roxo" />
                <FormArea action="" method="POST">
                    <label>
                        <input type="text" placeholder="UX Design" />
                    </label>
                    <label >
                        <input type="text" placeholder="São Paulo" />
                    </label>
                    <ButtonSubmit type="submit">
                        Pesquisar
                    </ButtonSubmit>
                </FormArea>
            </SearchArea>

            <ContainerSearch>
                <BodyCard>
                    Body

                    <ListJobs />
                </BodyCard>
            </ContainerSearch>
        </BodySearch>

    );
}
export default Searchjobs
