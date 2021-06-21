import React from 'react'
import ListJobs from '../ListJobs/ListJobs'
import { BodySearch, BodyCard, ContainerSearch } from './Searchjobs.styles'

function Searchjobs() {
    return (

        <BodySearch>
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